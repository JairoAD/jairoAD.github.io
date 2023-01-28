
export function SortOptions() {
   const $options = document.createElement("section");
   
   $options.innerHTML= `
      <div class = "options">
         <a class="link" href="#/popular"><button class="pBtn button">Popular</button></a>
         <a class="link" href="#/top"><button class="tBtn button">Top</button></a>
      </div>
   `;

   return $options;
}