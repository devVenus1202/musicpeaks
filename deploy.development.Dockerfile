FROM node:10.13.0-alpine

LABEL name "musicpeaks.com musicpeaksreact/nextjs"

ARG commit

ENV commit=$commit


# Install packages required
RUN apk add openssh \
git \
yarn

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# List the dependencies for pipeline debugging
RUN yarn list --depth=0

# Bundle app source
COPY . /usr/src/app

# Build the next app
RUN yarn build

# Build Storybook
RUN mkdir -p /usr/src/app/tmp && yarn storybook:static

# Mark our build so we can confirm
RUN echo "{ \"commit\":\"${commit}\", \"buildDate\": \"`date`\"}" > ./static/commit.json

EXPOSE 3000
CMD [ "yarn", "start" ]