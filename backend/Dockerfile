# Use the official Node.js image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to install dependencies
COPY package.json .

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables (use container names for communication)
ENV MONGO_URL='mongodb://mongo:27017/blood_bank_db'
ENV JWT_SECRET='123456'
ENV PORT=8080

# Expose the port the backend will run on
EXPOSE 8080

# Start the backend server
CMD ["npm", "run", "server"]
