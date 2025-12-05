# Parte 1 estructura del proyecto 
## modificar el archivo /app/page.tsx
este archivo contine la pagina de inicio
## modificar el archivo /app/layout.tsx
modificar la metadata
```typescript
export const metadata: Metadata = {
  title: "Welcom to Next.js",
  description: "Check out jsmaster.com for more",
};
```
## modificar el archivo /app/page.tsx
agregar clases css y que se vea bonito 
```typescript
    <div className="text-5xl underline">Welcome to Next.js!</div>
```
 # Parte 2 arquitectura
 Next.js maneja dos tipos de compinentes
 1. componentes del servidor: se renderisan del lado del servidor
 2. componentes del cliente: se renderizan del lado del cliente

 ## crear un componente del cliente 
 crear en la carpeta app/ una sub carpeta llamada componets
 dentro de la carpeta app/componets/ crear el archivo hello.tsx
 importar el componente en la pagina principal 
 paramos en el minuto 19:44