// const btn = document.getElementById("btn");
// const results = document.getElementById("results");

// btn.addEventListener("click", function(e){
//     e.preventDefault();
//     if (results.classList.contains("hide")) {
//         results.classList.remove("hide");
//       }
// });

const procatTable = document.getElementById('procatTable');
const zvarniTable = document.getElementById('zvarniTable');


function changeTable(table){
  if (table == "procat"){
        if (procatTable.classList.contains("hide")) {
          procatTable.classList.remove("hide");
          zvarniTable.classList.add('hide');
      }
  }
  if (table == "zvarni"){
        if (zvarniTable.classList.contains("hide")) {
          zvarniTable.classList.remove("hide");
          procatTable.classList.add('hide');
      }
  }
  
}
