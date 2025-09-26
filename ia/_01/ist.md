# IST – Internal

## Short Type Questions (1 mark each)

### a. Differentiate between General Purpose Computing and Embedded System

| General Purpose Computing       | Embedded System                          |
|----------------------------------|------------------------------------------|
| Designed for multiple tasks and applications | Designed for specific dedicated functions |
| User can install/run various software | Pre-programmed for specific tasks       |
| Examples: PCs, laptops, servers  | Examples: Microwave oven, washing machine |

### b. What do you mean by memory shadowing in Embedded System?

Memory shadowing is a technique where the content stored in slow ROM is copied to faster RAM during system startup to improve execution speed.

### c. Differentiate between Soft Real Time and Hard Real Time Embedded System

| Soft Real Time System           | Hard Real Time System                   |
|----------------------------------|------------------------------------------|
| Missing deadlines is acceptable but undesirable | Strict deadlines                        |
| Example: Streaming media         | Example: Airbag control system          |
| Performance degrades after deadline | System fails after deadline            |

### d. What is Microprocessor and Microcontroller?

- **Microprocessor:** A processing unit that is integrated into a single chip, containing the processing logic and control. It is essentially the Central Processing Unit (CPU) of a computer.
- **Microcontroller:** A compact computer-on-a-chip, designed for embedded applications. It combines a processor, memory, and Input/Output (I/O) peripherals on a single chip.

### e. Write Various Applications of Embedded System

- Automotive systems (ABS, airbags)
- Medical devices (pacemakers, insulin pumps)
- Consumer electronics (TV, washing machines)
- Industrial control systems (Robotic arms)
- Telecommunications equipment (Routers, switches)

### f. What is Embedded System? Give two examples

An embedded system is a dedicated computer system designed to perform specific tasks with real-time constraints, often embedded as part of a larger device.

**Examples:**
1. Digital camera
2. ATM machine

### g. Define Purpose of an Embedded System

The purpose of an embedded system is to perform dedicated functions or specific tasks with reliability, efficiency, and often with real-time performance constraints.

### h. Explain Network Based and Mobile Based Embedded System

- **Network Based**: Connected to networks (wired/wireless) for remote access and communication
- **Mobile Based**: Portable devices operating on battery power with wireless connectivity

### i. What are the Various Non-Operational Quality Attributes of an Embedded System?

- Testability and debug-ability
- Portability
- Maintainability
- Cost
- Time to market
- Reliability and safety

## Long Type Questions (5 marks each)

### a. Explain Small Scale, Medium Scale and Sophisticated Embedded System

#### Small Scale Embedded System
- Designed with Single 8-bit or 16-bit microcontroller  
- Little hardware and software complexity  
- Battery operated  
- C programming language is used  
- Example: Bluetooth headphones, electronic toys  

#### Medium Scale Embedded System
- 16-bit or 32-bit microcontrollers  
- More complex hardware and software  
- Faster processing than small scale  
- C, C++, Java are used to develop  
- Example: ATM machine  

#### Large Embedded System
- Highly advanced and complex hardware and software compared  
- Multiple 32-bit or 64-bit microcontrollers  
- Example: AC, robotic systems  

---

### b. State and Explain Various Types of Interface in Embedded System

Classified into 2 types:

#### 1. Serial Interface
- Data bits are transmitted one after another sequentially on a single communication line.  
- Memory like EEPROM, generally accessed via serial interface.  
- Advantages: Fewer wires, long distance communication  
- Interfaces involved:
  - I2C - a two line serial communication protocol.  
  - SPI - a synchronous serial communication protocol.  

#### 2. Parallel Interface
- Multiple data bits are transmitted simultaneously, each on its own dedicated line.  
- Memory like RAM, accessed via a parallel interface  
- Fast read and write operation  
- Connects data line of 8-bit processor to the corresponding data line of the memory.

---

### c. State Various Memory Concepts in Embedded System

- Utilize various types of memory, both volatile and non-volatile, to store data, data configurations, and information.
- The specific memory configuration in an embedded system depends on the system requirements, i.e., speed, power consumption, and data persistence or reliability.

#### i. Volatile Memory
- The data gets erased when the power supply is switched off
- Types: RAM, Registers.

#### ii. Random Access Memory (RAM)
- RAM is utilized for temporary data storage during program execution.
- Characterized by its speed but also its volatile nature, meaning it loses data when power is turned off.

**Types of RAM:**
- **SRAM (Static RAM):**
  - Extremely fast.
  - Uses flip-flops to store data.
  - Does **not** retain data when power is cut off (volatile).

- **DRAM (Dynamic RAM):**
  - Stores data in capacitors.
  - Requires periodic refreshing by a DRAM controller to maintain data.
  - Generally cheaper than SRAM.

#### 2. Non-Volatile Memory
- Permanently stores data, which is retained even when the power supply is cut off during program execution.
- Examples: ROM

#### i. ROM
- **Non-volatile memory**: Retains data even when power is removed.
- **Read-only**: Data stored in ROM can only be read; it cannot be easily written to or modified by users during normal operation.
- **Data retention**: Effectively retains data when the power supply is cut off.
- **Speed**: Generally slower than RAM (Random Access Memory).

**Types of ROM:**
1. **PROM (Programmable ROM)**
   - One-time programmable: Data can be written to PROM only once after manufacturing.
   - Permanent: Once programmed, the data cannot be changed or erased.

2. **EPROM (Erasable Programmable ROM)**
   - Erasable and reprogrammable: Data can be erased using ultraviolet (UV) radiation.
   - Reprogrammable: After erasure, new data can be written to the chip.

3. **EEPROM (Electrically Erasable Programmable ROM)**
   - Electrically erasable and reprogrammable: Data can be erased and reprogrammed electrically, without needing UV light or removal from the circuit.

#### ii. Flash Memory
- **Type**: A very fast, non-volatile memory technology.
- **Applications**: Commonly used in embedded systems for storing firmware, application code, and other data.
- **Data Retention**: Retains data even when power is off.
- **Speed Characteristics**: Data can be read very quickly, but writing data is comparatively slower.
- **Storage Units**: Stores data in single blocks of memory (e.g., 256 bytes to 16 KB).

---

### d. Explain Any Five Operational Quality Attributes of Embedded System

1. **Reliability**
   - Ability to perform required functions under stated conditions
   - Critical for safety-critical systems

2. **Maintainability**
   - Ease with which system can be repaired or modified
   - Reduces downtime and maintenance costs

3. **Performance**
   - Speed and efficiency of system operations
   - Measured by throughput, latency, response time

4. **Safety**
   - Ensuring system does not cause harm to users or environment
   - Good backup systems and safety features
   - Particularly important in medical and automotive systems

5. **Security**
   - Protection against unauthorized access and malicious attacks
   - Crucial for network-connected embedded systems

---

### e. State and Explain Different Characteristics of Embedded System

The various characteristics are:

- **Specific Task Performance:** Embedded systems are designed to perform one or more specific functions or tasks.
  - *Example:* A digital calculator performs specific arithmetic operations.

- **Low Cost:** The price of an embedded system is typically not high, making them affordable for various applications.

- **Time-Specific Operations:** They are designed to complete tasks within a defined timeframe, which is crucial for real-time applications where timing is critical.

- **Low Power Consumption:** Embedded systems are built to require minimal power for operation.

- **High Stability:** Embedded systems are generally stable and not prone to frequent changes, maintaining their stability over time.

- **Real-time Performance:** They provide the desired output instantly, ensuring timely responses, especially critical in safety-related applications.

- **Less Human Intervention:** They are designed to operate with minimal or no human intervention once deployed, automating specific processes.

- **Compact Size:** Embedded systems are often designed to be compact, allowing for easy integration into larger devices or products.

---

### f. What is Programmable Logic Device (PLD)? Explain Briefly

A Programmable Logic Device (PLD) is an integrated circuit (IC) that can be configured by a user to perform a wide variety of logic functions.

- Unlike fixed-logic devices, which are designed for one specific function or can be configured by a user to perform different functions.
- PLDs consist of an array of logic gates

**Advantages:**
- Lower development costs
- Reusable hardware platform

**Applications:**
- Implementing custom logic functions
- Signal processing applications
- Embedded system development