# DSA - IA-1 Solutions

## 1 Mark Questions

### 1. Explain classification of data structure

**Data structures are classified into:**

- **Primitive Data Structures:**
  - Basic data types provided by programming languages
  - Examples: int, float, char, boolean

- **Non-Primitive Data Structures:**
  - **Linear Data Structures:**
    - Elements arranged in sequential manner
    - Examples: Arrays, Linked Lists, Stacks, Queues
  - **Non-Linear Data Structures:**
    - Elements not arranged sequentially
    - Examples: Trees, Graphs

### 2. What are the operations of data structure? Explain in brief

**Basic Operations:**

- **Insertion:** Adding new element to data structure
- **Deletion:** Removing existing element from data structure
- **Traversal:** Accessing each element exactly once
- **Searching:** Finding location of element with given value
- **Sorting:** Arranging elements in ascending/descending order
- **Merging:** Combining two similar data structures

### 3. Define stack. Write push and pop algorithms

**Stack:** Linear data structure following LIFO (Last In First Out) principle

**Push Algorithm:**
```
1. Check if stack is full (top == MAX-1)
2. If full, print "Stack Overflow"
3. Else:
   - Increment top (top = top + 1)
   - Insert element (stack[top] = element)
```

**Pop Algorithm:**
```
1. Check if stack is empty (top == -1)
2. If empty, print "Stack Underflow"
3. Else:
   - Store top element (element = stack[top])
   - Decrement top (top = top - 1)
   - Return element
```

### 4. Infix to postfix conversion with one example

**Rules:**
- Scan infix expression left to right
- If operand, add to output
- If operator, pop operators with higher/equal precedence, then push current operator
- If '(', push to stack
- If ')', pop until '(' is found

**Example:** `A + B * C`

| Symbol | Stack | Output |
|--------|-------|---------|
| A      | -     | A       |
| +      | +     | A       |
| B      | +     | AB      |
| *      | +*    | AB      |
| C      | +*    | ABC     |
| End    | -     | ABC*+   |

**Result:** `ABC*+`

### 5. Write insertion and deletion algorithm for an item in queue

**Insertion (Enqueue) Algorithm:**
```
1. Check if queue is full (rear == MAX-1)
2. If full, print "Queue Overflow"
3. Else:
   - If queue is empty, set front = 0
   - Increment rear (rear = rear + 1)
   - Insert element (queue[rear] = element)
```

**Deletion (Dequeue) Algorithm:**
```
1. Check if queue is empty (front == -1 or front > rear)
2. If empty, print "Queue Underflow"
3. Else:
   - Store front element (element = queue[front])
   - Increment front (front = front + 1)
   - Return element
```

### 6. Explain linked list representation and operation of stack

**Representation:**
- Each node contains data and pointer to next node
- Top pointer points to topmost node
- Stack grows downward

**Operations:**

**Push:**
```
1. Create new node
2. Set newNode.data = element
3. Set newNode.next = top
4. Set top = newNode
```

**Pop:**
```
1. Check if top == NULL (empty stack)
2. If empty, return error
3. Else:
   - Store top.data
   - Set temp = top
   - Set top = top.next
   - Delete temp
   - Return stored data
```

### 7. Explain linked list representation and operation of queue

**Representation:**
- Front pointer points to first node
- Rear pointer points to last node
- Nodes connected through next pointers

**Operations:**

**Enqueue:**
```
1. Create new node
2. Set newNode.data = element
3. Set newNode.next = NULL
4. If queue empty, set front = rear = newNode
5. Else, set rear.next = newNode, rear = newNode
```

**Dequeue:**
```
1. Check if front == NULL (empty queue)
2. If empty, return error
3. Else:
   - Store front.data
   - Set temp = front
   - Set front = front.next
   - If front == NULL, set rear = NULL
   - Delete temp
   - Return stored data
```

### 8. Write algorithm to insert/delete an element at the beginning of linked list

**Insertion at Beginning:**
```
1. Create new node
2. Set newNode.data = element
3. Set newNode.next = head
4. Set head = newNode
```

**Deletion from Beginning:**
```
1. Check if head == NULL (empty list)
2. If empty, return error
3. Else:
   - Set temp = head
   - Set head = head.next
   - Delete temp
```

### 9. Write algorithm to insert/delete an element at the end of the linked list

**Insertion at End:**
```
1. Create new node
2. Set newNode.data = element
3. Set newNode.next = NULL
4. If head == NULL, set head = newNode
5. Else:
   - Traverse to last node (temp.next == NULL)
   - Set temp.next = newNode
```

**Deletion from End:**
```
1. Check if head == NULL (empty list)
2. If empty, return error
3. If only one node, delete head and set head = NULL
4. Else:
   - Traverse to second last node
   - Delete last node
   - Set secondLast.next = NULL
```

## 2 Mark Questions

### 1. Define Circular Linked List
- **Definition:** Linked list where last node points back to first node instead of NULL
- **Characteristics:**
  - Forms a circle/loop structure
  - No NULL pointers except for empty list
  - Can traverse entire list starting from any node
  - Memory efficient for applications requiring cyclic access

### 2. Define Doubly Linked List
- **Definition:** Linked list where each node has two pointers - one to next node and one to previous node
- **Structure:** `[prev|data|next]`
- **Advantages:**
  - Bidirectional traversal possible
  - Easier insertion/deletion operations
  - Can traverse backward from any node

### 3. Define Circular Queue
- **Definition:** Queue implementation where rear position wraps around to front when end of array is reached
- **Characteristics:**
  - Uses modular arithmetic: `(rear + 1) % MAX`
  - Efficient memory utilization
  - No memory wastage like simple queue
  - Front and rear pointers move in circular fashion

### 4. Define Dequeue (Double Ended Queue)
- **Definition:** Linear data structure allowing insertion and deletion at both ends
- **Types:**
  - **Input Restricted:** Insertion at one end, deletion at both ends
  - **Output Restricted:** Insertion at both ends, deletion at one end
- **Operations:** Insert/delete at front and rear

### 5. Define Algorithm
- **Definition:** Step-by-step procedure to solve a problem or perform a task
- **Characteristics:**
  - **Finiteness:** Must terminate after finite steps
  - **Definiteness:** Each step must be clearly defined
  - **Input:** Zero or more inputs
  - **Output:** One or more outputs
  - **Effectiveness:** Steps must be basic and feasible

## 5 Mark Questions

### 1. Differentiate between Stack and Queue

| **Aspect** | **Stack** | **Queue** |
|------------|-----------|-----------|
| **Principle** | LIFO (Last In First Out) | FIFO (First In First Out) |
| **Insertion** | At top only (Push) | At rear only (Enqueue) |
| **Deletion** | From top only (Pop) | From front only (Dequeue) |
| **Pointers** | One pointer (top) | Two pointers (front, rear) |
| **Applications** | Function calls, expression evaluation, undo operations | Process scheduling, breadth-first search, print queue |
| **Memory Access** | Restricted to one end | Restricted to both ends differently |
| **Implementation** | Array or linked list | Array, linked list, or circular array |

### 2. Differentiate between Primitive and Non-Primitive Data Structures

| **Aspect** | **Primitive** | **Non-Primitive** |
|------------|---------------|-------------------|
| **Definition** | Basic data types provided by language | Complex data types derived from primitive types |
| **Examples** | int, float, char, boolean, double | Arrays, structures, unions, pointers, linked lists |
| **Memory** | Fixed size, directly stored | Variable size, may store references |
| **Operations** | Basic arithmetic and logical operations | Complex operations like insertion, deletion, traversal |
| **Declaration** | Simple declaration | Requires definition of structure |
| **Storage** | Stored directly in memory location | May store address of actual data |
| **Manipulation** | Direct manipulation possible | Requires specific algorithms for manipulation |

### 3. Differentiate between Linear and Non-Linear Data Structures

| **Aspect** | **Linear** | **Non-Linear** |
|------------|------------|----------------|
| **Definition** | Elements arranged in sequential/linear order | Elements not arranged in sequential manner |
| **Relationship** | Each element connects to exactly two neighbors (except first/last) | Each element can connect to multiple elements |
| **Examples** | Arrays, linked lists, stacks, queues | Trees, graphs, heaps |
| **Traversal** | Single way to traverse (sequential) | Multiple ways to traverse |
| **Memory Utilization** | Memory may not be utilized efficiently | Better memory utilization |
| **Implementation** | Easier to implement | More complex implementation |
| **Time Complexity** | Generally linear for basic operations | Varies based on structure and operation |
| **Applications** | Simple data organization, temporary storage | Hierarchical data, network representation, decision trees |