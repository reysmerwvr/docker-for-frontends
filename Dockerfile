# Build stage
FROM node:lts-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Run stage
FROM nginx:alpine
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html