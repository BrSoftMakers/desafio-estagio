const filterBtn = document.querySelector("#filter-select");
const filterTodos = (filterValue) => {
  const todos = document.querySelectorAll(".todo");

  switch (filterValue) {
    case "todos":
      todos.forEach((todo) => (todo.style.display = "flex"));

      break;

    case "chassi":
      todos.forEach((todo) =>
        todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none")
      );

      break;

    case "todo":
      todos.forEach((todo) =>
        !todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none")
      );

      break;

    default:
      break;
  }
};

let adicionar = document.getElementById("add");
window.document.write(adicionar.innerHTML);
