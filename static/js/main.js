const procatTable = document.getElementById("procatTable");
const zvarniTable = document.getElementById("zvarniTable");
const procatSwith = document.getElementById("procat-swith");
const zvarniSwith = document.getElementById("zvarni-swith");

function changeTable(table) {
  if (table == "procat") {
    if (procatTable.classList.contains("hide")) {
      procatTable.classList.remove("hide");
      zvarniTable.classList.add("hide");
      zvarniSwith.classList.remove("active");
      zvarniSwith.classList.add("not-active");
      procatSwith.classList.add("active");
    }
  }
  if (table == "zvarni") {
    if (zvarniTable.classList.contains("hide")) {
      zvarniTable.classList.remove("hide");
      procatTable.classList.add("hide");
      procatSwith.classList.remove("active");
      procatSwith.classList.add("not-active");
      zvarniSwith.classList.add("active");
    }
  }
}

function show(changeNameDiv, currentName, currentNameLine) {
  let newField = document.getElementById(changeNameDiv);
  let name = document.getElementById(currentName).innerText;
  let nameLine = document.getElementById(currentNameLine);
  nameLine.classList.add("hide");
  newField.classList.remove("hide");
  newField.firstElementChild.setAttribute("placeholder", name);
}

function hide(changeNameDiv, currentName, currentNameLine, nameInput) {
  let newField = document.getElementById(changeNameDiv);
  let nameLine = document.getElementById(currentNameLine);
  let newName = document.getElementById(nameInput).value;

  if (newName) {
    document.getElementById(currentName).innerText = newName;
  }

  newField.classList.add("hide");
  nameLine.classList.remove("hide");
}

function showGroups(groups, groupsName) {
  let groupsArr = document.getElementById(groups).innerText.split(",");
  let insertHTML = "";
  for (let element of groupsArr) {
    insertHTML += `<div><input type="text" class="input constrGroup" placeholder=${element}></div>`;
  }
  insertHTML += `<div id='groupBtn'><a href="#" class="btn-orange" onclick="hideGroups('constrGroup', 'groups', 'groupsNames')">Зберегти</a><div>`;
  document
    .getElementById(groupsName)
    .parentElement.insertAdjacentHTML("afterend", insertHTML);
  document.getElementById(groupsName).classList.add("hide");
}

function hideGroups(constrGroup, groups, groupsNamesLine) {
  let groupsArr = document.getElementsByClassName(constrGroup);
  let groupsNames = [];

  for (let element of groupsArr) {
    if (element.value) {
      groupsNames.push(element.value);
    } else {
      groupsNames.push(element.placeholder);
    }
  }

  while (groupsArr.length > 0) {
    groupsArr[0].parentNode.remove();
  }

  document.getElementById("groupBtn").remove();

  let groupsSpan = "";

  for (let elementName of groupsNames) {
    groupsSpan += elementName + ", ";
  }

  groupsSpan = groupsSpan.substring(0, groupsSpan.length - 2);

  let groupsLine = document.getElementById(groups);
  groupsLine.innerText = groupsSpan;
  document.getElementById(groupsNamesLine).classList.remove("hide");
}

function copyLine(element) {
  let row = element.parentElement.parentElement;
  let name = row.firstElementChild.innerText;
  let rowHTML = row.innerHTML;
  row.insertAdjacentHTML("afterend", rowHTML.replace(name, name + "_copy"));
}

function copyLineMain(element) {
  let row = element.parentElement.parentElement;
  let rowHTML = row.innerHTML;
  row.insertAdjacentHTML("afterend", rowHTML);
}

function addLineEmplyProcat(element) {
  let row = element.parentElement.parentElement;
  let newRow = `<tr>
  <td class="table-input"> <input type="text"></td>
  <td class="table-input"> <select>
  <option>Не выбрано</option>
      <option value="g1">Колони</option>
      <option value="g2">Балки</option>
      <option value="g3">В'язі</option>
    </select>
  <td class="table-input"> <select>
  <option>Не выбрано</option>
      <option value="2">Двутавр</option>
      <option value="1">Швелер</option>
      <option value="3">Квадратна труба</option>
      <option value="4">Прямокутна труба</option>
      <option value="4">Кругла труба</option>
    </select>
  </td>
  <td class="table-input">
    <select>
    <option>Не выбрано</option>
      <option value="s1">ДСТУ 0009-232</option>
      <option value="s2">ДСТУ 3234-333</option>
      <option value="s3">ДСТУ 2222-321</option>
    </select>
  </td>
  <td class="table-input">
    <select>
    <option>Не выбрано</option>
      <option value="p1">20</option>
      <option value="p2">24</option>
      <option value="p3">30</option>
      <option value="p4">36</option>
    </select>
  </td>
  <td class="table-input">
    <select>
    <option>Не выбрано</option>
      <option value="m1">C235</option>
      <option value="m2">C245</option>
      <option value="m3">C255</option>
      <option value="m4">C355</option>
    </select>
  </td>
  <td class="table-input">
    <input type="nubmer">
  </td>
  <td>
    <span class="symbol-copy" onclick="copyLineMain(this)"><i class="far fa-copy"></i></span>
  </td>
  <td>
    <span class="symbol" onclick="addLineEmplyProcat(this)">+</span>
  </td>
  <td>
    <span class="symbol" onclick="deleteLine(this)">-</span>
  </td>

</tr>`;
  row.insertAdjacentHTML("afterend", newRow);
}

function addLineEmplyZvarni(element) {
  let row = element.parentElement.parentElement;
  let newRow = `     <tr>
  <td class="table-input"> <input type="text"></td>
  <td class="table-input"> <select>
      <option>Не вибрано</option>
      <option value="g1">Колони</option>
      <option value="g2">Балки</option>
      <option value="g3">В'язі</option>
    </select>
  </td>
  <td class="table-input"> <select>
      <option>Не вибрано</option>
      <option value="1">Двутавровий</option>
      <option value="2">Коробчатий</option>
    </select>
  </td>
  <td class="table-input"> <input type="number"></td>
  <td class="table-input"> <input type="number"></td>
  <td class="table-input">
    <select>
      <option>Не вибрано</option>
      <option value="m1">C235</option>
      <option value="m2">C245</option>
      <option value="m3">C255</option>
      <option value="m4">C355</option>
    </select>
  </td>
  <td class="table-input"> <input type="number"></td>
  <td class="table-input"> <input type="number"></td>
  <td class="table-input">
    <select>
      <option>Не вибрано</option>
      <option value="m1">C235</option>
      <option value="m2">C245</option>
      <option value="m3">C255</option>
      <option value="m4">C355</option>
    </select>
  </td>
  <td class="table-input">
    <input type="nubmer">
  </td>
  <td>
    <span class="symbol-copy" onclick="copyLineMain(this)"><i class="far fa-copy"></i></span>
  </td>
  <td>
    <span class="symbol" onclick="addLineEmplyZvarni(this)">+</span>
  </td>
  <td>
    <span class="symbol" onclick="deleteLine(this)">-</span>
  </td>
</tr>`;
  row.insertAdjacentHTML("afterend", newRow);
}

function deleteLine(element) {
  let row = element.parentElement.parentElement;
  row.remove();
}
