<template>
  <v-dialog v-model="dialog" max-width="50%">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on"> ver contratos </v-btn>
    </template>
    <v-card>
      <v-app-bar>
        <v-app-bar-title> Todos contratos </v-app-bar-title>
      </v-app-bar>

      <v-card-text>
        <v-list>
          <v-subheader>Contrato Atual</v-subheader>
          <v-list-item three-line v-if="contratoAtual">
            <v-list-item-content>
              <v-list-item-title
                >{{ contratoAtual.id }} |
                {{ contratoAtual.cliente.locatarioNome }} -
                {{ contratoAtual.inicio.getFullYear() }} a
                {{ contratoAtual.fim.getFullYear() }}</v-list-item-title
              >

              <v-list-item-subtitle>
                <v-icon small :color="contratoAtual.incluiAgua ? 'green' : ''"
                  >mdi-water</v-icon
                >
                <v-icon small :color="contratoAtual.incluiIptu ? 'green' : ''"
                  >mdi-script-text</v-icon
                >
                <v-icon
                  small
                  :color="contratoAtual.incluiCondominio ? 'green' : ''"
                  >mdi-office-building</v-icon
                >
                <v-icon small :color="contratoAtual.incluiGas ? 'green' : ''"
                  >mdi-stove</v-icon
                >
                <v-icon small>mdi-currency-usd</v-icon
                >{{ contratoAtual.valorMensal }},00
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ contratoAtual.observacao }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else>
            <v-list-item-content>
              <v-list-item-title
                >Nenhum contrato ativo!</v-list-item-title
              ></v-list-item-content
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            three-line
            v-for="contrato in contratos"
            :key="contrato.id"
          >
            <v-list-item-content>
              <v-list-item-title
                >{{ contrato.id }} | {{ contrato.cliente.locatarioNome }} -
                {{ contrato.inicio.getFullYear() }} a
                {{ contrato.fim.getFullYear() }}</v-list-item-title
              >

              <v-list-item-subtitle>
                <v-icon small :color="contrato.incluiAgua ? 'green' : ''"
                  >mdi-water</v-icon
                >
                <v-icon small :color="contrato.incluiIptu ? 'green' : ''"
                  >mdi-script-text</v-icon
                >
                <v-icon small :color="contrato.incluiCondominio ? 'green' : ''"
                  >mdi-office-building</v-icon
                >
                <v-icon small :color="contrato.incluiGas ? 'green' : ''"
                  >mdi-stove</v-icon
                >
                <v-icon small>mdi-currency-usd</v-icon
                >{{ contrato.valorMensal }},00
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ contrato.observacao }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <contrato-form
          :imovel="imovel"
          @novoContrato="$emit('novoContrato')"
        ></contrato-form>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import ContratoForm from "../components/ContratoForm.vue";
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    contratos: {
      type: Array,
      required: true,
    },
    imovel: {
      type: Object,
      required: true,
    },
  },
  components: {
    ContratoForm,
  },
  computed: {
    contratoAtual: function () {
      const hoje = Date.now();
      let escolhido = null;
      this.contratos.forEach((contrato) => {
        if (contrato.inicio < hoje && contrato.fim > hoje) {
          escolhido = contrato;
          this.contratos.splice(this.contratos.indexOf(contrato), 1);
        }
      });
      return escolhido;
    },
  },
};
</script>