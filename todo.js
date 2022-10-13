/* eslint-disable no-unused-vars */
const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (item) => item.dueDate < new Date().toISOString().split("T")[0]
    );
  };

  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toISOString().split("T")[0]
    );
  };

  const dueLater = () => {
    return all.filter(
      (item) => item.dueDate > new Date().toISOString().split("T")[0]
    );
  };

  const toDisplayableList = (list) => {
    let string_display = list.map((item) => {
      let completestatus = item.completed ? "[x]" : "[ ]";
      let Datedisplay =
        item.dueDate === new Date().toISOString().split("T")[0]
          ? ""
          : item.dueDate;
      return `${completestatus} ${item.title} ${Datedisplay}`.trim();
    });
    let final_string = string_display.join("\n");
    return final_string;
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
