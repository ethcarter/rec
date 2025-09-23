## Short Answer Questions (1 mark)

### 1. What is K-map?
- K-map (Karnaugh Map) is a graphical method used for simplifying Boolean algebra expressions
- It organizes minterms or maxterms in a grid format where adjacent cells differ by only one variable
- It provides a visual way to identify and eliminate redundant terms

### 2. Describe De Morgan's law.
- First law: The complement of a product equals the sum of complements
  - (A·B)' = A' + B'
- Second law: The complement of a sum equals the product of complements
  - (A+B)' = A'·B'
- These laws allow conversion between AND and OR operations using complements

### 3. Explain Various binary arithmetic operations.
- Addition: 0+0=0, 0+1=1, 1+0=1, 1+1=10 (carry 1)
- Subtraction: 0-0=0, 1-0=1, 1-1=0, 0-1=1 (borrow 1)
- Multiplication: 0×0=0, 0×1=0, 1×0=0, 1×1=1
- Division: Similar to decimal division but using binary values
- 1's Complement: Inverting all bits (0→1, 1→0)
- 2's Complement: 1's complement + 1 (used for representing negative numbers)

### 4. Draw the logic circuit diagram of XNOR and XOR gate.
```
It's too easy. :)
```

### 5. What is Gray Code?
- Gray code is a binary numeral system where consecutive numbers differ by only one bit
- Used to minimize errors during signal transmission and processing
- Prevents glitches in digital circuits when transitioning between states
- Example: Binary (00,01,10,11) vs Gray code (00,01,11,10)

### 6. Differentiate between digital and analog signal.

| Digital Signal | Analog Signal |
|----------------|---------------|
| Discrete values (typically 0 and 1) | Continuous range of values |
| Represented by square waves | Represented by sine waves |
| Less susceptible to noise | More susceptible to noise |
| Can be easily regenerated | Cannot be perfectly regenerated |
| Used in computers and digital electronics | Used in traditional electronics and natural phenomena |

### 7. Explain Octal and Decimal number system.

**Octal Number System:**
- Base-8 number system (digits 0-7)
- Each position represents power of 8 (8⁰, 8¹, 8², etc.)
- Used in computing as shorthand for binary (3 binary digits = 1 octal digit)
- Example: Octal 27 = 2×8¹ + 7×8⁰ = 16 + 7 = 23 in decimal

**Decimal Number System:**
- Base-10 number system (digits 0-9)
- Each position represents power of 10 (10⁰, 10¹, 10², etc.)
- Standard system used in everyday life
- Example: Decimal 25 = 2×10¹ + 5×10⁰ = 20 + 5 = 25

### 8. Minimize F(A,B,C) = A'BC' + AC' by Boolean algebra.

F(A,B,C) = A'BC' + AC'
= C'(A'B + A)    [Factoring out C']
= C'(A' + A)B + C'A    [Distributive law]
= C'(1)B + C'A    [A' + A = 1, Complement law]
= C'B + C'A    [Identity law]
= C'(B + A)    [Factoring out C']

Therefore, F(A,B,C) = C'(A + B)

### 9. What do you mean by canonical form of Boolean expression?
- A canonical form is a standardized way of representing Boolean functions
- Two main canonical forms:
  1. **Sum of Minterms (SOP)**: Express function as sum of minterms
  2. **Product of Maxterms (POP)**: Express function as product of maxterms
- Every variable appears exactly once in each term (either complemented or uncomplemented)
- Allows unique representation of Boolean functions
- Facilitates comparison and simplification of expressions

## Long Answer Questions (5 marks)

### 1. State and explain various Boolean algebra laws.

**1. Commutative Laws:**
- A + B = B + A
- A · B = B · A
- Order of variables doesn't affect the result

**2. Associative Laws:**
- (A + B) + C = A + (B + C)
- (A · B) · C = A · (B · C)
- Grouping of variables doesn't affect the result

**3. Distributive Laws:**
- A · (B + C) = A · B + A · C
- A + (B · C) = (A + B) · (A + C)
- Distributes one operation over another

**4. Identity Laws:**
- A + 0 = A
- A · 1 = A
- 0 and 1 are identity elements for + and · operations

**5. Complement Laws:**
- A + A' = 1
- A · A' = 0
- A variable and its complement cover all possibilities (1) or are mutually exclusive (0)

**6. Idempotent Laws:**
- A + A = A
- A · A = A
- Repeating a variable doesn't change the result

**7. Absorption Laws:**
- A + (A · B) = A
- A · (A + B) = A
- Simplifies expressions with nested terms

**8. De Morgan's Laws:**
- (A + B)' = A' · B'
- (A · B)' = A' + B'
- Relates complement, AND, and OR operations

**9. Double Negation Law:**
- (A')' = A
- Double complement cancels out

### 2. Explain SOP and POS form of boolean algebra with example.

**Sum of Products (SOP) Form:**
- Boolean expression written as sum (OR) of product (AND) terms
- Each product term is AND of variables or their complements
- Canonical SOP form uses minterms (each variable appears exactly once)
- Represents when function equals 1

**Example of SOP:**
- F(A,B,C) = A'BC + AB'C + ABC'
- This is read as: (NOT A AND B AND C) OR (A AND NOT B AND C) OR (A AND B AND NOT C)

**Product of Sums (POS) Form:**
- Boolean expression written as product (AND) of sum (OR) terms
- Each sum term is OR of variables or their complements
- Canonical POS form uses maxterms (each variable appears exactly once)
- Represents when function equals 0

**Example of POS:**
- F(A,B,C) = (A+B+C) · (A+B'+C) · (A'+B+C')
- This is read as: (A OR B OR C) AND (A OR NOT B OR C) AND (NOT A OR B OR NOT C)

**Conversion between forms:**
- SOP form is derived from truth table rows that yield 1
- POS form is derived from truth table rows that yield 0
- Both forms can represent any Boolean function

### 3. What is minterm and maxterm? Explain with example.

**Minterm:**
- A product (AND) term where each variable appears exactly once
- Each variable appears either in its normal or complemented form
- Represents a specific combination of inputs that makes the function = 1
- Also called a standard product term
- Denoted as m₀, m₁, m₂, etc.

**Example of Minterms:**
- For a 3-variable function F(A,B,C):
  - m₀ = A'B'C' (minterm for input 000, decimal 0)
  - m₁ = A'B'C (minterm for input 001, decimal 1)
  - m₄ = AB'C' (minterm for input 100, decimal 4)

**Maxterm:**
- A sum (OR) term where each variable appears exactly once
- Each variable appears either in its normal or complemented form
- Represents a specific combination of inputs that makes the function = 0
- Also called a standard sum term
- Denoted as M₀, M₁, M₂, etc.

**Example of Maxterms:**
- For a 3-variable function F(A,B,C):
  - M₀ = A+B+C (maxterm for input 000, decimal 0)
  - M₁ = A+B+C' (maxterm for input 001, decimal 1)
  - M₄ = A'+B+C (maxterm for input 100, decimal 4)

**Relationship between Minterms and Maxterms:**
- Minterm mᵢ and maxterm Mᵢ are complements of each other
- A minterm equals 1 only for one specific input combination
- A maxterm equals 0 only for one specific input combination
- The canonical SOP uses minterms while the canonical POS uses maxterms

### 4. What is logic gate? Explain various logic gates.

**Logic Gate:**
- Electronic circuit implementing a Boolean function
- Performs logical operations on one or more binary inputs
- Produces a single binary output
- Basic building blocks of digital circuits

**Basic Logic Gates:**

1. **NOT Gate (Inverter)**
   - Single input, single output
   - Output is complement of input
   - Symbol: Triangle with a small circle at output
   - Boolean expression: Y = A'

2. **AND Gate**
   - Two or more inputs, single output
   - Output is 1 only when all inputs are 1
   - Symbol: Shape like letter D
   - Boolean expression: Y = A·B

3. **OR Gate**
   - Two or more inputs, single output
   - Output is 1 when any input is 1
   - Symbol: Shape like a pointed arch
   - Boolean expression: Y = A+B

4. **NAND Gate**
   - AND gate followed by NOT gate
   - Output is 0 only when all inputs are 1
   - Symbol: AND gate with a small circle at output
   - Boolean expression: Y = (A·B)'

5. **NOR Gate**
   - OR gate followed by NOT gate
   - Output is 1 only when all inputs are 0
   - Symbol: OR gate with a small circle at output
   - Boolean expression: Y = (A+B)'

6. **XOR Gate (Exclusive OR)**
   - Output is 1 when inputs are different
   - Output is 0 when inputs are same
   - Symbol: OR gate with an extra curved line
   - Boolean expression: Y = A⊕B = A'B + AB'

7. **XNOR Gate (Exclusive NOR)**
   - Output is 1 when inputs are same
   - Output is 0 when inputs are different
   - Symbol: XOR gate with a small circle at output
   - Boolean expression: Y = A⊙B = AB + A'B'

**Universal Gates:**
- NAND and NOR gates are called universal gates
- Any Boolean function can be implemented using only NAND gates or only NOR gates

### 5. Solve the expression: F = (A+B+C)(A+B+C')(A+B'+C') by K-map.

First, let's expand the expression:
F = (A+B+C)(A+B+C')(A+B'+C')

This is in Product of Sums (POS) form. To use a K-map, we need to identify which minterms make F = 1.

Converting to SOP form:
F = (A+B+C)(A+B+C')(A+B'+C')
= A + BC'C + BB'C' + BC'C' + B'C'C
= A + 0 + 0 + 0 + 0
= A

Using a K-map (3-variable):
```
    BC
   00 01 11 10
A 0| 1  1  1  1
  1| 1  1  1  1
```

All cells containing A (the entire second row and any cell where A=1) are marked with 1.

The simplified expression from the K-map is:
F = A

### 6. Minimize the functions using K-map:

#### a. F(A,B,C) = Σ(0,1,3,6,7)

This means F = 1 for minterms m₀, m₁, m₃, m₆, m₇

K-map:
```
    BC
   00 01 11 10
A 0| 1  1  1  0
  1| 0  0  1  1
```

Grouping:
- Group 1: m₀, m₁ (A'B')
- Group 2: m₁, m₃ (A'C)
- Group 3: m₆, m₇ (AC)

Minimized expression:
F(A,B,C) = A'B' + A'C + AC

#### b. F(A,B,C) = Π(0,1,6,7)

This means F = 0 for maxterms M₀, M₁, M₆, M₇, and F = 1 for all other combinations.
So F = 1 for minterms m₂, m₃, m₄, m₅

K-map:
```
    BC
   00 01 11 10
A 0| 0  0  1  1
  1| 1  1  0  0
```

Grouping:
- Group 1: m₂, m₃ (A'C)
- Group 2: m₄, m₅ (AB')

Minimized expression:
F(A,B,C) = A'C + AB'