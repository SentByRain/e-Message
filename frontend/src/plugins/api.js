import request from "../api/index";

export default {
  install: (app) => {
    app.config.globalProperties.$requestAPI = request;
  },
};
