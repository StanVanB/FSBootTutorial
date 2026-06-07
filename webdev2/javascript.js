window.onload = function () {

    //Selectors
    // selecting element based on id
    document.getElementById("demo").innerHTML = "Hello, JavaScript!";

    // selecting element based on class
    document.getElementsByClassName("myClass")[0].innerHTML = "This is updated text for myClass div";

    // selecting based on a tag
    document.getElementsByTagName("p")[0].style.color = "blue";
    var second_paragraph = document.getElementsByTagName("p")[1];
    second_paragraph.style.color = "red";
    second_paragraph.style.backgroundColor = "yellow";
    second_paragraph.style.fontWeight = "bold";
    //try to change the color of the second paragraph and try adding some font style to it as well

    document.getElementById("demo").className = "styleClass";

    var newParagraph = document.createElement("p");
    newParagraph.innerHTML = "This is a new paragraph created using JavaScript.";
    document.body.appendChild(newParagraph);
}

function changeText() {
    document.getElementsByTagName("p")[0].innerHTML = "New Text after button clicked!";
    //change the text of the first paragraph when the buttons is clicked
}

function changeImage() {
    //change the image source when the button is clicked
    document.getElementById("lionImage").src = "https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg";
}