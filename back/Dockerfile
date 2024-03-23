FROM node:lts-alpine

WORKDIR /usr/app/back

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]