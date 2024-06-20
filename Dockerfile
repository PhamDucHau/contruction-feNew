FROM node:20.10.0 as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .
RUN npm run build

CMD ["npm", "run","start"]
