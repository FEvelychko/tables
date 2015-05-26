/**
 * Created by Maksym on 5/26/2015.
 */
    "use strict";

    var tableHead, tableBody, dataHead, dataBody, buttonDelete, buttonShowTable, insertButShowTable;
    var headers = ['id', 'name', 'country', 'stock', 'delete'];
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

    $(window).load(function() {

        buttonShowTable = "<input type = 'submit' id = 'buttonShowTable' class='btn btn-default btn-lg' value='Show Table'>";
        buttonDelete = "<input type = 'submit' class= 'btn btn-danger btn-xs' value = 'delete'>";
        insertButShowTable = $('#total').append(buttonShowTable);
        $("#buttonShowTable").css({display: "block", margin: "0 auto"});
        $("#table").css({"display": "none"});
        $("h3").css({"text-align": "center"});
        $("#buttonShowTable").click(function(){
            $('#table').fadeToggle(1500);
        });

        tableHead = $('#table').append('<thead><tr class="info" id = "dataHead"></tr></thead>');
        tableBody = $('#table').append('<tbody id = "dataBody"></tbody>');

        for(var i = 0; i < headers.length; i++){
            dataHead = $('#dataHead').append('<th>' + headers[i] +  '</th>');
        }

        for(var j = 0; j < data.length; j++){
                dataBody = $('#dataBody').append('<tr>' + '<td>' + data[j].id + '</td>'
                + '<td>' + data[j].name + '</td>'
                + '<td>' + data[j].country + '</td>'
                + '<td>' + data[j].stock + '</td>'
                + '<td>' + buttonDelete + '</td>'+'</tr>')
        }
});
