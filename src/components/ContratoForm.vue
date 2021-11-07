<template>
  <v-dialog v-model="dialog" persistent max-width="50%">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" small> novo contrato </v-btn>
    </template>
    <v-card>
      <v-app-bar>
        <v-app-bar-title>
          Novo contrato: {{ imovel.endereco.rua }}, {{ imovel.endereco.numero }}
        </v-app-bar-title>
      </v-app-bar>

      <v-card-text>
        <v-container>
          <v-form ref="formNovoContrato" v-model="isValido">
            <v-row>
              <v-spacer></v-spacer
              ><v-col cols="8">
                <v-select
                  :items="clientes"
                  :item-text="'nome'"
                  :item-value="'id'"
                  label="Locatário"
                  required
                  :rules="[rules.required]"
                  v-model="contrato.clienteId"
                ></v-select>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
            <v-row justify="space-around">
              <div>
                <div>Início</div>
                <v-date-picker v-model="contrato.inicio"></v-date-picker>
              </div>
              <div>
                <div>Fim</div>
                <v-date-picker v-model="contrato.fim"></v-date-picker>
              </div>
            </v-row>
            <v-row justify="space-around">
              <v-col cols="2">
                <v-text-field
                  label="Valor"
                  prefix="R$"
                  type="number"
                  v-model="contrato.valorMensal"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-checkbox
                v-model="contrato.incluiIptu"
                label="inclui IPTU"
              ></v-checkbox>

              <v-checkbox
                v-model="contrato.incluiCondominio"
                label="inclui condomínio"
              ></v-checkbox>

              <v-checkbox
                v-model="contrato.incluiAgua"
                label="inclui água"
              ></v-checkbox>

              <v-checkbox
                v-model="contrato.incluiGas"
                label="inclui gás"
              ></v-checkbox>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea v-model="contrato.observacao" color="teal">
                  <template v-slot:label>
                    <div>Observações <small>(opcional)</small></div>
                  </template>
                </v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="cancelar()"> Cancelar </v-btn>
        <v-btn color="blue darken-1" text @click="salvar()"> Salvar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import req from "../utils/axiosContratosRequestHelper";
import reqClientes from "../utils/axiosClientesRequestHelper";

export default {
  data: () => ({
    dialog: false,
    contrato: {
      clienteId: null,
      inicio: null,
      fim: null,
      valorMensal: null,
      incluiIptu: false,
      incluiCondominio: false,
      incluiAgua: false,
      incluiGas: false,
      observacao: "",
    },
    rules: {
      required: (value) => !!value || "Required.",
    },
    isValido: false,

    clientes: [],
  }),
  props: {
    imovel: {
      type: Object,
      required: true,
    },
  },
  methods: {
    salvar() {
      this.validar();
      if (this.isValido) {
        const contrato = { ...this.contrato, imovelId: this.imovel.id };

        req
          .insert_contrato(contrato)
          .then((res) => {
            console.log(res.status);
            this.$emit("novoContrato");
            this.$refs.formNovoContrato.reset();

            this.dialog = false;
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    },
    validar() {
      this.$refs.formNovoContrato.validate();
    },
    cancelar() {
      this.$refs.formNovoContrato.reset();
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