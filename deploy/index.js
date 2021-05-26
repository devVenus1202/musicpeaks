const AWS = require('aws-sdk');
const template = require('./taskdef.json');

const ecs = new AWS.ECS();

function errorExit(msg) {
    console.error('Error:');
    console.error(msg);
    process.exit(1);
}
const requiredEnvironmentVars = [
    'ECS_TASK_FAMILY_NAME',
    'ECS_CLUSTER_NAME',
    'ECS_SERVICE_NAME',
    'REGISTRY_FULL_NAME',
    'TASK_MEMORY',
    'TASK_CPU',
    'NODE_PORT',
    'GRAPHQL_URI',
    'GRAPHQL_TOKEN',
    'DRUPAL_ROUTER_URI',
    'BITBUCKET_BRANCH',
    'BITBUCKET_BUILD_NUMBER',
];

const taskEnvironmentVars = [
    'GRAPHQL_URI',
    'GRAPHQL_TOKEN',
    'DRUPAL_ROUTER_URI',
];

function loadVars(required) {
    const notSet = required.filter(env => !(typeof process.env[env] !== 'undefined'));

    if (notSet.length > 0) {
        errorExit(`Required environment variables are not set: [\n${notSet.join('\n')}\n]`);
    }

    return required.reduce((map, obj) => {
        map[obj] = process.env[obj];
        return map;
    }, {});
}

function buildTaskEnvVars(vars, values) {
    return vars.map(v => ({ name: v, value: values[v] }));
}

const envVars = loadVars(requiredEnvironmentVars);
console.log('1) Loaded vars');

const container = template.containerDefinitions[0];
container.image = envVars.REGISTRY_FULL_NAME;
container.name = envVars.ECS_TASK_FAMILY_NAME;
container.environment = buildTaskEnvVars(taskEnvironmentVars, envVars);
template.containerDefinitions[0] = container;

template.memory = envVars.TASK_MEMORY;
template.family = envVars.ECS_TASK_FAMILY_NAME;
template.cpu = envVars.TASK_CPU;

console.log('2) Built template');
console.log(template);

console.log('3) Registering task');
ecs.registerTaskDefinition(template, (err, data) => {
    if (err) {
        console.log(err, err.stack);
        errorExit(err);
    } else {
        console.log('4) Registration Complete');
        console.log('5) Updating Service');
        const serviceParams = {
            service: envVars.ECS_SERVICE_NAME,
            cluster: envVars.ECS_CLUSTER_NAME,
            taskDefinition: envVars.ECS_TASK_FAMILY_NAME,
            desiredCount: 1,
        };
        console.log(serviceParams);

        ecs.updateService(serviceParams, (err, data) => {
            if (err) {
                console.log(err, err.stack); // an error occurred
                errorExit(err);
            } else {
                console.log('6) Service Update Complete');
            }
          });
    }
});
