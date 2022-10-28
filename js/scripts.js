const filterBtn = document.querySelector("#filter-select");
const filterTodos = (filterValue) => {
  const todos = document.querySelectorAll(".todo");

  switch (filterValue) {
    case "todos":
      todos.forEach((todo) => (todo.style.display = "flex"));

      break;

    case "chassi":
      todos.forEach((todo) =>
        todo.classList.contains("chassi")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none")
      );

      break;

    case "modelo":
      todos.forEach((todo) =>
        !todo.classList.contains("modelo")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none")
      );

      break;

    default:
      break;
  }
};

// LOGICA DO DOM

// let adicionar = document.getElementById("add");
// window.document.write(adicionar.innerHTML);

// let editar = document.getElementById("edit")
// window.document.write(editar.innerHTML)

// let remover = document.getElementById("remove")
// document.write(remover.innerHTML)

// let sedan = document.getElementById("sedancarro")
// document.write(sedan.outerHTML)

// let suv = document.getElementById("suvcarro")
// document.write(suv.outerHTML)

// let hatch = document.getElementById("hatchcarro")
// document.write(hatch.outerHTML)
