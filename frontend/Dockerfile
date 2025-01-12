# Use an official Node.js runtime as a base image
FROM node:14.15.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .

RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port the frontend will run on (React app usually runs on 3000)
EXPOSE 3000

# Start the frontend React app
CMD ["npm", "start"]
