# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Expose the app on port 3000
EXPOSE 3000

# Define the command to run the app
CMD ["node", "server.js"]
