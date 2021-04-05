FROM node:14-alpine as base
# App directory
WORKDIR /usr/src/app
# Copy app package json
COPY package.json /usr/src/app
RUN npm install
# Bundle app source
COPY . /usr/src/app


FROM base as production
RUN npm run build