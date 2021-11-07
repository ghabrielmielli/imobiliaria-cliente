<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          elevation="2"
          fab
          bottom
          right
          fixed
          dark
          color="green"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Novo Imóvel</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="isValido">
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Descricao"
                    required
                    :rules="[rules.required]"
                    v-model="imovel.descricao"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    :items="clientes"
                    :item-text="'nome'"
                    :item-value="'id'"
                    label="Proprietário"
                    required
                    :rules="[rules.required]"
                    v-model="imovel.proprietario"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  <v-text-field
                    label="UF"
                    required
                    :rules="[rules.required]"
                    v-model="imovel.endereco.uf"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Cidade"
                    required
                    :rules="[rules.required]"
                    v-model="imovel.endereco.cidade"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Rua"
                    required
                    :rules="[rules.required]"
                    v-model="imovel.endereco.rua"
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                    label="Número"
                    required
                    :rules="[rules.required]"
                    type="number"
                    v-model="imovel.endereco.numero"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Complemento"
                    v-model="imovel.endereco.complemento"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancelar()">
            Cancelar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="salvar()"
            :disabled="!isValido"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import req from "../utils/axiosImoveisRequestHelper";
import reqClientes from "../utils/axiosClientesRequestHelper";
export default {
  data: () => ({
    dialog: false,
    imovel: {
      descricao: "",
      proprietario: null,
      endereco: {
        uf: "",
        cidade: "",
        rua: "",
        numero: 0,
        complemento: null,
      },
    },
    clientes: [],
    rules: {
      required: (value) => !!value || "Required.",
    },
    isValido: false,
  }),
  methods: {
    salvar() {
      this.validar();
      if (this.isValido) {
        req
          .insert_imovel(this.imovel)
          .then((res) => {
            console.log(res.status);
            this.$emit("novoImovel");
            this.$refs.form.reset();

            this.dialog = false;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    validar() {
      this.$refs.form.validate();
    },
    cancelar() {
      this.$refs.form.reset();
      this.dialog = false;
    },
    getClientes() {
      reqClientes
        .get_clientes()
        .then((clientes) => {
          this.clientes = clientes;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  watch: {
    dialog: function () {
      this.getClientes();
    },
  },
};
</script>