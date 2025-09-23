## 1-Mark Questions

### 1. Classification of Data Structures

Data structures can be classified as follows:
- **Based on Primitiveness**:
  - Primitive Data Structures (int, char, float, etc.)
  - Non-primitive Data Structures (arrays, lists, files, etc.)
- **Based on Memory Organization**:
  - Linear Data Structures (arrays, linked lists, stacks, queues)
  - Non-linear Data Structures (trees, graphs)
- **Based on Memory Allocation**:
  - Static Data Structures (fixed memory allocation at compile time)
  - Dynamic Data Structures (dynamic memory allocation at runtime)

### 2. Operations of Data Structure

Common operations performed on data structures include:
- **Traversal**: Accessing each element exactly once
- **Insertion**: Adding a new element to the data structure
- **Deletion**: Removing an existing element
- **Searching**: Finding the location of a specific element
- **Sorting**: Arranging elements in a specific order
- **Merging**: Combining two data structures into one

### 3. Stack Definition, Push and Pop Algorithms

**Stack**: A linear data structure that follows the Last-In-First-Out (LIFO) principle.

**Push Algorithm**:
```
Algorithm Push(stack, max_size, top, item)
Begin
   If top = max_size-1 Then
      Print "Stack Overflow"
      Return
   End If
   top ← top + 1
   stack[top] ← item
End
```

**Pop Algorithm**:
```
Algorithm Pop(stack, top)
Begin
   If top = -1 Then
      Print "Stack Underflow"
      Return null
   End If
   item ← stack[top]
   top ← top - 1
   Return item
End
```

### 4. Infix to Prefix Conversion

Steps to convert infix to prefix:
1. Reverse the infix expression
2. Replace '(' with ')' and vice versa
3. Convert the resulting expression to postfix
4. Reverse the postfix expression to get prefix

**Example**:
- Infix expression: `A + B * C`
- Reverse: `C * B + A`
- Convert to postfix: `C B * A +`
- Reverse again: `+ A * B C`
- Prefix: `+ A * B C`

### 5. Queue Insertion and Deletion Algorithms

**Insertion (Enqueue) Algorithm**:
```
Algorithm Enqueue(queue, max_size, rear, front, item)
Begin
   If rear = max_size-1 Then
      Print "Queue Overflow"
      Return
   End If
   If front = -1 Then
      front ← 0
   End If
   rear ← rear + 1
   queue[rear] ← item
End
```

**Deletion (Dequeue) Algorithm**:
```
Algorithm Dequeue(queue, rear, front)
Begin
   If front = -1 OR front > rear Then
      Print "Queue Underflow"
      Return null
   End If
   item ← queue[front]
   front ← front + 1
   If front > rear Then
      front ← -1
      rear ← -1
   End If
   Return item
End
```

### 6. Linked List Representation and Operation of Stack

**Linked List Representation of Stack**:
- Each node contains data and a pointer to the next node
- Top pointer points to the topmost node of the stack
- NULL top indicates empty stack

**Operations**:
- **Push**: Create a new node, set its next to current top, update top to new node
  ```
  Algorithm Push(top, data)
  Begin
     newNode ← createNode(data)
     newNode.next ← top
     top ← newNode
  End
  ```
- **Pop**: Store top node data, move top to next node, delete previous top, return data
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

### 7. Linked List Representation and Operation of Queue

**Linked List Representation of Queue**:
- Each node contains data and a pointer to the next node
- Front pointer points to the front node, rear to the last node
- NULL front indicates empty queue

**Operations**:
- **Enqueue**: Create new node, if queue empty set front to new node, else set rear.next to new node, update rear
  ```
  Algorithm Enqueue(front, rear, data)
  Begin
     newNode ← createNode(data)
     newNode.next ← NULL
     If front = NULL Then
        front ← newNode
     Else
        rear.next ← newNode
     End If
     rear ← newNode
  End
  ```
- **Dequeue**: Store front node data, move front to next node, return data
  ```
  Algorithm Dequeue(front, rear)
  Begin
     If front = NULL Then
        Print "Queue Underflow"
        Return null
     End If
     temp ← front
     data ← temp.data
     front ← front.next
     If front = NULL Then
        rear ← NULL
     End If
     Delete temp
     Return data
  End
  ```

### 8. Algorithm to Insert/Delete an Element at the Beginning of Linked List

**Insertion at Beginning**:
```
Algorithm InsertAtBeginning(head, data)
Begin
   newNode ← createNode(data)
   newNode.next ← head
   head ← newNode
End
```

**Deletion from Beginning**:
```
Algorithm DeleteFromBeginning(head)
Begin
   If head = NULL Then
      Print "List is empty"
      Return
   End If
   temp ← head
   head ← head.next
   Delete temp
End
```

### 9. Algorithm to Insert/Delete an Element at the End of the Linked List

**Insertion at End**:
```
Algorithm InsertAtEnd(head, data)
Begin
   newNode ← createNode(data)
   newNode.next ← NULL
   If head = NULL Then
      head ← newNode
      Return
   End If
   temp ← head
   While temp.next ≠ NULL Do
      temp ← temp.next
   End While
   temp.next ← newNode
End
```

**Deletion from End**:
```
Algorithm DeleteFromEnd(head)
Begin
   If head = NULL Then
      Print "List is empty"
      Return
   End If
   If head.next = NULL Then
      Delete head
      head ← NULL
      Return
   End If
   temp ← head
   While temp.next.next ≠ NULL Do
      temp ← temp.next
   End While
   Delete temp.next
   temp.next ← NULL
End
```

## 2-Mark Questions

### 1. Definitions

#### a. Circular Linked List
- A linked list where the last node points back to the first node
- Forms a circle with no NULL links
- Advantage: Any node can be a starting point, and the list can be traversed from any node

#### b. Doubly Linked List
- Each node contains data and two pointers: one to the next node and one to the previous node
- Allows traversal in both directions (forward and backward)
- Requires more memory but simplifies certain operations like deletion and insertion before a node

#### c. Circular Queue
- A linear data structure with the front and rear connected to form a circle
- When rear reaches the end, next element is inserted at the beginning if space available
- Efficient use of memory by reusing the empty spaces
- Implementation using modulo operator: `rear = (rear + 1) % size`

#### d. Dequeue (Double-Ended Queue)
- A queue that allows insertion and deletion from both ends (front and rear)
- Operations: insertFront(), insertRear(), deleteFront(), deleteRear()
- Can function as both stack and queue
- Types: Input-restricted (insertion only at one end) and Output-restricted (deletion only at one end)

#### e. Algorithm
- A step-by-step procedure or formula for solving a problem
- Consists of a finite sequence of well-defined instructions
- Characteristics: Input, Output, Definiteness, Finiteness, Effectiveness
- Analysis parameters: Time complexity, Space complexity

### 2. Differentiate between Stack and Queue

| Stack | Queue |
|-------|-------|
| Follows Last-In-First-Out (LIFO) principle | Follows First-In-First-Out (FIFO) principle |
| Insertion and deletion occur at one end (top) | Insertion at rear end, deletion at front end |
| Operations: Push and Pop | Operations: Enqueue and Dequeue |
| Used for function calls, undo operations, expression evaluation | Used for CPU scheduling, disk scheduling, data buffers |
| Single pointer (top) needed for implementation | Two pointers (front and rear) needed for implementation |
| More efficient for memory management | May lead to memory wastage in array implementation |

### 3. Differentiate between Primitive and Non-Primitive Data Structures

| Primitive Data Structures | Non-Primitive Data Structures |
|---------------------------|-------------------------------|
| Basic data types built into a language | Derived from primitive data types |
| Examples: int, float, char, boolean | Examples: arrays, lists, stacks, queues, trees, graphs |
| Occupy fixed amount of memory | May occupy variable amount of memory |
| Store single values | Store collection of values |
| Operations are defined by the programming language | Operations are defined by the programmer |
| Cannot be broken down into simpler types | Can be broken down into primitive types |
| Directly operated upon by machine instructions | Need to be processed to machine-understandable instructions |
| No methods/functions associated with them | Have associated methods/functions to manipulate data |

### 4. Differentiate between Linear and Non-Linear Data Structures

| Linear Data Structures | Non-Linear Data Structures |
|------------------------|----------------------------|
| Elements arranged in sequential order | Elements arranged in hierarchical order |
| Each element has a unique predecessor and successor (except first and last) | Elements can have multiple predecessors and successors |
| Elements can be traversed in a single run | Complete traversal may require multiple runs |
| Examples: Arrays, Linked Lists, Stacks, Queues | Examples: Trees, Graphs, Heaps |
| Memory utilization is inefficient in some cases | Better memory utilization |
| Simpler to implement | More complex implementation |
| Used when data needs to be accessed sequentially | Used when data has hierarchical relationships |
| Time complexity for search operations: O(n) | Time complexity can be reduced to O(log n) in some cases |
```