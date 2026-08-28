FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN NODE_OPTIONS="--max-old-space-size=1024" npm run build

FROM caddy:2-alpine

COPY --from=build /app/dist /usr/share/caddy

EXPOSE 80