# Portafolio Web - Jose Abril

Portafolio online construido con React y Vite para presentar laboratorios, tareas y proyectos web con repositorios publicos de GitHub.

# Link al portafolio deployado

http://209.126.125.149:3008/

## Stack

- React + Vite para la SPA y el build.
- React Router para enrutamiento entre la pagina principal y el detalle de cada proyecto.
- CSS con variables globales y layout responsivo.
- Consumo de API REST publica de GitHub con estados de carga y error visible.
- ESLint para revisar calidad basica del codigo.
- Docker + Nginx para servir el build de produccion.

## Secciones

- Sobre mi: formacion, contacto, GitHub e ingles avanzado.
- Tecnologias: stack usado y razon tecnica de cada herramienta.
- Proyectos: labs, tareas y proyectos con enlaces funcionales a repos publicos.

## Requisitos

- Node.js 22 o superior.
- npm.
- Docker, opcional para correr el contenedor.

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La app queda disponible en la URL local que indique Vite.

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Docker

Construir imagen:

```bash
docker build -t esj0-portafolio .
```

Correr contenedor:

```bash
docker run --rm -p 8080:80 esj0-portafolio
```

Con Docker Compose:

```bash
docker compose up --build
```

Luego abrir:

```text
http://localhost:8080
```

## Contacto

- GitHub: https://github.com/ESJ0
- Email: usuariojs3p1@gmail.com
