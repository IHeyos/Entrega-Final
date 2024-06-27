var navList = document.getElementById("navList");
var toggleee = document.getElementById("toggleee");

toggleee.onclick = function () {
    if(navList.className == "unorder-list") {
        navList.className = "show-unorder-list";
    } else {
        navList.className = "unorder-list";
    }
}