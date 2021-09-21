showNotes();
// if user adds a note, it adds it to the localstorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    let textArea = document.getElementById("textArea");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(textArea.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    textArea.value = "";
    showNotes();
})
// function to show elements from local storage
function showNotes() {
    notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";

    notesObj.forEach(function (element, index) {
        html += `
                <div class="notesCard card my-2 mx-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
                    </div>
                </div>`;
    })
    let notesCard = document.getElementById("notesCard");
    if (notesObj.length != 0) {
        notesCard.innerHTML = html;
    }
    else {
        notesCard.innerHTML = `<p class="card-text">No Notes Available!! By Using The Section Above You Can Add Notes</p>`;
    }
}
// function to delete a note
notes = localStorage.getItem("notes");
if (notes == null) {
    notesObj = [];
}
else {
    notesObj = JSON.parse(notes);
}
function deleteNote(index) {
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
// function to search a note
searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
    inputVal = searchTxt.value.toLowerCase();
    // console.log("this is input", inputVal);
    notesCard = document.getElementsByClassName("notesCard");
    Array.from(notesCard).forEach(function (element) {
        cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})