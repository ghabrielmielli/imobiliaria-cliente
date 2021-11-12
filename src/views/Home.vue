<template>
  <v-carousel
    cycle
    height="101%"
    show-arrows-on-hover
    hide-delimiter-background
  >
    <v-carousel-item>
      <v-sheet color="accent" height="100%" dark>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">Sistema Imobiliário</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item>
      <v-sheet color="primary" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <v-list dense color="primary" dark>
            <div class="text-h1 font-weight-thin">Recursos:</div>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  >Retenção de informação de clientes</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  >Cadastrar e associar imóveis a clientes
                  proprietários</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-script</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  >Criação de contratos de aluguel entre
                  clientes</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-magnify</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  >Manter histórico preservado de contratos</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item>
      <v-sheet color="card" height="100%" dark>
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="12" align="center" justify="center">
            <p class="text-h2">Vamos começar?</p>
            <v-btn color="teal darken-3" link to="/Clientes">Vamos lá!</v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {};
</script>