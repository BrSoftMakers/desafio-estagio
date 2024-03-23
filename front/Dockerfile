FROM node:lts-alpine

WORKDIR /usr/app/front

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]