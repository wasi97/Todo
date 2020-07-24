var list = document.getElementById("ul")
function add(){
var item = document.getElementById ("todo")
if(item.value === ""){
  alert("please enter a task")
}
  else {
 var li=   document.createElement("li")
var liText = document.createTextNode(todo.value)    
    li.appendChild(liText)
    // delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","del(this)")
    delBtn.appendChild (delText)
    li.appendChild(delBtn)
    // edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","edit(this)")
    editBtn.appendChild (editText)
    li.appendChild(editBtn)
    
    
    list.appendChild(li)
    todo.value = ""
    }
    
}

function del(w){

w.parentNode.remove()
    
}

function edit(w){
    
 var edit =prompt("Enter edit value",w.parentNode.firstChild.NodeValue)
 w.parentNode.firstChild.NodeValue = edit;
 
}

function delAll(){
  if(list.innerHTML === ""){
    alert("ToDo list is empty")
    }
    list.innerHTML =""
}