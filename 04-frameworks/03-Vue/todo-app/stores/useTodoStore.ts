import { defineStore } from 'pinia';

export interface Todo {
  id: string;
  content: string;
  done: boolean;
}

const STORAGE_KEY = 'todo-app-tasks';

// Cargar datos del localStorage
const loadTodos = (): Todo[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Guardar datos en localStorage
const saveTodos = (todos: Todo[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const useTodoStore = defineStore('todo', {
  state: () => {
    const savedTodos = loadTodos();
    return {
      todos: savedTodos.length > 0 ? savedTodos : [
        {
          id: '1',
          done: true,
          content: 'Write a blog post',
        },
        {
          id: '2',
          done: false,
          content: 'Listen a podcast',
        },
      ] as Todo[],
    };
  },

  getters: {
    completedTodos: (state) => state.todos.filter(todo => todo.done),
    pendingTodos: (state) => state.todos.filter(todo => !todo.done),
    totalTodos: (state) => state.todos.length,
  },

  actions: {
    addTodo(content: string) {
      if (!content.trim()) return;
      
      this.todos.push({
        id: Date.now().toString(),
        content: content.trim(),
        done: false,
      });
      saveTodos(this.todos);
    },

    removeTodo(id: string) {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
        saveTodos(this.todos);
      }
    },

    toggleTodo(id: string) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
        saveTodos(this.todos);
      }
    },

    updateTodo(id: string, content: string) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo && content.trim()) {
        todo.content = content.trim();
        saveTodos(this.todos);
      }
    },
  },
});
