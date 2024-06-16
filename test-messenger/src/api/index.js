import instance from "./instance";
import requestModule from "./requests";

export default {
  request: requestModule(instance),
};
