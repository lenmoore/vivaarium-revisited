# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:lts AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source code to the container
COPY . .

# Build the Vue 3 app
RUN npm run build

# Create a new lightweight container for serving the built app
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx web root directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (default HTTP port)
EXPOSE 80

# Start the Nginx server when the container runs
CMD ["nginx", "-g", "daemon off;"]
