FROM node:14.18.2 

COPY package.json .

RUN yarn

COPY ./routes ./routes
COPY ./app.ts .

WORKDIR .

EXPOSE 3001

CMD [ "yarn", "ts-node", "app.ts" ]  
