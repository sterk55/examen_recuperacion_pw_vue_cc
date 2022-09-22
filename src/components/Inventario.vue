<template>
     <h1>INVENTARIO</h1>
    <br>
    <h3>INSERTAR NUEVO INVENTARIO</h3>
    <br>
   <label for="">Id</label>
   <br> 
   <input v-model="id" type="text" />
    <br>
    <label for="">Cantidad</label>
    <br>
    <input v-model="cantidad" type="text" />
    <br>
    <label for="">Codigo de Barra Individual</label>
    <br>
    <input v-model="codigoIndividual" type="text" />
    <br>
    <label for="">Numero de Bodega</label>
    <br>
    <input v-model="numeroBodega" type="text" />
    <br>
    <button @click="insert">Insertar</button>
</template>

<script>
import insertInventario from '@/helpers/procesarInventario.js';

export default {
    data(){
        return{
            id: null,
            cantidad : null,
            codigoIndividual: null,
            numeroBodega: null


        }
    },
    methods: {
        async insert(){
            const Inventario = {
                "id" : this.id,
                "cantidad" : this.cantidad,
                "codigoIndividual" : this.codigoIndividual,
                "numeroBodega" : this.numeroBodega


            };
            const response = await insertInventario(Inventario);
            this.id = "",
            this.numeroBodega = "",
            this.cantidad = "",
            this.codigoIndividual = "";



        }

    }

}
</script>

<style>
h1{
    color: brown;
    background-color: aqua;
}

label{
    color: red;
    margin: auto;
}
</style>