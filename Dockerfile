# Stage 1: Build & install dependencies
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Skip chromium download during npm install
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
RUN npm install --omit=dev

# Stage 2: Runtime image
FROM node:20-alpine
WORKDIR /app

# Install chromium and its dependencies from Alpine repository
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

# Environment variables to run Puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

COPY --from=builder /app/node_modules ./node_modules
COPY . .

EXPOSE 9222
CMD ["node", "server.js"]
