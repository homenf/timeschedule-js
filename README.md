# vuefire

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install
# including:
  # firebase (firebase CLI)

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build # to dist folder

# build for production and view the bundle analyzer report
npm run build --report
```

firebase hosting 
firebase deploy


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Basic Structure: 
- index.html: #app is replaced.
- main.js: initialize vue and vue store, and vue router. 
- app.vue: put the router-view
- src folder: vue stuff
- firebase folder: to put firebase functionalities together.

Firebase config:
- firebase.json required for hosting. specify the public folder
- firestore.rules used for firestore, update the firestore rules at deploy


