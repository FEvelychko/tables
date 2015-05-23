/**
 * Created by Maksym on 5/22/2015.
 */
"use strict";

var tr, td, bodyTable, buttonAddTable, buttonDelete;
var data = [
    {id:1, name: "apple", stock:125, country: "USA"},
    {id:2, name: "facebook", stock: 78, country: "USA"},
    {id:3, name: "microsoft", stock: 559, country: "USA"},
    {id:4, name: "softServe", stock: 100, country: "Ukraine"},
    {id:5, name: "luxSoft", stock: 90, country: "Ukraine"},
    {id:6, name: "siemens", stock: 59, country: "Germany"},
    {id:7, name: "globalLogic", stock: 30, country: "Ukraine"},
    {id:8, name: "twitter", stock: 50, country: "USA"}

];

function addTable(){
    bodyTable = document.getElementById('dataInTable');
    buttonAddTable = document.getElementById('buttonAddTable').style.display = "none";
    buttonDelete = "<input type = 'submit' class = 'btn btn-danger btn-xs' value='delete' onclick = 'deleteRow(this)'>";

    for(var i = 0; i<data.length; i++){
        tr =  bodyTable.insertRow(bodyTable.rows.length);
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = data[i].id;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = data[i].name;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = data[i].stock;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = data[i].country;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = buttonDelete;
    }
}

function deleteRow(r) {
    var i = r.parentNode.parentNode;
    bodyTable = document.getElementById('dataInTable');
    bodyTable.removeChild(i);
}