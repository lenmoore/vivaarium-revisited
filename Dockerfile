FROM node:18 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21
COPY --from=build-stage /app/dist /usr/share/nginx/html
