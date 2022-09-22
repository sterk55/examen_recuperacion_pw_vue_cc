<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--Inventario/-->
  <!--Bodega/-->  
  <Listas/>
 <!--Producto/-->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Producto from './components/Producto.vue';
import Listas from './components/Listas.vue';
//import Bodega from './components/Bodega.vue';
//import Inventario from './components/Inventario.vue';

export default {
  name: 'App',
  components: {
    //Bodega
    //Producto
    //Inventario
    
    Listas
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
