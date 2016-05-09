FROM mhart/alpine-node:5

RUN npm install express request

RUN mkdir -p /opt/app
WORKDIR /opt/app
ADD ./ /opt/app

EXPOSE 8081

CMD ["node", "server.js"]
