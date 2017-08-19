window.onload = init;

var counter = 1;


function saveToLocalStorage(obArray){

    console.log(obArray);
    for (var i = 0; i < obArray.length; i++)
    {
        localStorage.setItem(obArray[i].id, JSON.stringify(obArray[i]));
    }  
}

var src, target, msg;
var sourceId;

function init() {
    src = document.getElementById("garbage-list");
    targetTrash = document.getElementById("trashImg");
    targetRecycle = document.getElementById("recyImg");
    
    // Add event handlers for the source
    src.ondragstart = dragStartHandler;
    src.ondragend = dragEndHandler;
    src.ondrag = dragHandler;

    // Add event handlers for the target
    //target.ondragenter = dragEnterHandler;
    targetTrash.ondragover = dragOverHandler;
    targetTrash.ondrop = dropHandler;

    targetRecycle.ondragover = dragOverHandler;
    targetRecycle.ondrop = dropHandler;
}

function dragStartHandler(e) {
     console.log("Dragging " + e.target.id);
    e.dataTransfer.setData("Text", e.target.id);
    sourceId = e.target.id;     // explicitly for some browsers
    e.target.classList.add("dragged");
}

function updateLocalStorage(id, target) {
   
   console.log(id);
   var alertArea = document.getElementById("alert-spot");
   var itemId= id.substr(0, id.indexOf('-')); 
   var itemLocal = localStorage.getItem(itemId);
   var itemMessage = JSON.parse(itemLocal).message;
   var canRecy = id.split('-')[1];
   var isTrueSet = (canRecy == 'true');
   console.log(isTrueSet);
   var item = localStorage.getItem(id);
   var itemObject = JSON.parse(item);
   
   if(target == 'recyImg' && isTrueSet){
     alertArea.innerHTML = '<div class="alert alert-success" role="alert">Great Job! ' + itemMessage + '</div>';
   }else if(target == 'trashImg' && !isTrueSet)
   {
    alertArea.innerHTML = '<div class="alert alert-success" role="alert">Great Job! ' + itemMessage +' </div>';
 
    }else
    {
     alertArea.innerHTML = '<div class="alert alert-danger" role="alert">Try Again, '+ itemMessage +'</div>';
   }
}

function dragEndHandler(e) {
    var t = document.getElementById("trashImg");
    var r = document.getElementById("recyImg");
    var elems = document.querySelectorAll(".dragged");
    t.classList.remove("hazy");
    r.classList.remove("hazy");
    for(var i = 0; i < elems.length; i++) {
        elems[i].classList.remove("dragged");
    }
}

function dragHandler(e) {
    console.log("Dragging " + e.target.id);
}

function dragEnterHandler(e) {
    console.log("Drag Entering " + e.target.id + 
            " source is " + e.dataTransfer.getData("Text") );    
        e.preventDefault();
    
}

function dragOverHandler(e) {
    var targetBin = document.getElementById(e.target.id);
    targetBin.className = "hazy";
    console.log("Drag Over " + e.target.id + 
             " source is " + e.dataTransfer.getData("Text")) ;   
        e.preventDefault();
   
}

function dropHandler(e) {
    console.log("Drop on " + e.target.id + 
             " source is " + e.dataTransfer.getData("Text")) ;
   
    var id = e.dataTransfer.getData("text") || sourceId;
    updateLocalStorage(id, e.target.id);
       
    
    e.preventDefault();
}






