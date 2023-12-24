function topNav() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function dragStart(event){

    console.log(event.dataTransfer);

    event.dataTransfer.setData('text/plain', event.target.id);

    event.currentTarget.style.backgrondColor = 'gray';

}

function dragOver(event){
    event.preventDefault();
}

function drop(event){
    const id = event.dataTransfer.getData('text');
    console.log(id);
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();

}
