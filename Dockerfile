# Imagen base ligera con Nginx
FROM nginx:alpine

# Copiar build estático de Astro al directorio que Nginx sirve
COPY dist/ /usr/share/nginx/html

# Copiar configuración personalizada de Nginx si quieres SPA
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Arrancar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
