import { App } from "https://jairoad.github.io/movieApp/app/App.js";
import api from "https://jairoad.github.io/movieApp/app/helpers/helpers/api.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
    api.page = 1;
    App();
});