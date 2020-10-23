FROM node:12.18-alpine AS development
ENV NODE_ENV=development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD npm run dev

FROM node:12.18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:12.18-alpine AS production
ENV NODE_ENV=production
COPY --from=build /app/dist /app/package*.json ./
RUN npm ci --production
CMD node index.js
