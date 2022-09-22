<template>
    <h1>PRODUCTOS</h1>
    <br>
    <h3>INGRESE PRODUCTOS</h3>
    <br>
    <label for="">Id</label>
    <br>
    <input v-model="id" type="text" />
    <br>
    <label for="">Código de Barras</label>
    <br>
    <input v-model="codBarras" type="text" />
    <br>
    <label for="">Nombre</label>
    <br>
    <input v-model="nombre" type="text" />
    <br>
    <label for="">Categoria</label>
    <br>
    <input v-model="categoria" type="text" />
    <br>
    <button @click="insert">Insertar</button>

</template>

<script>
import insertProduct from '@/helpers/procesarProducto.js';
export default {
    data() {
        return {
            id: null,
            codBarras: null,
            nombre: null,
            categoria: null
        
        }
    },
    methods: {
        async insert() {
            const product = {
                'id': this.id,
                'CodigoMaestro': this.codBarras,
                'nombre': this.nombre,
                'categoria': this.categoria
            };
            const response = await insertProduct(product);
            console.log(response);
            this.id = "",
            this.codBarras = "",
            this.nombre = "",
            this.categoria = "";


        }
    }
}
</script>

<style>
    h1{
        color: blue;
        background-color: yellow;
    }

</style>