
function myFunction(x) {
    if (x.matches) { // If media query matches
        let contact = document.getElementById("contactsa");
        contact.style.color = "hsl(212, 27%, 19%)";

    }
}


let x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addEventListener(myFunction) // Attach listener function on state changes

function contact() {
    let contact = document.getElementById("contactsa");
    contact.style.color = "white";
}
function contact1() {
    let contact = document.getElementById("contactsa");
    contact.style.color = "hsl(212, 27%, 19%)";
    
}


/*to show the yellow underline on hover*/
function learnHover1() {
    let over = document.getElementById("yellowHover");
    over.style.display = "block";
}

/*to hide the yellow underline*/
function learnHover2() {
    let over = document.getElementById("yellowHover");
    over.style.display = "none";
}
/*to show brown underline*/
function learnHover3() {
    let over2 = document.getElementById("brownHover");
    over2.style.display = "block";

}

/*to hide brown underline*/
function learnHover4() {
    let over2 = document.getElementById("brownHover");
    over2.style.display = "none";

}
/*changing the color of facebook icon on hover*/
function facebook() {
    let face1 = document.getElementById("face1");
    let face2 = document.getElementById("face2");
    face1.style.display = "none";
    face2.style.display = "block";
}

/*changing the color of instagram icon on hover*/
function instagram() {
    let face1 = document.getElementById("insta1");
    let face2 = document.getElementById("insta2");
    face1.style.display = "none";
    face2.style.display = "block";
}

/*changing the color of twitter-icon on hover*/
function twitter() {
    let face1 = document.getElementById("twit1");
    let face2 = document.getElementById("twit2");
    face1.style.display = "none";
    face2.style.display = "block";
}

/*changing the color of pintrest-icon on hover*/
function pinterest() {
    let face1 = document.getElementById("pin1");
    let face2 = document.getElementById("pin2");
    face1.style.display = "none";
    face2.style.display = "block";
}

/*to remove the hover effect on facebook*/
function facebook1() {
    let face1 = document.getElementById("face1");
    let face2 = document.getElementById("face2");
    face1.style.display = "block";
    face2.style.display = "none";
}

/*to remove the hover effect on instagram-icon*/
function instagram1() {
    let face1 = document.getElementById("insta1");
    let face2 = document.getElementById("insta2");
    face1.style.display = "block";
    face2.style.display = "none";
}

/*to remove the hover effect on twitter-icon*/
function twitter1() {
    let face1 = document.getElementById("twit1");
    let face2 = document.getElementById("twit2");
    face1.style.display = "block";
    face2.style.display = "none";
}

/*to remove the hover effect on pinterest-icon*/
function pinterest1() {
    let face1 = document.getElementById("pin1");
    let face2 = document.getElementById("pin2");
    face1.style.display = "block";
    face2.style.display = "none";
}


