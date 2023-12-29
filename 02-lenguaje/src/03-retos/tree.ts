console.log("************** CHALLENGES - TRACES *********************");
// Árbol
// ¿Cómo generarías con TypeScript un tipado para estructuras en forma de árbol?

// Un árbol es una estructura que parte de un nodo raiz, a partir del cual salen más nodos. Cada nodo en un árbol puede tener hijos (más nodos) o no tenerlos (convirtiendose en un nodo final o una "hoja").

interface TreeNode<T> {
    value: T;
    children?: TreeNode<T>[];
  }
  
  const tree: TreeNode<number> = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          { value: 5 },
          { value: 6 },
        ],
      },
      {
        value: 3,
        children: [
          { value: 7 },
          { value: 8 },
        ],
      },
      {
        value: 4,
      },
    ],
  };
  
  function printTree(node: TreeNode<number>, depth: number = 0) {
    console.log("  ".repeat(depth) + node.value);
    if (node.children) {
      for (const child of node.children) {
        printTree(child, depth + 1);
      }
    }
  }
  
  printTree(tree);
  