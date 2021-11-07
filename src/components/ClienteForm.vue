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
          <span class="text-h5">Novo Cliente</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="formNovoCliente" v-model="isValido">
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome"
                    required
                    :rules="[rules.required]"
                    v-model="nome"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="CPF"
                    hint="digite apenas os números"
                    required
                    :rules="[rules.required]"
                    v-model="cpf"
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
          <v-btn color="blue darken-1" text @click="salvar()"> Salvar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import req from "../utils/axiosClientesRequestHelper";
export default {
  data: () => ({
    dialog: false,
    nome: "",
    cpf: "",
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
          .insert_cliente({ nome: this.nome, cpf: this.cpf })
          .then((res) => {
            console.log(res.status);
            this.$emit("novoCliente");
            this.$refs.formNovoCliente.reset();

            this.dialog = false;
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    },
    validar() {
      this.$refs.formNovoCliente.validate();
    },
    cancelar() {
      this.$refs.formNovoCliente.reset();
      this.dialog = false;
    },
  },
};
</script>