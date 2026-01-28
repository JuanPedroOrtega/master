<template>
  <div class="container">
    <h1>ToDo App</h1>
    <form @submit.prevent="handleAddTodo">
      <label for="newTodo">New ToDo </label>
      <input 
        id="newTodo"
        v-model="newTodo" 
        name="newTodo" 
        autocomplete="off"
        aria-label="Enter new todo task"
      />
      <button type="submit" aria-label="Add new todo">
        <span class="btn-text">Add ToDo</span>
        <span aria-hidden="true">➕</span>
      </button>
    </form>
    <h2>ToDo List</h2>
    <ul>
      <li v-for="todo in todoStore.todos" :key="todo.id">
          <div class="cntr">
            <input 
              :id="`cbx-${todo.id}`"
              type="checkbox" 
              class="hidden-xs-up"
              :checked="todo.done"
              @change="todoStore.toggleTodo(todo.id)"
              :aria-label="`Mark '${todo.content}' as ${todo.done ? 'incomplete' : 'complete'}`"
            />
            <label :for="`cbx-${todo.id}`" class="cbx"></label>
          </div>
          
          <span 
            v-if="editingId !== todo.id"
            :class="{ done: todo.done }" 
            @click="todoStore.toggleTodo(todo.id)"
            class="todo-text"
            :aria-label="todo.done ? 'Completed task' : 'Pending task'"
          >
            {{ todo.content }}
          </span>
          
          <input
            v-else
            v-model="editingContent"
            @keyup.enter="saveEdit(todo.id)"
            @keyup.esc="cancelEdit"
            @blur="saveEdit(todo.id)"
            class="edit-input"
            ref="editInput"
            :aria-label="`Editing task: ${todo.content}`"
          />
          
          <div class="action-buttons">
            <button 
              v-if="editingId !== todo.id"
              class="Btn"
              @click="startEdit(todo)"
              :aria-label="`Edit task: ${todo.content}`"
            >
              <span class="btn-text">Edit</span>
              <svg class="svg" viewBox="0 0 512 512" aria-hidden="true">
                <path
                  d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                ></path>
              </svg>
            </button>
            <button 
              class="Btn"
              @click="todoStore.removeTodo(todo.id)"
              :aria-label="`Remove task: ${todo.content}`"
            >
              <span class="btn-text">Remove</span>
              <svg class="svg w-full h-full fill-current" viewBox="0 0 448 512" aria-hidden="true">
                <path
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </button>
          </div>
        </li>
      </ul>
      <h4 v-if="todoStore.todos.length === 0">Empty list.</h4>
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick } from "vue";
import { useTodoStore } from "./stores/useTodoStore";
import type { Todo } from "./stores/useTodoStore";

const todoStore = useTodoStore();
const newTodo = ref("");
const editingId = ref<string | null>(null);
const editingContent = ref("");
const editInput = ref<HTMLInputElement | null>(null);

function handleAddTodo() {
  todoStore.addTodo(newTodo.value);
  newTodo.value = "";
}

function startEdit(todo: Todo) {
  editingId.value = todo.id;
  editingContent.value = todo.content;
  nextTick(() => {
    if (editInput.value) {
      editInput.value.focus();
    }
  });
}

function saveEdit(id: string) {
  if (editingContent.value.trim()) {
    todoStore.updateTodo(id, editingContent.value);
  }
  cancelEdit();
}

function cancelEdit() {
  editingId.value = null;
  editingContent.value = "";
}
</script>

<style lang="scss">
$border: 2px solid
  rgba(
    $color: white,
    $alpha: 0.35,
  );
$size1: 6px;
$size2: 12px;
$size3: 18px;
$size4: 24px;
$size5: 48px;
$backgroundColor: #27292d;
$textColor: white;
$primaryColor: #a0a4d9;
$primaryColorShadow: #8c20d4;
$secondTextColor: #1f2023;
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $backgroundColor;
  color: $textColor;
  #__nuxt {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    h1 {
      font-weight: bold;
      font-size: 28px;
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      label {
        font-size: 14px;
        font-weight: bold;
      }
      input,
      button {
        height: $size5;
        box-shadow: none;
        outline: none;
        padding-left: $size2;
        padding-right: $size2;
        border-radius: $size1;
        font-size: 18px;
        margin-top: $size1;
        margin-bottom: $size2;
      }
      input {
        background-color: transparent;
        border: $border;
        color: inherit;
      }
    }
    button {
      cursor: pointer;
      background-color: $primaryColor;
      border: 1px solid $primaryColor;
      color: $secondTextColor;
      font-weight: bold;
      outline: none;
      border-radius: $size1;
    }
    h2 {
      font-size: 22px;
      border-bottom: $border;
      padding-bottom: $size1;
    }
    ul {
      padding: 10px;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: $border;
        padding: $size2 $size4;
        border-radius: $size1;
        margin-bottom: $size2;
        .todo-text {
          cursor: pointer;
          flex: 1;
          margin: 0 $size2;
        }
        .done {
          text-decoration: line-through;
          opacity: 0.6;
        }
        .edit-input {
          flex: 1;
          margin: 0 $size2;
          background-color: transparent;
          border: 2px solid $primaryColor;
          color: inherit;
          padding: $size1 $size2;
          border-radius: $size1;
          font-size: 16px;
          outline: none;
          &:focus {
            border-color: $primaryColorShadow;
            box-shadow: 0 0 0 2px rgba($primaryColor, 0.3);
          }
        }
        button {
          font-size: $size2;
          padding: $size1;
        }
      }
    }
    h4 {
      text-align: center;
      opacity: 0.5;
      margin: 0;
    }
  }

  .action-buttons {
    display: flex;
    gap: 10px;
  }
  .Btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100px;
    height: 40px;
    transition-duration: 0.3s;
    .btn-text {
      transition: opacity 0.3s;
    }
  }

  .svg {
    width: 13px;
    position: absolute;
    right: 0;
    margin-right: 20px;
    fill: $secondTextColor;
    transition-duration: 0.3s;
  }

  .Btn:hover {
    .btn-text {
      opacity: 0;
    }
  }

  .Btn:hover svg {
    right: 43%;
    margin: 0;
    padding: 0;
    border: none;
    transition-duration: 0.3s;
  }

  .Btn:active {
    transform: translate(3px, 3px);
    transition-duration: 0.3s;
    box-shadow: 2px 2px 0px $primaryColorShadow;
  }
  .cbx {
    position: relative;
    top: 1px;
    width: 27px;
    height: 27px;
    border: 1px solid #c8ccd4;
    border-radius: 3px;
    transition: background 0.1s ease;
    cursor: pointer;
    display: block;
  }

  .cbx:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 8px;
    width: 7px;
    height: 14px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transition: all 0.3s ease;
    transition-delay: 0.15s;
  }

  .lbl {
    margin-left: 5px;
    vertical-align: middle;
    cursor: pointer;
  }

  #cbx:checked ~ .cbx {
    border-color: transparent;
    background: $primaryColor;
    animation: jelly 0.6s ease;
  }

  #cbx:checked ~ .cbx:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }

  .cntr {
    position: relative;
  }

  @keyframes jelly {
    from {
      transform: scale(1, 1);
    }

    30% {
      transform: scale(1.25, 0.75);
    }

    40% {
      transform: scale(0.75, 1.25);
    }

    50% {
      transform: scale(1.15, 0.85);
    }

    65% {
      transform: scale(0.95, 1.05);
    }

    75% {
      transform: scale(1.05, 0.95);
    }

    to {
      transform: scale(1, 1);
    }
  }

  .hidden-xs-up {
    display: none !important;
  }
}
</style>
