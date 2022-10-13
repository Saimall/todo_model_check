const { connect } = require("./connectDB.js");
const Todo = require("./TodoModel.js");
const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "first item",
      dueDate: new Date(),
      completed: false,
    });
    console.log("created todo with ID : ${todo.id}");
  } catch (error) {
    console.error(error);
  }
};
const countitems = async () => {
  try {
    const totalcount = await Todo.count();
    console.log(`Found ${totalcount} items in the table!`);
  } catch (error) {
    console.error(error);
  }
};
const getAllTodos = async () => {
  try {
    const todos = await Todo.findAll();
    const todolist = todos.map((todo) => todo.displayableString()).join("\n");
    console.log(todolist);
  } catch (error) {
    console.error(error);
  }
};
const getSingleTodo = async () => {
  try {
    const todo = await Todo.findOne({
      where: {
        completed: false,
      },
      order: [["id", "DESC"]],
    });
    console.log(todo.displayableString());
  } catch (error) {
    console.error(error);
  }
};
const updateItem = async (id) => {
  try {
    await Todo.update(
      { completed: true },
      {
        where: {
          id: id, // condition that should satisfies
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};
const deleteItem = async (id) => {
  try {
    const deletedRowCount = await Todo.destroy({
      where: {
        id: id,
      },
    });
    console.log(`Deleted ${deletedRowCount} rows!`);
  } catch (error) {
    console.error(error);
  }
};
(async () => {
  await createTodo();
  await deleteItem(2);
  await getAllTodos();
})();
