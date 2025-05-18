# Etapa 1: Build de la aplicación
FROM node:18 AS builder

# Crear y entrar al directorio de la app
WORKDIR /app

# Copiar los archivos y dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la app con Vite
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:stable-alpine

# Copiar el build generado a Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Eliminar la configuración por defecto de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d

# Exponer puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
