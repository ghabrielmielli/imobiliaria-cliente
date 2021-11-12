<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="50%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="secondary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-app-bar class="text-h5">
          <v-icon class="pr-2">mdi-map-marker</v-icon>
          <v-toolbar-title>
            {{ imovel.endereco.rua }}, {{ imovel.endereco.numero }} |
            {{ imovel.endereco.cidade }} -
            {{ imovel.endereco.uf }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <imovel-edit
            :imovelId="imovel.id"
            @editImovel="$emit('editImovel')"
          ></imovel-edit>
          <imovel-delete
            :imovelId="imovel.id"
            @deleteImovel="$emit('deleteImovel')"
          ></imovel-delete>
        </v-app-bar>

        <v-card-subtitle class="mt-2 ml-2" v-if="imovel.endereco.complemento">
          Complemento: {{ imovel.endereco.complemento }}
        </v-card-subtitle>
        <v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-icon> <v-icon>mdi-account</v-icon></v-list-item-icon>
              <v-list-item-title
                >{{ imovel.cliente.id }} -
                {{ imovel.cliente.nome }}</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-information-outline</v-icon></v-list-item-icon
              >
              <v-list-item-title>{{ imovel.descricao }}</v-list-item-title>
            </v-list-item>
            <v-list-item v-if="contratoAtual">
              <v-list-item-icon
                ><v-icon color="green"
                  >mdi-home-account</v-icon
                ></v-list-item-icon
              >
              <v-list-item-title
                >{{ contratoAtual.cliente.locatarioId }} -
                {{ contratoAtual.cliente.locatarioNome }} | até
                {{ contratoAtual.fim.getMonth() + 1 }}/{{
                  contratoAtual.fim.getFullYear()
                }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item v-else>
              <v-list-item-icon
                ><v-icon color="red">mdi-home-account</v-icon></v-list-item-icon
              >
              <v-list-item-title>
                <contrato-form
                  :imovel="imovel"
                  @novoContrato="getContratos()"
                ></contrato-form>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <lista-contratos
            :contratos="[...contratos]"
            :imovel="imovel"
            @novoContrato="getContratos()"
          ></lista-contratos>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import ContratoForm from "../components/ContratoForm.vue";
import ListaContratos from "../components/ListaContratos.vue";

import reqContratos from "../utils/axiosContratosRequestHelper";
import ImovelDelete from "./ImovelDelete.vue";
import ImovelEdit from "./ImovelEdit.vue";
export default {
  data() {
    return {
      contratos: [],
      dialog: null,
    };
  },
  components: {
    ContratoForm,
    ListaContratos,
    ImovelEdit,
    ImovelDelete,
  },
  props: {
    imovel: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getContratos() {
      reqContratos
        .get_contratos_por_imovel(this.imovel.id)
        .then((contratos) => {
          this.contratos = contratos;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  watch: {
    dialog: function () {
      this.getContratos();
    },
  },
  computed: {
    contratoAtual: function () {
      const hoje = Date.now();
      let escolhido = null;
      this.contratos.forEach((contrato) => {
        let inicio = Date.parse(contrato.inicio);
        let fim = Date.parse(contrato.fim);
        contrato.inicio = new Date(contrato.inicio);
        contrato.fim = new Date(contrato.fim);

        console.log(inicio < hoje);
        console.log(fim > hoje);

        if (inicio < hoje && fim > hoje) {
          escolhido = contrato;
        }
      });
      return escolhido;
    },
  },
};
</script>