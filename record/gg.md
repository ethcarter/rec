## **Question 1: Answer all Questions (1*5=5)**

### **a. What do you mean by Instruction in Computer Organisation?**
> An instruction is a basic command given to a computer processor to perform a specific operation. It consists of an opcode (operation code) that specifies the operation to be performed and operands that indicate the data or memory locations to be used.

### **b. Differentiate between ROM and RAM.**

| ROM | RAM |
|-----|-----|
| ROM stands for Read-Only Memory. | RAM stands for Random Access Memory. |
| It's a non-volatile memory that retains data permanently even when power is off | It's a volatile memory that loses data when power is turned off  |
| It is used to store firmware. | It is used for temporary storage of programs and data during processing. 

> ROM (Read-Only Memory) is non-volatile memory that retains data permanently even when power is off and is used to store firmware. RAM (Random Access Memory) is volatile memory that loses data when power is turned off and is used for temporary storage of programs and data during processing.

### **c. What is Virtual memory?**

> Virtual memory is a memory management technique that creates an illusion of large main memory by using a portion of secondary storage (hard disk) as an extension of RAM. It allows execution of programs larger than physical memory by swapping data between RAM and disk.

### **d. What is microprocessor and microcontroller?**

> A microprocessor is a general-purpose CPU that requires external components like memory and I/O devices to function as a complete system. A microcontroller is a compact integrated circuit containing a processor, memory, and I/O peripherals on a single chip, designed for specific control applications.

### **e. What is Storage Device? Give two examples.**

> A storage device is a hardware component used to store, retrieve, and preserve digital data permanently or temporarily. Examples: Hard Disk Drive (HDD) and Solid State Drive (SSD).

---

## **Question 2: Answer any three of the following (3*5=15)**

### **a. What do you mean by Computer Bus? Briefly explain its types with diagram.**

A computer bus is a communication pathway that transfers data between different components of a computer system. It consists of multiple parallel wires or traces on the motherboard.

**Types of Computer Bus:**

- **Data Bus:** Carries actual data between processor, memory, and I/O devices. It is bidirectional and its width (8, 16, 32, 64 bits) determines data transfer capacity.

- **Address Bus:** Carries memory addresses from processor to memory and I/O devices. It is unidirectional and its width determines maximum addressable memory.

- **Control Bus:** Carries control signals like read, write, interrupt, and clock signals to coordinate operations. It is bidirectional and manages timing and control of operations.

**Diagram:**
```
CPU ←→ [Data Bus (Bidirectional)] ←→ Memory/I/O
CPU  → [Address Bus (Unidirectional)] → Memory/I/O
CPU ←→ [Control Bus (Bidirectional)] ←→ Memory/I/O
```

---

### **b. Define the term Instruction Cycle? Briefly explain its various stages with diagram.**

The instruction cycle is the basic operational process of a CPU where it fetches, decodes, and executes instructions sequentially from memory. It represents the complete sequence of steps required to process a single instruction.

**Stages of Instruction Cycle:**

- **Fetch:** CPU fetches the instruction from memory location pointed by Program Counter (PC) and loads it into Instruction Register (IR). PC is incremented to point to next instruction.

- **Decode:** The control unit decodes the instruction in IR to determine the operation to be performed and identifies the operands required.

- **Execute:** ALU performs the actual operation specified by the instruction using the operands. Results are stored in registers or memory.

- **Store:** Results of execution are written back to memory or registers as specified by the instruction.

**Diagram:**
```
Fetch → Decode → Execute → Store
  ↑                          ↓
  ←←←←←←←←←←←←←←←←←←←←←←←←←←←←
     (Repeat for next instruction)
```

---

### **c. What is Instruction Set? State and explain types of instruction.**

An instruction set is the complete collection of instructions that a processor can understand and execute. It defines the operations available to programmers and forms the interface between hardware and software.

**Types of Instructions:**

- **Data Transfer Instructions:** Move data between registers, memory, and I/O devices (e.g., LOAD, STORE, MOVE, PUSH, POP).

- **Arithmetic Instructions:** Perform mathematical operations like addition, subtraction, multiplication, and division (e.g., ADD, SUB, MUL, DIV, INCREMENT, DECREMENT).

- **Logical Instructions:** Perform bitwise operations like AND, OR, NOT, XOR, shift, and rotate operations on data.

- **Control Transfer Instructions:** Alter the normal sequence of program execution through jumps, branches, calls, and returns (e.g., JMP, CALL, RET, conditional branches).

- **I/O Instructions:** Handle input/output operations between CPU and peripheral devices (e.g., IN, OUT).

---

### **d. Differentiate between RISC and CISC.**

**RISC (Reduced Instruction Set Computer):**
- Uses simple, fixed-length instructions that execute in single clock cycle
- Large number of general-purpose registers (typically 32 or more)
- Hardwired control unit with simple decoding logic
- Load/store architecture where only load and store instructions access memory
- Examples: ARM, MIPS, SPARC processors

**CISC (Complex Instruction Set Computer):**
- Uses complex, variable-length instructions that may take multiple clock cycles
- Fewer registers with specialized purposes
- Microprogrammed control unit with complex decoding
- Memory can be accessed by most instructions directly
- Examples: Intel x86, Motorola 68000 processors

RISC emphasizes software complexity with simpler hardware, while CISC emphasizes hardware complexity to reduce software burden.

---

### **e. What is CPU? Explain Various Components of a CPU.**

The CPU (Central Processing Unit) is the brain of the computer that executes instructions and performs all processing operations. It interprets and executes program instructions, performs calculations, and coordinates activities of other hardware components.

**Components of CPU:**

- **Arithmetic Logic Unit (ALU):** Performs all arithmetic operations (addition, subtraction, multiplication, division) and logical operations (AND, OR, NOT, XOR, comparisons) on data.

- **Control Unit (CU):** Directs and coordinates all computer operations by fetching instructions, decoding them, and generating control signals to execute them. It manages data flow between CPU and other components.

- **Registers:** High-speed temporary storage locations within CPU that hold data, addresses, and instructions during processing. Key registers include Accumulator, Program Counter, Instruction Register, and general-purpose registers.

- **Cache Memory:** Small, fast memory located close to CPU that stores frequently accessed data and instructions to reduce memory access time and improve performance.

The CPU communicates with other components through system buses and operates under control of clock signals that synchronize operations.