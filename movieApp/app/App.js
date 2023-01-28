import { Loader } from "https://jairoad.github.io/movieApp/app/components/loader.js";
import { Header } from "https://jairoad.github.io/movieApp/app/components/header.js";
import { Main } from "https://jairoad.github.io/movieApp/app/components/Main.js";
import { Router } from "https://jairoad.github.io/movieApp/app/components/Router.js";
import { infiniteScroll } from "https://jairoad.github.io/movieApp/app/helpers/infiniteScroll.js";
import { Banner } from "https://jairoad.github.io/movieApp/app/components/Banner.js";

export function App() {
    const $root = document.getElementById("root");

    $root.innerHTML = null;

    $root.appendChild(Header());
    $root.appendChild(Banner());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();
    infiniteScroll();
}

