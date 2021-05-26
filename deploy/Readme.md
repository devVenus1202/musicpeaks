# Setup deployment

## Initial

1) Make sure Docker is installed and running
2) Make sure AWS CLI is installed and working

## Docker file

1) Update deploy.\<env\>.Dockerfile in root directory

## Create Repository

1) Visit [https://us-east-1.console.aws.amazon.com/ecr/repositories?region=us-east-1](https://us-east-1.console.aws.amazon.com/ecr/repositories?region=us-east-1)
2) Tap "Create Repository".
3) Give it a name; Note the URI
4) Update test-env.sh
5) Update build-repo.sh (image_name, etc)

## Test created Repository

1) from root direcory, run ```source deploy/test-env.sh;```
2) ```deploy/build-repo.sh```

## Create Task Definition

see https://medium.com/@ariklevliber/aws-fargate-from-start-to-finish-for-a-nodejs-app-9a0e5fbf6361

1) "create new task definition"
   1) Fargate
   2) click "Configure via JSON"
   3) paste in taskdef.json - click "Create"

## Create Cluster

1) "create cluster"
   1) "networking only"
   2) check "create vpc"
   3) "create cluster"

## Create LB (From EC2 Services)

* This is required to maintain a persitant IP for the service when the tasks change.

1) "Services->EC2"
2) "Load Balancers"
3) "Create Load Balancer"
4) "ALB" -> Create

## Create Cloud Watch log group

## Create Service (From ECS -> Cluster -> Add Service)

* set name to be \<service-name\>-\<environement\>
* set subnets and vpc from cluster
* set security group from alb
* for development, set auto assign public ip (to allow debugging)
* Set grace period to 300
* set use ALB
* select ALB that was created above
* add container to ALB (select target group - or create new)