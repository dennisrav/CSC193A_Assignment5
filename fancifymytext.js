function clickBiggerButton() {
    alert("Hello, world!");
}

function makeBigger() {
    document.getElementById("text").style.fontSize = "24pt";
}

function changeStyle() {
    let text = document.getElementById("text");
    let fancy = document.getElementById("fancy");
    let boring = document.getElementById("boring");
    
    if (fancy.checked) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else if (boring.checked) {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function mooButton(){
    let text = document.getElementById("text");
    text.value= text.value.toUpperCase();

    let parts = text.value.split(" ");
    for(let i = 0; i < parts.length; i++) {
        if(parts[i].charAt(parts[i].length - 1) === ".") {
            parts[i] = parts[i].slice(0, -1) + "-Moo.";
        }
    }
    text.value = parts.join(" ");
}