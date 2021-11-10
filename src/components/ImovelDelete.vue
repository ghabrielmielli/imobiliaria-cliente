<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" small fab depressed top right fixed>
          <v-icon dark> mdi-trash-can </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-app-bar class="text-h5" color="red" flat dark>
          <v-toolbar-title> Excluir imóvel </v-toolbar-title>
        </v-app-bar>

        <v-card-text class="mt-4">
          <div>Você tem certeza que deseja deletar o imóvel localizado em</div>
          <div class="text--primary">
            {{ imovel.endereco.rua }}, {{ imovel.endereco.numero }} ?
          </div>
          <v-divider></v-divider>
          <div>
            Atualmente existem
            <span class="font-weight-bold red--text"
              >{{ n_contratos }} contratos
            </span>
            registrados com este imóvel.
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancelar()">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="salvar()">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import req from "../utils/axiosImoveisRequestHelper";
import reqContratos from "../utils/axiosContratosRequestHelper";
export default {
  data: () => ({
    dialog: false,
    imovel: { endereco: {}, cliente: {} },
    n_contratos: 0,
  }),
  props: {
    imovelId: {
      required: true,
    },
  },
  methods: {
    salvar() {
      req
        .delete_imovel(this.imovelId)
        .then(() => {
          this.$emit("deleteImovel");
          this.dialog = false;
        })
        .catch((err) => {
          console.log("erro ao deletar");
          console.log(err);
        });
    },
    cancelar() {
      this.dialog = false;
    },
    fetchImovel() {
      req
        .get_imovel(this.imovelId)
        .then((imv) => {
          this.imovel = imv;
          this.getContratos();
        })
        .catch((e) => console.log(e));
    },
    getContratos() {
      reqContratos
        .get_contratos_por_imovel(this.imovel.id)
        .then((contratos) => {
          console.log(contratos.length);
          this.n_contratos = contratos.length;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  watch: {
    dialog: function () {
      this.fetchImovel();
    },
  },
};
</script>