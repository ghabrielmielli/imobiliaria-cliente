<template>
  <v-container class="pt-12" fluid>
    <v-row>
      <v-col v-for="cliente in clientes" :key="cliente.id" :cols="3">
        <v-card class="mx-auto" max-width="344">
          <v-card-title> {{ cliente.nome }} </v-card-title>

          <v-card-subtitle>{{ cliente.cpf }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <cliente-form @novoCliente="attClientes()"></cliente-form>
  </v-container>
</template>

<script>
import req from "../utils/axiosClientesRequestHelper";
import ClienteForm from "../components/ClienteForm.vue";
export default {
  data() {
    return {
      clientes: [],
    };
  },
  created() {
    this.attClientes();
  },
  components: {
    ClienteForm,
  },
  methods: {
    async attClientes() {
      let clientes = await req.get_clientes();

      this.clientes = clientes;
    },
  },
};
</script>

<style>
</style>