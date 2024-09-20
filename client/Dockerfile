# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set working directory in the container
WORKDIR /usr/src/app

# Copy the frontend package files
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Build the React app for production
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html/

# Expose port 80 for frontend
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
