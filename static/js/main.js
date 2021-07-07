const btn = document.getElementById("btn");
const results = document.getElementById("results");

btn.addEventListener("click", function(e){
    e.preventDefault();
    if (results.classList.contains("hide")) {
        results.classList.remove("hide");
      }
});