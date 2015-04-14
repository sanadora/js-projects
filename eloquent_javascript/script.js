function asTabs(node) {
    var children = node.childNodes, tabs = [];
    for (var i = 1; i < children.length; i = i+2) {
        var child = children[i], button = elm("button");
        button.textContent = child.getAttribute("data-tabname");
        node.parentNode.insertBefore(button, node);
        tabs.push(child);
    }
    node.parentNode.addEventListener("click", function(event) {
        var tabsToHide = tabs.filter(function(tab) {
            return tab.getAttribute("data-tabname") !=
                event.target.textContent;
        });
        tabsToHide.forEach(function(tab) {
            tab.style.display = "none";
        });
        var tabToShow = tabs.filter(function(tab) {
            return tab.getAttribute("data-tabname") ==
                event.target.textContent;
        });
        tabToShow[0].style.display = "";
    });
}
asTabs(document.querySelector("#wrapper"));

function elm(node, className) {
    var element = document.createElement(node);
    if (className) element.className = className;
    return element;
}
