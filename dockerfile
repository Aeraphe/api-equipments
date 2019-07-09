FROM node:10.16.0

# RUN useradd --user-group --create-home --shell /bin/false app &&\ npm install --global npm

ENV HOME=/home/app

COPY   package.json npm-shrinkwrap.json $HOME/api-equipments/

# RUN chown -R app:app $HOME/*

WORKDIR $HOME/api-equipments

RUN npm i -g typescript

RUN npm install -g ts-node 

RUN npm install typeorm -g


# USER root

COPY . $HOME/api-equipments


# CMD ["npm","run dev"]