
function Get(element, property) {
    var val = element[property];
    console.log(val);
    console.log(element);
    return val;
}



/* ************************ */

function ToggleClass(element, cssClass) {
    var out = false;
    try {
        out = element.classList.toggle(cssClass);
    }
    catch (err) {
        console.log(err);
    }
    return out;
}

function Collapsible(element) {
    ToggleClass(element, "active");
    if (element.classList.contains("show")) {
        ToggleClass(element, "show");
        element.style.maxHeight = element.scrollHeight + "px";
    }
    if (element.style.maxHeight) {
        element.style.maxHeight = null;
    } else {
        element.style.maxHeight = element.scrollHeight + "px";
    }
}