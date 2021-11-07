<template>
  <v-container class="pt-12" fluid>
    <v-row>
      <v-col v-for="cliente in clientes" :key="cliente.id" :cols="3">
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <p class="text-h4 text--primary">
              {{ cliente.nome }}
            </p>
            <p>{{ cliente.cpf }}</p>
            <div class="text--primary">
              {{ cliente.tipo }}
            </div>
          </v-card-text>
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
    attClientes() {
      req
        .get_clientes()
        .then((clientes) => {
          this.clientes = clientes;
          console.log(this.clientes);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
</style>