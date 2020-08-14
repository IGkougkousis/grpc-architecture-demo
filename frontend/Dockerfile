# Build step
FROM node:14-buster as build

ARG web_api_host
ARG web_api_port

ENV WEB_API_PORT $web_api_port
ENV WEB_API_HOST $web_api_host

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
RUN npm run build:prod

# nginx server
FROM nginx:1.19-alpine
COPY --from=build /app/dist/dashboard /usr/share/nginx/html
