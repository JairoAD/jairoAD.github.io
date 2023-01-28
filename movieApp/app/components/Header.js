import { Menu } from "https://jairoad.github.io/movieApp/app/components/Menu.js";
import { Logo } from "https://jairoad.github.io/movieApp/app/components/Logo.js";

export function Header(){
    const $header = document.createElement("header");
    $header.classList.add("header");
    $header.appendChild(Logo());
    $header.appendChild(Menu());
    return $header;
}