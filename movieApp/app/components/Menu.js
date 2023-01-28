export function Menu() {
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <a href="#/search"><i class="fa-solid fa-magnifying-glass"></i></a>
        <a href="#/"><i class="fa-solid fa-house"></i></a>
    `;
    return $menu;
}