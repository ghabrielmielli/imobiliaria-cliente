<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="50%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="blue" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <v-icon>mdi-map-marker</v-icon> {{ imovel.endereco.rua }},
          {{ imovel.endereco.numero }} | {{ imovel.endereco.cidade }} -
          {{ imovel.endereco.uf }}
        </v-card-title>

        <v-card-text>
          <div v-if="imovel.endereco.complemento">
            Complemento: {{ imovel.endereco.complemento }}
          </div>
          <div>
            <v-icon>mdi-account</v-icon>{{ imovel.cliente.id }} -
            {{ imovel.cliente.nome }}
          </div>
          <div>
            <v-icon color="red">mdi-home-account</v-icon>
            <contrato-form :imovel="imovel"></contrato-form>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import ContratoForm from "../components/ContratoForm.vue";
export default {
  data() {
    return {
      ultimoContrato: {},
      dialog: null,
    };
  },
  components: {
    ContratoForm,
  },
  props: {
    imovel: {
      type: Object,
      required: true,
    },
  },
};
</script>