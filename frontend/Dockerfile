# Build step
FROM node:14-buster as build
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . ./
RUN npm run build:prod

# nginx server
FROM nginx:1.19-alpine
COPY --from=build /app/dist/dashboard /usr/share/nginx/html
