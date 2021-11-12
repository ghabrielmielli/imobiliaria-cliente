<template>
  <v-container fluid color="card">
    <v-data-table
      :headers="headers"
      :items="logs"
      :items-per-page="10"
      class="elevation-1 card"
    ></v-data-table>
  </v-container>
</template>
<script>
import req from "../utils/axiosImoveisRequestHelper";
export default {
  data() {
    return {
      logs: [],
      headers: [
        {
          text: "Data",
          align: "start",
          sortable: false,
          value: "data",
        },
        { text: "id", value: "id_imovel" },
        { text: "Operaçao", value: "operacao" },
        { text: "Descrição antiga", value: "descricao_antiga" },
        { text: "Descrição nova", value: "descricao_nova" },
      ],
    };
  },
  created() {
    this.attLogs();
  },
  methods: {
    attLogs() {
      req
        .get_imoveis_logs()
        .then((logs) => {
          this.logs = logs;
          console.log(this.logs);
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