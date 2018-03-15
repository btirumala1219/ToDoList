// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveTask);

function saveTask(e){
  console.log("savetask is called");
  var taskName =document.getElementById('taskName').value;
  var taskDetails =document.getElementById('taskDetails').value;


 var task = {
   name: taskName,
   details: taskDetails
 }

 if(localStorage.getItem('tasks') === null){

    var tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {

    var tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  document.getElementById('myForm').reset();
  fetchTasks();
  //e.preventDefault();

}

function deleteTask(url){

  var tasks = JSON.parse(localStorage.getItem('tasks'));

  for(var i =0;i < tasks.length;i++){
    if(tasks[i].name == name){
      tasks.splice(i, 1);

    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  fetchtasks();

}

function fetchTasks(){

  var tasks = JSON.parse(localStorage.getItem('tasks'));
  var tasksResults = document.getElementById('tasksResults');

  tasksResults.innerHTML = '';
  console.log(tasks);
  if(tasks != null){
    for(var i = 0; i < tasks.length ; i++){

    var name = tasks[i].name;
    var details = tasks[i].details;

    tasksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+'</h3>' + details +
                                  '<p>'+ '</br>' +'<a onclick="deleteTask(\''+name+'\')" class="btn btn-danger" href="#">Delete</a>' + '</p>' +
                                  "_________________________________________________________________________"

                                  '</div>';
}
  }

}



// Validate Form
