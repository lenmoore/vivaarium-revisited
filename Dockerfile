FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build


FROM nginx as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Temporary Nginx config for Certbot verification during build
COPY nginx-temp.conf /etc/nginx/nginx.conf

# Install Certbot
RUN apt-get update && apt-get install -y certbot

# Copy the cert generation script
COPY generate_cert.sh /usr/share/nginx/

# Revert Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Run the script during container startup
CMD ["sh", "/usr/share/nginx/generate_cert.sh"]