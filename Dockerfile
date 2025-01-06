# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /lloms_app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the application to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3000


# Run the application
CMD ["node", "src/server.js"]
