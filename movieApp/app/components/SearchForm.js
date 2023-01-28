export function SearchForm() {
    const $form = document.createElement("form");
    const $input = document.createElement("input");

    $form.classList.add("search-form");
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Search";
    $input.autocomplete = "off";
    $input.id = "form-input";

    $form.appendChild($input);

    if (location.hash.includes("#/search")) {
        $input.value = localStorage.getItem("apiSearch");
    }

    document.addEventListener("search", e => {
        if (!e.target.matches("input[type=search]")) return false;
        if (!e.target.value) localStorage.removeItem("apiSearch");
    })

    document.addEventListener("submit", e => {
        if (!e.target.matches(".search-form")) return false;
        e.preventDefault();

        localStorage.setItem("apiSearch", e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;
    })
    return $form;

}