export function Loader (){
    const $loader = document.createElement("img");
    $loader.src = "https://jairoad.github.io/movieApp/app/assets/loader.svg";
    $loader.alt = "Loading...";
    $loader.classList.add("loader");
    return $loader;
}