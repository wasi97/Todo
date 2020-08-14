var list = document.getElementById("ul")
// add task in list
function add(){
var item = document.getElementById ("todo")
if(item.value === ""){
  alert("please enter a task")
}
  else {
    // uploading data on database
    var key = firebase.database().ref('Todo Task').push().key;
   var todoTask= {
     task: todo.value,
     key: key
   }
    firebase.database().ref('Todo Task/' + key).set(todoTask) 
    // getting data from dataBase
    firebase.database().ref('Todo Task/').on("child_added",function(data){
      fetchedData = data.val()
    })
 var li=   document.createElement("li")
var liText = document.createTextNode(fetchedData.task)    
    li.appendChild(liText)
    // delete button
    
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.classList.add("btn")
    delBtn.classList.add("right")
    delBtn.setAttribute("onclick","del(this)")
    delBtn.setAttribute("id",key)
    delBtn.appendChild (delText)
    li.appendChild(delBtn)
    // edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.classList.add("btn")
    editBtn.classList.add("right")
    editBtn.setAttribute("onclick","edit(this)")
    editBtn.appendChild (editText)
    editBtn.setAttribute("id",key)
    li.appendChild(editBtn)

    
    list.appendChild(li)
    
    todo.value = ""
    addbtn.classList.remove("hide")
    todoDiv.classList.add("hide")

     
  }
    
}

// delete button for each
function del(w){

  var delFromServer = w.getAttribute("id")
  firebase.database().ref("Todo Task/"+ delFromServer).remove()

  w.parentNode.remove();
}

function edit(w){
    
 var edit =prompt("Enter edit value",w.parentNode.firstChild.NodeValue)
 w.parentNode.firstChild.NodeValue = edit;
 var editData = w.getAttribute("id");
 firebase.database().ref("Todo Task/"+ editData).set({
  task: edit,
  key: editData
})
 
}

function delAll(){
  if(list.innerHTML === ""){
    alert("ToDo list is empty")
    }
    firebase.database().ref("Todo Task").remove()
    list.innerHTML =""
}
// add new task
var addbtn = document.getElementById("add")
var todoDiv = document.getElementById("todoDiv")
function addDiv(){
addbtn.classList.add("hide")
todoDiv.classList.remove("hide")
}

