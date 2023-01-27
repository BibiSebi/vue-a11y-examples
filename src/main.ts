import { createApp, h, Fragment } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./style.css";

let app = null;

const setupApp = (app: any) => {
  app.use(router);
  app.mount("#app");
};
// @ts-ignore
if (process.env.NODE_ENV === "development") {
  import(`vue-axe`).then((res) => {
    const VueAxe = res.default;
    const VueAxePopup = res.VueAxePopup;
    app = createApp({
      render: () => h(Fragment, [h(App), h(VueAxePopup)]),
    });
    app.use(VueAxe);
    setupApp(app);
  });
} else {
  app = createApp(App);
  setupApp(app);
}
