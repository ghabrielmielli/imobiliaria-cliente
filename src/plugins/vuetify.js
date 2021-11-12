import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

import colors from "vuetify/lib/util/colors";

export default new Vuetify({
	theme: {
		dark: localStorage.darkMode == "true",
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: colors.teal.base,
				secondary: colors.teal.lighten2,
				accent: colors.blueGrey.darken1,
				textContent: colors.shades.black,
				error: colors.red.darken2,
				card: colors.teal.darken1,
			},
			dark: {
				primary: colors.blueGrey.darken4,
				secondary: colors.teal.darken4,
				accent: colors.blueGrey.base,
				textContent: colors.grey.lighten2,
				error: colors.red.darken4,
				card: colors.teal.darken3,
			},
		},
	},
});
