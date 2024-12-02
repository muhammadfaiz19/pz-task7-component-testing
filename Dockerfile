# Build stage
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies using npm ci (faster and more reliable in CI/CD)
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy the built app from the build stage
COPY --from=build /app /app

# Install only production dependencies
RUN npm install --production

# Expose the port your application will run on
EXPOSE 3000

# Start the application (make sure this matches your production start script)
CMD ["npm", "run", "start"]
