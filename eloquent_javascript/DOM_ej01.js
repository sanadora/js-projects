var MOUNTAINS = [
    { name: "Kilimanjaro",
      height: 5432,
      country: "Tanzania"},
    { name: "Aconcagua",
      height: 2345,
      country: "Argentina"
    }
];

function buildRow() {
    var row = document.createElement("tr");
    for (var i = 0; i < arguments.length; i++) {
        var rowTag = document.createElement("td");
        var child = document.createTextNode(arguments[i]);
        rowTag.appendChild(child);
        row.appendChild(rowTag);
    }
    return row;
}

var mounts = MOUNTAINS.map(function(mount) {
    var values = [];
    for (var prop in mount)
        values.push(mount[prop]);
    return values;
}); // ["Kilimanjaro", 5432, "Tanzania"]


var rows = mounts.map(function(mount) {
    return buildRow.apply(null, mount);
});

var table = document.createElement("table");

var headersRow = document.createElement("tr");
Object.keys(MOUNTAINS[0]).forEach(function(k) {
    var header = document.createElement("th");
    header.appendChild(document.createTextNode(k));
    headersRow.appendChild(header);
});

table.appendChild(headersRow);


rows.forEach(function(row) {
    table.appendChild(row);
});

document.body.appendChild(table);



// funcion para appendear hijos a un nodo
function ce(name) {
    var elem = document.createElement(name);
    for (var i = 1; i < arguments.length; i++) {
        var child = arguments[i];
        if (typeof child == "string")
            child = document.createTextNode(child);
        elem.appendChild(child);
    }
    return elem;
};

document.body.appendChild(ce("p", "asdfasdfasdf",
                            ce("em", " hola")));
