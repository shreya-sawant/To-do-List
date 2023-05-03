document.querySelector('#add').onclick = function(){
    if(document.querySelector('#to_do input').value.length == 0){
        alert("Enter your task!!!")
    }

    else{
        document.querySelector('#todo_list').innerHTML += `
                <div class="task">
                <span id="taskname">
                    ${document.querySelector('#to_do input').value}
                </span>
                <button class="delete">Done</button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}