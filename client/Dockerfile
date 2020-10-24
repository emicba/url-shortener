FROM node:12.18-alpine AS development
ENV NODE_ENV=development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD npm run serve

FROM node:12.18-alpine AS build
ENV NODE_ENV=production
ARG VUE_APP_API_URL
ENV VUE_APP_API_URL=${VUE_APP_API_URL}
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.19.3-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
