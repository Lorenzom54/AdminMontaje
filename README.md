# Admin Panel - Control de Producción

Panel de administración para el control de producción de montaje de obras.

## 🚀 Comandos Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo con hot reload.

### Construcción y Ejecución

#### Para Desarrollo Local (Node.js)
```bash
# Construir para desarrollo local
npm run build:local

# Ejecutar servidor local
npm run start

# O hacer ambas cosas en un comando
npm run start:local
```

#### Para Producción (Netlify)
```bash
# Construir para Netlify
npm run build:netlify

# O usar el build estándar
npm run build
```

### Otros Comandos
```bash
# Vista previa del build
npm run preview

# Comando de Astro
npm run astro
```

## 📁 Estructura del Proyecto

- **Desarrollo**: Usa `@astrojs/node` para servidor local
- **Producción**: Usa `@astrojs/netlify` para funciones serverless

## 🔧 Configuración

El proyecto está configurado para cambiar automáticamente entre adaptadores según el entorno:

- `NODE_ENV=development` → Usa Node.js adapter
- `NODE_ENV=production` → Usa Netlify adapter

## 🌐 Despliegue

### Netlify
El proyecto está configurado para desplegar automáticamente en Netlify. Los builds de producción generan funciones serverless.

### Local
Para ejecutar localmente, usa los comandos de desarrollo local que generan un servidor Node.js tradicional.

## 📝 Notas

- El servidor de desarrollo local corre en `http://localhost:4321`
- Las funciones de fases dinámicas están completamente implementadas
- Todas las rutas API están configuradas para ambos modos
