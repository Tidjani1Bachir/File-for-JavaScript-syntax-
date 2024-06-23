// let contentElementToCreate =document.querySelector(`[type="text"]`);
// let mainSubmit =document.querySelector(`type="submit"`);

// let tasks =document.querySelector(".tasks");


// function createElement(value) {
//     /* [1] create input field with text  */
// let element =document.createElement("input");
// elementContent =document.createTextNode(value);
// element.appendChild(elementContent);
// element.style.cssText =`width: 280px;
// height:30px;
// border-radius: 5px;
// border: 1px solid gray;
// margin-right:10px;`

// /* [2] create the container of the input and the submit  */
// let elementContainer =document.createElement("div");
// elementContainer.appendChild(element);
// elementContainer.style.cssText =`width: 400px;
// height: 100px;
// background-color: rgb(227, 227, 227);
// display: flex;
// justify-content: center;
// align-items: center;
// border-radius: 5px;`
// /* [3] Create Submit  */
// let submit = document.createElement("input");
// submitContent =document.createTextNode("submit");
// submit.appendChild(submitContent);

// submit.setAttribute("type","submit");

// submit.style.cssText = `height: 36px;
// width: 80px;
// border-radius: 5px;
// border: 1px solid gray;
// background-color: rgba(245, 73, 10, 0.623);
// color: white;`

// elementContainer.appendChild(submit);

// document.body.appendChild(elementContainer);
// }


// const form = document.querySelector("form");


// form.addEventListener('submit', function(event) {
//     createElement(contentElementToCreate.value)
//     event.preventDefault();
//   });

/*############################################################################  */

const form = document.querySelector("form");
let tasks =document.querySelector(".tasks");

let tasksLocalStorage = []
/* console.log(typeof window.localStorage.getItem("Tasks")) */

function createElement(event) {
    event.preventDefault();



    const inputElement = document.querySelector('input');

    let id = new Date().getTime()
  const value = inputElement.value;

  const element = document.createElement('input');
  element.value = value;
  element.style.cssText = `
    width: 280px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid gray;
    margin-right: 10px;
  `;

  const elementContainer = document.createElement('div');
  elementContainer.appendChild(element);
  elementContainer.style.cssText = `
    width: 400px;
    height: 60px;
    background-color: rgb(227, 227, 227);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top:20px;
    margin-bottom:-25px;

  `;

  const deleteB = document.createElement('input');
  /* deleteB.textContent = 'Delete'; */
  deleteB.setAttribute('type', 'submit');
  deleteB.setAttribute('value', 'Delete');
  deleteB.style.cssText = `
    height: 36px;
    width: 80px;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: rgba(245, 73, 10, 0.623);
    color: white;
  `;

  elementContainer.appendChild(deleteB);

  tasks.insertAdjacentElement('beforebegin', elementContainer);
  tasks.style.cssText = `height:0; margin-top:0;`
  const task = {
    id:`${id}`,
    title:`${value}`
  }
  tasksLocalStorage.push(task)


  localStorage.setItem('tasks', JSON.stringify(tasksLocalStorage));

  deleteB.onclick =function() {

    elementContainer.remove();

    const tasks = JSON.parse(localStorage.getItem('tasks'));

    const button = document.querySelector('button');

      const title = value;

      const index = tasks.findIndex((task) => task.title === title);

      if (index !== -1) {
        tasks.splice(index, 1);

        localStorage.setItem('tasks', JSON.stringify(tasks));
      }

  }
}


    form.addEventListener('submit',createElement );


/* window.onload =function(){
if (window.localStorage.getItem("Tasks") === "{}"){
    let tasksLocalStorage = [];
}else {
   let tasksLocalStorage =( Object.entries(window.localStorage.getItem("Tasks")))
}

} */
