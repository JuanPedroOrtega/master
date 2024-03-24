<template>
  <div class="container">
    <h1>ToDo App</h1>
    <form @submit.prevent="addTodo">
      <input v-model.trim="newTodo" type="text" placeholder="Enter a new todo" class="input-field">
      <button type="submit">➕ Add</button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" class="todo-item">
        <div>
          <input type="checkbox" v-model="todo.done" @change="toggleDone(index)" class="checkbox">
          <span :class="{ done: todo.done }" @click="toggleDone(index)">
            {{ todo.content }}
          </span>
        </div>
        <div>
          <button @click="editTodo(index)" aria-label="Edit" class="edit-button">✏️</button>
          <button @click="removeTodo(index)" aria-label="Delete" class="delete-button">❌</button>
        </div>
      </li>
    </ul>
    <h4 v-if="todos.length === 0">Empty list.</h4>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const newTodo = ref('');
    const todos = ref([
      { content: 'Write a blog post', done: true },
      { content: 'Listen to a podcast', done: false }
    ]);

    function addTodo() {
      if (newTodo.value.trim()) {
        todos.value.push({
          content: newTodo.value.trim(),
          done: false
        });
        newTodo.value = '';
      }
    }

    function toggleDone(index) {
      todos.value[index].done = !todos.value[index].done;
    }

    function removeTodo(index) {
      todos.value.splice(index, 1);
    }

    function editTodo(index) {
      const newContent = prompt('Edit todo:', todos.value[index].content);
      if (newContent !== null && newContent.trim() !== '') {
        todos.value[index].content = newContent.trim();
      }
    }

    return {
      newTodo,
      todos,
      addTodo,
      toggleDone,
      removeTodo,
      editTodo
    };
  }
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #f8f9fa; /* Color de fondo clarito */
}

.input-field {
  height: 48px;
  padding: 12px;
  font-size: 18px;
  border: 2px solid #343a40; /* Color del borde */
  border-radius: 6px;
  background-color: #ffffff; /* Color de fondo blanco */
  color: #000000; /* Color de texto en negro */
  margin-top: 6px;
  margin-bottom: 12px;
  outline: none;
}

button[type="submit"] {
  margin-top: 12px;
}

ul {
  padding: 10px;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #343a40; /* Color del borde */
  padding: 12px 24px;
  border-radius: 6px;
  margin-bottom: 12px;
}

.checkbox {
  margin-right: 12px;
}

span {
  cursor: pointer;
}

span.done {
  text-decoration: line-through;
}

.edit-button,
.delete-button {
  font-size: 22px;
  padding: 6px;
  background-color: transparent;
  border: none;
  color: #343a40; /* Color del icono */
  cursor: pointer;
}
</style>
