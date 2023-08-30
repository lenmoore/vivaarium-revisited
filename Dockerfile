FROM node:latest as build-stage
WORKDIR /app
RUN npm cache clean --force
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build:server

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf