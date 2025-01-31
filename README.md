# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

-- En los proyectos de Vuejs es habitual trabajar con modulos

### usamos esta dependencia para validar formularios

```sh
npm install vee-validate --save
```

### yup es una dependencia que se usa para hacer validacion de formularios de forma automaica

```sh
npm install @vee-validate/yup
```

## Pinia Lint with [ESLint](https://pinia.vuejs.org/)

### Pinia es una biblioteca de almacenamiento de VueJs que nos permite compartir un estado entre componentes y paginas

### La idea de pinia es que podamos usar nuestros componentes en otras paginas

--- usamos las variables reactivas o ref value para crear variables dinamicas
--- Tambien usamos la funcion watch para ver los cambios que se realizar en alguna parte de nuestra pagina

## Consumir API'S en VueJs con Axios

### Axios Lint with [ESLint](https://axios-http.com/es/)

--- Vamos a aprnder a consumir apis usando vuejs, en este caso empezaremos instalando la dependencia de axios

```sh
npm install axios
```

--- axios es parecido a fetch, son librerias que nos permiten hacer peticiones (get, post, put, delete, etc) http 0 https que nosotros configuremos
--- las peticiones con axios al igual que fetch se hacen con funciones asyncronas

#### hemos creado weatherStore.js para crear una funcion de pinia donde se almacerara los datos que consumiremos en nuestra api

## Los composables

--- los composables son codigos repetitivos que usaremos varias veces en nuestro programa de vuejs
--- para ello creamos una carpeta de nombre composable donde crearemos estos codigos y lo importaremos desde ahi a donde
--- queramos usarlos
--- todos los archivos composables siempre empiezan con la palabra use

## Helpers

--- En los hepers creamos los archvios que nos van a permitir realizar peticiones de tipo http o https con axios

### Weather Api Lint with [ESLint](https://open-meteo.com/en/docs/)

### onMounted es una funcion de vue

--- lo que hace onMounted es
