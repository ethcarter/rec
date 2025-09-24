# DSA - Internal

---

### **5 MARK QUESTIONS**

### **1. Explain classification of data structure.**

A data structure is a way of organizing and storing data in a computer so that it can be accessed and used efficiently. It refers to the logical or mathematical representation of data, as well as the implementation in a computer program.

Data structures are broadly classified into two main categories based on their nature and the arrangement of elements:

**A. Primitive Data Structures:**
These are the fundamental data structures directly operated upon by machine-level instructions. They are the basic building blocks.

- **Examples:**
    - **Integer:** Represents whole numbers (e.g., `int a = 10;`).
    - **Float:** Represents floating-point numbers or decimals (e.g., `float b = 10.5;`).
    - **Character:** Represents a single alphabet or symbol (e.g., `char c = 'A';`).
    - **Boolean:** Represents a logical value, either `true` or `false`.
    

**B. Non-Primitive Data Structures:**
These are more complex data structures derived from primitive data structures. They are designed for organizing and managing large sets of data efficiently. 

They are further classified based on the arrangement of elements:

1. **Linear Data Structures:** In these structures, data elements are arranged in a sequential or linear order, where each element is connected to its previous and next element. The arrangement is one-dimensional.
    - **Examples:**
        - **Arrays:** A collection of elements of the same data type, stored in contiguous memory locations. Elements are accessed using an index.
        - **Linked Lists:** A collection of elements called "nodes," where each node contains data and a pointer/reference to the next node in the sequence. Memory locations are not necessarily contiguous.
        - **Stacks:** A linear structure that follows the **LIFO (Last-In, First-Out)** principle. Elements can only be added or removed from one end, called the "top."
        - **Queues:** A linear structure that follows the **FIFO (First-In, First-Out)** principle. Elements are added at the "rear" and removed from the "front."
2. **Non-Linear Data Structures:** In these structures, data elements are not arranged in a sequential manner. An element can be connected to more than one element, forming a hierarchical or multi-level structure.
    - **Examples:**
        - **Trees:** A hierarchical data structure consisting of nodes connected by edges. The topmost node is called the "root," and each node can have multiple children.
        - **Graphs:** A collection of nodes (or vertices) connected by edges. Unlike trees, graphs have no defined root and can form cycles (a node can be connected back to itself via a path).

### **Based on Memory Allocation**

- **Static Data Structures:** Their size and memory allocation are fixed at compile time. They cannot be easily resized during program execution.
    - *Example:* **Array.** You must declare its size beforehand.
- **Dynamic Data Structures:** Their size is not fixed and can change during program execution. They utilize memory more efficiently as they grow and shrink on demand.
    - *Examples:* **Linked Lists, Trees, Graphs.** These are implemented using pointers.

### **2. What are the operations of data structure, explain in brief.**

Common operations performed on data structures include:

- **Traversal:** Accessing each element of the data structure exactly once for processing.
- **Insertion:** Adding a new element to the data structure at
    - the beginning
    - the end
    - a desired location
- **Deletion:** Removing an existing element from the data structure.
- **Searching:** Finding the location of a given element within the data structure.
    - 2 ways - Linear and Binary
- **Sorting:** Arranging the elements of the data structure in a specific order (ascending/descending).
    - Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort
- **Merging:** Combining two similar data structures into a single one.
- **Copying:** Creating a duplicate of the data structure.

### **3. Define stack and write push and pop algorithm.**

**Definition:** A stack is a linear data structure that follows the **LIFO (Last-In, First-Out)** principle. The element inserted last is the first one to be removed. Insertion and deletion occur only at one end, called the **top**.

**Push Algorithm (to insert an item):**

1. **Check for Overflow**:
    
    If the stack is full (`top = max_size - 1`), print an overflow error and exit.
    
2. **Increment Top Pointer**:
    
    Increase `top` by 1.
    
3. **Insert Element**:
    
    Place the new element at `stack[top]`.
    

```
procedure push(stack, element)
    if top = max_size - 1 then
        print "Stack Overflow"
        return
    else
        top ← top + 1
        stack[top] ← element
    end if
end procedure
```

**Pop Algorithm (to delete an item):**

1. **Check for Underflow**:
    
    If the stack is empty (`top = -1`), print an underflow error and exit.
    
2. **Retrieve Top Element**:
    
    Store `stack[top]` in a variable (optional, if returning the value).
    
3. **Decrement Top Pointer**:
    
    Decrease `top` by 1.
    

```
procedure pop(stack)
    if top = -1 then
        print "Stack Underflow"
        return null
    else
        element ← stack[top]
        top ← top - 1
        return element
    end if
end procedure
```

### **4. Infix to Postfix conversion one example.**

Let's convert the infix expression: `A + B * (C - D) / E` to postfix.

**Example Conversion**:

Infix: `A + B * (C - D) / E`

| Symbol | Stack | Postfix Output | Explanation |
| --- | --- | --- | --- |
| A | empty | A | Operand, add to output |
| + | + | A | Operator, push to stack |
| B | + | A B | Operand, add to output |
| * | +, * | A B | Higher precedence than +, push to stack |
| ( | +, *, ( | A B | Left parenthesis, push to stack |
| C | +, *, ( | A B C | Operand, add to output |
| - | +, *, (, - | A B C | Operator inside parenthesis, push to stack |
| D | +, *, (, - | A B C D | Operand, add to output |
| ) | +, * | A B C D - | Right parenthesis, pop until matching ( |
| / | +, / | A B C D - * | Pop * (same precedence), push / |
| E | +, / | A B C D - * E | Operand, add to output |
| End | empty | A B C D - * E / + | Pop remaining operators |

Final Postfix Expression: `A B C D - * E / +`

### **5. Write insertion and deletion algorithm of an item in Queue.**

**Definition:** A queue is a linear data structure that follows the **FIFO (First-In, First-Out)** principle.

1. Check if the queue is full (i.e., `rear == capacity - 1`).
2. If full, display an overflow error and exit.
3. If not full:
    - Increment `rear` by 1.
    - Insert the new item at the `rear` position.
4. If the queue was initially empty (`front == -1`), set `front = 0`.

```
Procedure enqueue(queue, item)
  if rear == capacity - 1 then
    print "Queue Overflow"
    return
  else
    rear ← rear + 1
    queue[rear] ← item
    if front == -1 then
      front ← 0
    end if
  end if
End Procedure

```

**Deletion Algorithm (Dequeue):**

1. Check if the queue is empty (i.e., `front == -1` or `front > rear`).
2. If empty, display an underflow error and exit.
3. If not empty:
    - Remove the item at the `front` position.
    - Increment `front` by 1.
    - If the queue becomes empty after deletion (`front > rear`), reset `front` and `rear` to `1`.

```

Procedure dequeue(queue)
  if front == -1 or front > rear then
    print "Queue Underflow"
    return null
  else
    item ← queue[front]
    front ← front + 1
    if front > rear then
      front ← -1
      rear ← -1
    end if
    return item
  end if
End Procedure
```

### **6.** Explain Linked List Representation and Operation of Stack

In a linked list representation of a stack, each element is a node containing:

- `data`: The value of the element.
- `next`: A pointer to the next node in the sequence.

The `top` of the stack is maintained as a pointer to the first node (head) of the linked list.

**Operations:**

- **Push (Insert):**
    1. Create a new node.
    2. Set the `data` of the new node to the new item.
    3. Set the `next` pointer of the new node to point to the current `top` node.
    4. Update the `top` pointer to point to this new node.
        
        ```
        Algorithm Push(top, data)
        Begin
         newNode ← createNode(data)
         newNode.next ← top
         top ← newNode
        End
        ```
        
- **Pop (Delete):**
    1. Check if `top == NULL` (stack is empty). If yes, indicate underflow.
    2. If not, store the current `top` node in a temporary pointer.
    3. Update the `top` pointer to `top->next`.
    4. `data` of the temporary node is the popped element.
    5. Free the memory of the temporary node.
        
        ```
        Algorithm Pop(top)
        Begin
         If top = NULL Then
         Print "Stack Underflow"
         Return null
         End If
         temp ← top
         data ← temp.data
         top ← top.next
         Delete temp
         Return data
        End
        ```
        

**Advantage:** The stack can grow and shrink dynamically without the risk of overflow (unless system memory is exhausted).

---

### **2 MARK QUESTIONS**

### **1. Circular Linked List**

A circular linked list is a variation of a linked list where the last node points back to the first node, forming a circle. This structure has no end, and any node can be a starting point.

**Example Structure**:

```c
class Node {
    int data;
    Node next;
}
```

### **2. Doubly Linked List**

A doubly linked list is a list in which each node contains three parts:

1. A pointer to the previous node (`prev`).
2. The `data`.
3. A pointer to the next node (`next`).

This allows traversal in both forward and backward directions, but requires more memory per node.

**Example Structure**:

```hcl
class Node {
    int data;
    Node next;
    Node prev;
}
```

### **3. Circular Queue**

A circular queue is a linear data structure that follows the FIFO principle, and the last position is connected to the first position to make a circle. 

This allows efficient utilization of memory by reusing the empty spaces created after dequeue operations.

### **4. Dequeue (Double Ended Queue)**

A dequeue is a generalized queue that allows insertion and deletion of elements from both the front and the rear ends. It does not follow the strict FIFO rule. 

### **5. Differentiate between stack and queue**

| Characteristic | Stack | Queue |
| --- | --- | --- |
| **Principle** | LIFO (Last In First Out) | FIFO (First In First Out) |
| **Insertion** | At one end (top) | At one end (rear) |
| **Deletion** | From the same end as insertion (top) | From the opposite end of insertion (front) |
| **Operations** | Push (insertion), Pop (deletion) | Enqueue (insertion), Dequeue (deletion) |
| **Implementation** | Using arrays or linked lists | Using arrays, linked lists, or circular arrays |
| **Access** | Only the top element is accessible | Only the front element is accessible for removal |
| **Applications** | Function calls, expression evaluation, backtracking | Task scheduling, printer spooling, breadth-first search |

### 6. Primitive vs. Non-Primitive Data Structures

| Aspect | Primitive Data Structures | Non-Primitive Data Structures |
| --- | --- | --- |
| **Definition** | Basic data types directly supported by programming languages | Derived data structures created using primitive data types |
| **Examples** | `int`, `float`, `char`, `double`, `boolean`, `pointer` | Arrays, Linked Lists, Stacks, Queues, Trees, Graphs |
| **Memory Allocation** | Allocated on stack (usually) | Allocated on heap (usually) |
| **Nature** | Pre-defined and built-in | User-defined and programmatically created |
| **Operations** | Basic operations (arithmetic, comparison) | Complex operations (insertion, deletion, traversal) |
| **Storage** | Store single values | Store collections of data |
| **Implementation** | Directly implemented by compiler | Implemented using primitive data structures |

### 7. Linear vs. Non-Linear Data Structures

| Aspect | Linear Data Structures | Non-Linear Data Structures |
| --- | --- | --- |
| **Definition** | Elements arranged in sequential order | Elements arranged in hierarchical or interconnected manner |
| **Traversal** | Single linear path for traversal | Multiple paths possible for traversal |
| **Memory Efficiency** | Generally more memory efficient | May require more memory due to pointers/references |
| **Implementation Complexity** | Simpler to implement | More complex to implement |
| **Access Time** | Predictable access time | Variable access time |
| **Examples** | Arrays, Linked Lists, Stacks, Queues | Trees, Graphs, Heaps, Hash Tables |
| **Use Cases** | Simple data storage, sequential processing | Complex relationships, hierarchical data |
| **Element Relationship** | Each element has exactly one predecessor and one successor (except first and last) | Elements can have multiple predecessors and successors |

### **8. Define algorithm**

An algorithm is a **finite, step-by-step, unambiguous set of instructions** designed to solve a specific problem or perform a computation. It must have the following properties: Input, Output, Definiteness, Finiteness, and Effectiveness.