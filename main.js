function dragover(evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
}

function dragLeave(evt) {} // available if required
function dragEnd(evt) {} // available if required

function dragstart(evt) {
    evt.dataTransfer.setData("text/plain", evt.target.id);
    evt.dataTransfer.effectAllowed = "move";
}

function drop(evt) {
    evt.preventDefault();
    var data = evt.dataTransfer.getData("text");
    evt.target.closest('.scrum-board-column').appendChild(document.getElementById(data));
}