# Imagen base con Node.js
FROM node:20-slim

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias y PM2 globalmente
RUN npm install && npm install -g pm2

# Copiar todo el proyecto
COPY . .

# Exponer el puerto que usará Astro
EXPOSE 3000

# Arrancar la app con PM2 en modo fork
CMD ["pm2-runtime",]()
