let sortDirection = false;
let personData = [
    { nom : 'Wind' ,prenom : 'Welliam' ,age : 24 , proffesion : 'Artist'},
    { nom : 'Coan' ,prenom : 'Micheal' ,age : 33 , proffesion : 'Doctor'},
    { nom : 'Nilson' ,prenom : 'Peter' ,age : 25 , proffesion : 'Steamer'},     
    { nom : 'Aseal' ,prenom : 'Erav' ,age : 20 , proffesion : 'Developer'}
];

window.onload= () => {
    loadTableData(personData);
};

function loadTableData(personData) {
const tableBody = document.getElementById('tabledata');
let dataHtml = '';

for(let person of personData) {
    dataHtml += `<tr><td>${person.nom}</td><td>${person.prenom}</td></td><td>${person.age}</td><td>${person.proffesion}</td>`;
    tableBody.innerHTML = dataHtml;
}

}

function sortColumn(columnName) {
    const dataType = typeof personData[0][columnName];
    sortDirection = !sortDirection;

    switch(dataType) {
        case 'number':
            sortNumberColumn(sortDirection, columnName);
            break;
    }
    loadTableData(personData);
}
function sortNumberColumn(sort, columnName) {
    personData = personData.sort((p1,p2) => {
    return sort ? p1[columnName] - p2[columnName] : p2 [columnName] - p1[columnName]
    });
}
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tabledata");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;

      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];

        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {

        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }


function add() {
  var all = document.getElementById("tabledata");

  var nomhtml = document.getElementById("nom").value;
  var prenomhtml = document.getElementById("prenom").value;
  var agehtml = document.getElementById("age").value;
  var proffesionhtml = document.getElementById("proffesion").value;

  var tr = document.createElement("tr");
  var td = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));


  td.innerHTML = nomhtml;
  td2.innerHTML = prenomhtml;
  td3.innerHTML = agehtml;
  td4.innerHTML = proffesionhtml;
  all.appendChild(tr);
  

}
