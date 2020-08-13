# Build step
FROM node:12-alpine as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . ./
RUN npm run build:prod

# nginx server
FROM nginx:1.19-alpine
COPY --from=build /app/dist/dashboard /usr/share/nginx/html
