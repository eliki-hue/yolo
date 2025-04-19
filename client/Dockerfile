# Use an official Node runtime as a parent image
FROM node:16-alpine AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Fix Webpack OpenSSL issue on Node 17+
RUN  npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]