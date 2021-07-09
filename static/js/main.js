
const procatTable = document.getElementById('procatTable');
const zvarniTable = document.getElementById('zvarniTable');
const procatSwith = document.getElementById('procat-swith');
const zvarniSwith = document.getElementById('zvarni-swith');


function changeTable(table){
  if (table == "procat"){
        if (procatTable.classList.contains("hide")) {
          procatTable.classList.remove("hide");
          zvarniTable.classList.add('hide');
          zvarniSwith.classList.remove("active");
          zvarniSwith.classList.add("not-active");
          procatSwith.classList.add("active");
      }
  }
  if (table == "zvarni"){
        if (zvarniTable.classList.contains("hide")) {
          zvarniTable.classList.remove("hide");
          procatTable.classList.add('hide');
          procatSwith.classList.remove("active");
          procatSwith.classList.add("not-active");
          zvarniSwith.classList.add("active");
      }
  }
  
}
