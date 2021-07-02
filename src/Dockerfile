FROM node:12.18.1-alpine3.11 as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build-testing

# prepare nginx
FROM nginx:1.16.0-alpine as prod-stage
COPY --from=build-step /app/dist/heroapp /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]