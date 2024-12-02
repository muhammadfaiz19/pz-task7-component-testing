# Gunakan image node untuk tahap build
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Salin semua file source
COPY . .

# Build project
RUN npm run build

# Stage untuk image production
FROM node:18-slim

# Set working directory
WORKDIR /app

# Salin hasil build dari stage sebelumnya
COPY --from=build /app /app

# Install production dependencies
RUN npm install --production

# Exposure port
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "dev"]
