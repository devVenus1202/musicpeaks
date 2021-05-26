##/usr/bin/env sh
set -e
$(aws ecr get-login --no-include-email --region ${AWS_DEFAULT_REGION})
export IMAGE_NAME="musicpeaks-react:${BITBUCKET_BRANCH}"

echo "Creating an env file to be used by build"
touch .env
echo "GRAPHQL_URI=$GRAPHQL_URI" >> .env
echo "GRAPHQL_TOKEN=$GRAPHQL_TOKEN" >> .env
echo "DRUPAL_ROUTER_URI=$DRUPAL_ROUTER_URI" >> .env
echo "Test contents of .env file"
cat .env

#export REGISTRY_FULL_NAME="${AWS_REGISTRY_URL}:${BITBUCKET_BRANCH}-${BITBUCKET_BUILD_NUMBER}"
echo "1) Building image \"${IMAGE_NAME}\" to registry: \"${REGISTRY_FULL_NAME}\""
docker build -t ${IMAGE_NAME} --build-arg commit="${BITBUCKET_BRANCH}-${BITBUCKET_BUILD_NUMBER}-${BITBUCKET_COMMIT}" -f deploy.${BITBUCKET_BRANCH}.Dockerfile .
echo "2) Tagging \"${IMAGE_NAME}\" to registry: \"${REGISTRY_FULL_NAME}\""
docker tag ${IMAGE_NAME} ${REGISTRY_FULL_NAME}
echo "3) Pushing to registry: \"${REGISTRY_FULL_NAME}\""
docker push ${REGISTRY_FULL_NAME}
