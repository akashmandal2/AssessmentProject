# Create image based on the official Node 6 image from the dockerhub
FROM node:latest as node

# Create a directory where our app will be placed
RUN mkdir -p /express/app

# Change directory so that our commands run inside this new directory
WORKDIR /express/app

# Copy dependency definitions
COPY package.json /express/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /express/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]

