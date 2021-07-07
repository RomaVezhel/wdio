FROM node:10.16.3

WORKDIR /project
COPY . .

RUN npm install
RUN npm install @wdio/cli

CMD ["npm", "test"]