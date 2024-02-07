#pasos para crear una imagen a través de Dockerfile

#version de la imagen a descargar
FROM node:12.22.1-alpine3.11

#directorio de trabajo
WORKDIR /app

#copio del fichero package a mi rectorio de trabajo
COPY package*.json ./

#instalo todos los paquetes node que aparece en package.json
RUN npm install

#copio todo lo que tengo en este mismo directorio de trabajo donde esta el Dockerfile y lo copia al directorio de trabajo /app
COPY . .

#voy a ejecutar esta instrucción npm start
CMD ["npm", "start"]