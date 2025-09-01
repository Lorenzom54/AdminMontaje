# Imagen base ligera con Node.js
FROM node:20-slim

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json primero (para cachear dependencias)
COPY package*.json ./

# Instalar dependencias de producción
RUN npm install --production

# Copiar todo el código del proyecto
COPY . .

# Compilar Astro
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Lanzar la app
CMD ["npm", "run", "start"]
