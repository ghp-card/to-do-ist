//добавляем задачу в список
function createTask() {
	var task = document.createElement("li");
	var taskName = document.getElementById('create-task').value;
	var t = document.createTextNode(taskName);
	task.appendChild(t);
	if (taskName === '') {
		alert("Write task");
	}
	else {
		document.getElementById("task-list").appendChild(task);
		var delButton = document.createElement("button");
		var delButtonText = document.createTextNode("\u2713");
		delButton.className = "delete";
		delButton.appendChild(delButtonText);
		task.appendChild(delButton);
	}
	document.getElementById("create-task").value = "";

}

//помечаем как выполненную
	var list = document.querySelector('ul');
    list.addEventListener('click', function(event) {
       if (event.target.tagName === 'LI') {
          event.target.classList.toggle('fulfilled');
  }
}, false);

//удалить выполненные задачи
function deleteFulfilled() {
	var getUL = document.getElementById("task-list");
    var fulfilledTasks = getUL.getElementsByClassName("fulfilled");

while (fulfilledTasks[0]) {
    fulfilledTasks[0].parentNode.removeChild(fulfilledTasks[0]);
  }
}

//удалить одну задачу(неважно, выполненная или нет)
//var removeTask = document.getElementsByClassName("delete");
//removeTask.addEventListener('click', function(event) { 
//if (event.target.tagName === 'LI') { 
//event.target.parentNode.removeChild(event.currentTarget); 
  //}
//}, false);

document.addEventListener('click',function(e) {
 
  if(e.target && e.target.className == 'delete') {
     e.target.parentNode.remove();
  }
})



