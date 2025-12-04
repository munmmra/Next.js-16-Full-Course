# estructura del proyecto next.js
## archivo tsconfig.json
es el archivo de configuración para tipescript define
- Que debera ser tipecheckd
- Que de debera ignorarse
- Que reglas segir
## archivo readme.md
especifica como correr el proyecto
## archivo postcss.config.mjs
archoivo de configuración para postcss especifica herramientas para procesar css con diferentes plugins
en este caso usa "@tailwindcss/postcss": {}
## archivo package-lock.json
archivo que especifica las dependencias y sus sub dependencias. asegurandose de que todos usen las mismas dependencias y versiones
## archivo packege.json
contiene todas las dependencias y escripts del proyecto 
## archivo next.env.d.ts
archovo de configuración para de tipescript, no modificar
## archivo next.config.ts
permite confugurar las carcteristicas de next.js
## archivo eslint.config.mjs
pesmite configurar estlin para linting
## archivo .gitignore
espesifica que archivos y carpetas no son segidos por git
## carpeta public
carpeta para guardar contenido estatico como imagenes
## carpeta node_modeles
contiene todos los paquetes y dependencias necesarios para la ejecución del proyecto
## carpeta .netx
no estoy seguro que contiene creo que contine los ejecutables, no lo se
## carpeta app
contiene el codigo del proyecto
### archivo favicon.ico
establece la imgen que se muestra en el la pestaña del navegador
### archivo globals.css
especifica todas las caracteristicas css que se aplican al proyecto
## Archivo layout.tsx
especifica el punto de partida para la aplicación esto sera usado en todas las paginas
