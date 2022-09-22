<template>
  <h2>LISTAS DE LOS PRODUCTOS</h2>
  <div>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Codigo de Barras</th>
                <th>Stock</th>
                <th>Categoria</th>
            </tr>
            <tr v-for= "producto in listaProductos" :key="producto.id">
                <td>{{producto.nombre}}</td>
                <td>{{producto.CodigoMaestro}}</td>
                <td>{{producto.stock}}</td>
                <td>{{producto.categoria}}</td>
            </tr>
        </thead>
    </table>
  </div>
</template>

<script>
    import buscarTodosP from "../helpers/listas.js"
export default {
    data(){
        return{
            listasTodos : []
        }


    },
    methods: {
        async buscarTodos(){
            var response = await buscarTodosP();
            this.listaTodos = response;

        }


    },
    mounted(){
        this.buscarTodos();
    }
}
</script>

<style>

</style>