(function (window) {
  window["env"] = window["env"] || {};
  window["env"]["production"] = true;
  window["env"]["API_URL"] = "${API_URL}";
  window["env"]["BASE_URL"] = "${BASE_URL}";
})(this);
