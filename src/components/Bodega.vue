<template>
    <h1>BODEGA</h1>
    <br>
    <h3>INSERTAR NUEVA BODEGA</h3>
    <br>
   <label for="">Id</label>
   <br> 
   <input v-model="id" type="text" />
    <br>
    <label for="">Numero</label>
    <br>
    <input v-model="numero" type="text" />
    <br>
    <label for="">Nombre</label>
    <br>
    <input v-model="nombre" type="text" />
    <br>
    <label for="">Direccion</label>
    <br>
    <input v-model="direccion" type="text" />
    <br>
    <label for="">Telefono</label>
    <br>
    <input v-model="telefono" type="text" />
    <br>
    <button @click="insert">Insertar</button>
</template>

<script>
import insertBodeg from '@/helpers/procesarBodega.js';
export default {
    data(){
        return {
            id: null,
            numero: null,
            nombre: null,
            direccion: null,
            telefono: null
        }

    },
    methods: {

        async insert(){
            const Bodega = {
                "id" : this.id,
                "numero" : this.numero,
                "nombre" : this.nombre,
                "direccion" : this.direccion,
                "telefono" : this.telefono
            };
            const response = await insertBodeg(bodega);
            this.id = "",
            this.numero = "",
            this.nombre = "",
            this.direccion = "",
            this.telefono = "";

        }



    }
    

}
</script>

<style>

</style>