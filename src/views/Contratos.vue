<template>
  <v-container class="pt-12" fluid>
    <v-row>
      <v-col v-for="contrato in contratos" :key="contrato.id" :cols="3">
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <p class="text-h4 text--primary">
              {{ contrato.id }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import req from "../utils/axiosContratosRequestHelper";
export default {
  data() {
    return {
      contratos: [],
    };
  },
  created() {
    this.attContratos();
  },
  methods: {
    attContratos() {
      req
        .get_contratos()
        .then((contratos) => {
          this.contratos = contratos;
          console.log(this.contratos);
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