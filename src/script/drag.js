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
    src = document.getElementById("senatorList");
    targetRepub = document.getElementById("Republican");
    targetDem = document.getElementById("Democrat");
    
    // Add event handlers for the source
    src.ondragstart = dragStartHandler;
    src.ondragend = dragEndHandler;
     src.ondrag = dragHandler;

    // Add event handlers for the target
    //target.ondragenter = dragEnterHandler;
    targetRepub.ondragover = dragOverHandler;
    targetRepub.ondrop = dropHandler;

    targetDem.ondragover = dragOverHandler;
    targetDem.ondrop = dropHandler;
}

var populateSenatorList = $.ajax({
    type: "GET",
    url: "partyList.xml",
    dataType: "xml"
}).then(function gotit(xml){
     var boop = [];
      $(xml).find('senator').each(function(){
            var Name = $(this).find('name').text();
            var Party = $(this).find('party').text();
            var Voted = false;
            var sen = {
                
                id: counter,
                Name: Name,
                Party: Party,
                Voted: Voted
                
            }
           boop.push(sen);
           counter++;
          
      });
     return boop;

}).then(function checkLocalStorage(obArray){
    
    for (var i = 0; i < obArray.length; i++)
    {
       var item = localStorage.getItem(obArray[i].id);
       
       if(item == null){
           localStorage.setItem(obArray[i].id, JSON.stringify(obArray[i]));  
           document.getElementById("msg").innerHTML = obArray.length + " items loaded from xml"; 
       }else{
           document.getElementById("msg").innerHTML = obArray.length + " items loaded from local storage";
       }
       
    }  
    return obArray
}).then(function fillList(sameArray){
    
    var senatorListElement = document.getElementById('senatorList');
     var repubListElement = document.getElementById('Republican');
      var democratListElement = document.getElementById('Democrat');
    for (var i = 0; i < sameArray.length; i++)
    {
       var item = localStorage.getItem(sameArray[i].id);
       
       if(item != null){
            var itemObject = JSON.parse(item);
            var entry = document.createElement('li');

            entry.setAttribute("id", itemObject.id);
            entry.setAttribute("draggable", "true");
            entry.appendChild(document.createTextNode(itemObject.Name));

         if(itemObject.Voted == true){
            if(itemObject.Party == "Democrat"){
                 var d = document.createElement('li');
                 d.innerHTML = itemObject.Name;
                 democratListElement.append(d);  
            }

            

            if(itemObject.Party == "Republican"){
                var d = document.createElement('li');
                 d.innerHTML = itemObject.Name;
                 repubListElement.append(d);  
            }
             

         }
            senatorListElement.appendChild(entry);
       }
    }        
});


function dragStartHandler(e) {
    e.dataTransfer.setData("Text", e.target.id);
    sourceId = e.target.id;     // explicitly for some browsers
    e.target.classList.add("dragged");
}

function updateLocalStorage(id, target) {
   var item = localStorage.getItem(id);
   var itemObject = JSON.parse(item);
   
   if(itemObject.Party != target){
      alert("This person is not in the target party");
      return false;
   }

   if(itemObject.Voted == false){
        itemObject.Voted = true;
        localStorage.setItem(id, JSON.stringify(itemObject)); 
        return true; 
   }else{
      alert("This person already voted");
      return false;
   }
}

function dragEndHandler(e) {
    var elems = document.querySelectorAll(".dragged");
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
    console.log("Drag Over " + e.target.id + 
             " source is " + e.dataTransfer.getData("Text")) ;   
        e.preventDefault();
   
}

function dropHandler(e) {
    console.log("Drop on " + e.target.id + 
             " source is " + e.dataTransfer.getData("Text")) ;
   
    var id = e.dataTransfer.getData("text") || sourceId;
    if(updateLocalStorage(id, e.target.id)){
        var sourceElement = document.getElementById(id);
        var newElement = sourceElement.cloneNode(true);               
        e.target.appendChild(newElement);
    }
    e.preventDefault();
}






