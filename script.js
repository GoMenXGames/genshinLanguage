alphabet = Array.from("ABCDEFG HIJKLMNOP QRSTUVWXYZ,.");
qwerty = Array.from("QWERTYUIOP ASDFGHJKL ZXCVBNM,.");

function setText(event) {
    textAreas = document.querySelectorAll("textarea")
    console.log(event.target);
    array = Array.from(textAreas);
    console.log(array);
    array.splice(event.target.id, event.target.id);
    console.log(array);
    array.forEach(element => {
        element.value = event.target.value
    });
}

function addText(event) {
    console.log(event)
    textAreas.forEach((area) => {
        area.value += event.target.value
    })
}

function renderAll() {
    textAreas = document.querySelectorAll("textarea");


    keys = document.querySelector(".keys");

    qwerty.forEach((input) => {
        if (input == " ") {
            keys.innerHTML += "<br/>"
        }
        else {
            newKey = "<input type=\"button\" value=\"" + input + "\"/>"
            keys.innerHTML += newKey
        }
    })

    textAreas.forEach(element => {
        console.log(element);
        element.addEventListener("input", setText)
    });

    keys = document.querySelectorAll(".keys > input")

    keys.forEach(element => {
        // console.log(element);
        element.addEventListener("click", addText)
    });
}
