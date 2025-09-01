# Imagen base ligera con Node.js
FROM node:20-slim

# Directorio de trabajo
WORKDIR /app

# Copiar dependencias primero para cachear
COPY package*.json ./
RUN npm install --production

# Copiar el resto del proyecto
COPY . .

# Build de Astro
RUN npm run build

# Puerto interno que usará Astro
EXPOSE 3000

# Arrancar la app en todas las interfaces
CMD ["npm", "run", "start"]
