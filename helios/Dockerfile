# Use the official Node.js image to build the Angular project
FROM node:14 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Build the Angular project
RUN npm run build --prod

# Use Nginx to serve the Angular app
FROM nginx:1.17.1-alpine

COPY --from=build /usr/src/app/dist/helios /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
