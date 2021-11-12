<template>
  <v-container class="pt-12" fluid>
    <v-row>
      <v-col v-for="imovel in imoveis" :key="imovel.id" :cols="3">
        <v-card class="mx-auto" max-width="344" color="card">
          <v-card-title
            >{{ imovel.endereco.rua }}, {{ imovel.endereco.numero }}
            <v-spacer></v-spacer
            ><imovel-detalhes
              :imovel="imovel"
              @editImovel="attImoveis()"
              @deleteImovel="attImoveis()"
            ></imovel-detalhes>
          </v-card-title>
          <v-card-subtitle
            >{{ imovel.endereco.cidade }} -
            {{ imovel.endereco.uf }}</v-card-subtitle
          >
          <v-card-text>
            <p><v-icon>mdi-account</v-icon> {{ imovel.cliente.nome }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <imovel-form @novoImovel="attImoveis()"></imovel-form>
  </v-container>
</template>

<script>
import req from "../utils/axiosImoveisRequestHelper";
import ImovelForm from "../components/ImovelForm.vue";
import ImovelDetalhes from "../components/ImovelDetalhes.vue";
export default {
  data() {
    return {
      imoveis: [],
    };
  },
  created() {
    this.attImoveis();
  },
  components: {
    ImovelForm,
    ImovelDetalhes,
  },
  methods: {
    attImoveis() {
      req
        .get_imoveis()
        .then((imoveis) => {
          this.imoveis = imoveis;
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