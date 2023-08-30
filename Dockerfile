FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY ./server/fullkey.pem /etc/letsencrypt/live/vivaarium.ee/fullchain.pem
COPY ./server/privkey.pem /etc/letsencrypt/live/vivaarium.ee/privkey.pem
COPY nginx.conf /etc/nginx/nginx.conf