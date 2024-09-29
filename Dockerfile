# Usa la imagen oficial de Node.js como base
FROM node:14

# Crea un directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación al contenedor
COPY . .

# Expone el puerto que usará tu aplicación Express
EXPOSE 3000

# Comando para ejecutar tu aplicación
CMD ["node", "server.js"]
