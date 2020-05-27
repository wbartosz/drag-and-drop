let dropArea = document.getElementById("drop-area");

["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

//Add a class whenever file is dragged into the element or over the element
["dragenter", "dragover"].forEach(eventName => {
    dropArea.addEventListener(eventName, addDroppingClass, false);
});

//Remove a class whenever file is dragged out of the element or dropped on it
["dragleave", "drop"].forEach(eventName => {
    dropArea.addEventListener(eventName, removeDroppingClass, false);
});

dropArea.addEventListener("drop", handleDrop, false);

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function addDroppingClass(e) {
    dropArea.classList.add("dropping");
}

function removeDroppingClass(e) {
    dropArea.classList.remove("dropping");
}

function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;

    previewFile(files[0]);
}

function previewFile(file) {
   let reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onloadend = function() {
       let img = document.getElementById("preview");
       img.src = reader.result;
    }
}
