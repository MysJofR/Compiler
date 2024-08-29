FROM node:alpine3.18
WORKDIR /app
COPY package.json .
RUN npm i -g pnpm
RUN pnpm i
RUN apk add openjdk17-jre
COPY . .
EXPOSE 8000
CMD ["npm", "start"]