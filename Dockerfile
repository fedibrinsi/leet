# Multi-stage build to prevent source code exposure
# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./

# Install dependencies with clean cache and proper permissions
RUN npm cache clean --force && \
    npm install && \
    chmod -R +x node_modules/.bin

# Copy application source code
COPY . .

# Build the application (call vite via node to avoid exec bit issues)
RUN node ./node_modules/vite/bin/vite.js build

# Stage 2: Serve with Nginx (source code not exposed)
FROM nginx:alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
