document.addEventListener("DOMContentLoaded", () => {
  const $ = (el) => document.querySelector(el);
  const $$ = (el) => document.querySelectorAll(el);

  const $listaTareas = $(".taskList");
  const $button = $(".btn");
  const $input = $(".inp");

  let valortarea = "";

  let tareas = []; //variable local para el arreglo de tareas

  $input.addEventListener("change", (e) => {
    valortarea = e.target.value;
  });

  //agregar tarea
  $button.addEventListener("click", (e) => {
    cleanList();
    const task = valortarea;
    tareas.push(task);
    showTasks();
    cleanInput();
  });

  //mostrar tareas
  const showTasks = () => {
    tareas.forEach((e, i) => {
      const $li = document.createElement("li");
      const $dltbtn = document.createElement("button");

      $dltbtn.classList.add("deletebtn");
      $dltbtn.textContent = "X";
      $dltbtn.type = "button";
      $dltbtn.dataset.val = i;
      $dltbtn.addEventListener("click", deleteTask);
      $li.textContent = e;
      $li.appendChild($dltbtn);
      $li.dataset.ref = i;
      $listaTareas.appendChild($li);
    });
  };

  //eliminar una tarea
  const deleteTask = (e) => {
    cleanList();
    const pos = e.currentTarget.dataset.val;
    const aux = [...tareas];
    const newarr = aux.filter((el, i) => i != pos);
    tareas = newarr;
    showTasks();
  };

  //limpiar lista
  const cleanList = () => {
    $listaTareas.textContent = "";
  };

  //limpiar input
  const cleanInput = () => {
    $input.value = "";
  };

  showTasks();
});
