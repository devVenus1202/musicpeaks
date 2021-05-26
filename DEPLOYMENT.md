# RockPeaks React DEPLOYMENT Documentation


## Remotely

### Push to bitbucket branch
#### 'develop'
* deploys to development container

#### 'staging'
* deploys to staging container

#### 'production'
* deploys to production container

## Locally

### Yarn commands
```bash
yarn docker:up
yarn docker:up-detach
yarn docker:stop
yarn docker:down
```

### Work in Docker environment for Development
```bash
docker-compose -d up
```
### View Docker logs (when detached)
```bash
docker-compose logs -f
```

### Stop Docker environment for Development
```bash
docker-compose stop
```

### Terminate Docker environment for Development
```bash
docker-compose down
```

### Container (just for testing deployments)
#### You can Build just the container
```bash
docker build -t musicpeaks/nextjs -n  .
```

#### You can show the built container
```bash
docker image ls
```

#### You can Run the container
```bash
docker run -p 3000:3000 rockpeaks-react:development
# docker run -p 3000:3000 musicpeaks/nextjs
```

#### You can run the container detached
```bash
docker run -d -p 3000:3000 rockpeaks-react:development
#docker run -d -p 3000:3000 musicpeaks/nextjs
```

#### You can list the running containers
```bash
docker container ls
# or show all containers
docker container ls -a
```
#### You can stop a running containers
```bash
# docker container ls
# first to get container id
docker container stop <CONTAINER ID>
```

## Pipelines Setup

### Environment Variables
* ECS_SERVICE_NAME: Name of the ECS Service to update.
* ECS_CLUSTER_NAME: Name of the ECS Cluster the service should run on.
* ECS_TASK_FAMILY_NAME: Family name for the Task Definition.
* AWS_SECRET_ACCESS_KEY: Secret key for a user with the required permissions.
* AWS_ACCESS_KEY_ID: Access key for a user with the required permissions.
* AWS_DEFAULT_REGION: Region where the target AWS Lambda function is.
* AWS_REGISTRY_URL: The registry URL for ECR
* GRAPHQL_TOKEN: for the container's ENV
* GRAPHQL_URI: for the container's ENV
* NODE_PORT: for the container's ENV
* TASK_CPU: The task's CPU value
* TASK_MEMORY: The task's Memory value