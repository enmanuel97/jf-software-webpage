# Etapa 1: Instalación de dependencias y construcción
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Copia el archivo de entorno para staging
COPY .env.example ./.env

# Instala dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Etapa 2: Imagen para producción
FROM node:18-alpine AS runner

# Establece el directorio de trabajo
WORKDIR /app

# Establece la variable de entorno para producción
ENV NODE_ENV production

# Copia las dependencias necesarias desde el builder
COPY --from=builder /app/. ./


# Expone el puerto que Next.js usa por defecto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]