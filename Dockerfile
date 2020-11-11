FROM node:14.14.0-alpine

WORKDIR /usr/bineetNaidu
ADD package*.json ./

RUN npm ci
ADD ./ ./

CMD [ "npm", "start" ]