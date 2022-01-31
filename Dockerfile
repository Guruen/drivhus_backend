FROM node:lts-alpine

ENV NODE_ENV=production
ENV TZ=Europe/Copenhagen

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
