# **DE Assignment II**


### **1: Define logic gates. Brielfy explain all logic gates.**
Logic gates are electronic circuits that perform logical functions based on binary inputs. They're the building blocks of digital systems.

- **AND Gate**: Output is 1 only if all inputs are 1   
    - Example: A · B = Y

- **OR Gate**: Output is 1 if at least one input is 1  
    - Example: A + B = Y

- **NOT Gate (Inverter)**: Output is the opposite of the input
    - Example: A' = Y

- **NAND Gate**: Output is 0 only if all inputs are 1 (AND followed by NOT)
    - Example: (A · B)' = Y

- **NOR Gate**: Output is 1 only if all inputs are 0 (OR followed by NOT)
    - Example: (A + B)' = Y

- **XOR Gate (Exclusive OR)**: Output is 1 if inputs are different
    - Example: A ⊕ B = Y

- **XNOR Gate (Exclusive NOR)**: Output is 1 if inputs are the same
    - Example: A ⊙ B = Y

### **2: Explain POS and SOP form of a boolean expression with a suitable example.**
**SOP (Sum of Products)** represents a boolean function as the OR of AND terms:
> Also called Disjunctive Normal Form  
> Example: F(A,B,C) = A·B·C + A·B'·C + A'·B·C  
> Each term (like A·B·C) is a product term or minterm

**POS (Product of Sums)** represents a boolean function as the AND of OR terms:
> Also called Conjunctive Normal Form  
> Example: F(A,B,C) = (A+B+C) · (A+B'+C) · (A'+B+C)  
> Each term (like A+B+C) is a sum term or maxterm

Example converting between forms:
> F = A·B + A'·C (SOP form)
  = (A+C) · (B+C) (POS form)

### **3: What is minterm and maxterm of a boolean expression. Explain with an example.**
**Minterms**: 
- Product terms where each variable appears exactly once (complemented or uncomplemented)
- For n variables, there are 2^n possible minterms
- Each minterm is true for exactly one combination of input values

Example with 3 variables (A,B,C):
```txt
m₀ = A'·B'·C'
m₁ = A'·B'·C
m₂ = A'·B·C'
...and so on.
```

**Maxterms**:
- Sum terms where each variable appears exactly once
- Complementary to minterms
- Each maxterm is false for exactly one combination of input values

Example with 3 variables (A,B,C):
```txt
M₀ = A+B+C
M₁ = A+B+C'
M₂ = A+B'+C
...and so on.
```

### **4: What is K-map? Explain two variable, three variable and four variable K-map with example.**
A K-map is a graphical method for simplifying boolean expressions. It arranges minterms or maxterms in a grid to identify patterns for simplification.

**2-Variable K-map**:
```
    B'  B
A'  00  01
A   10  11
```

Example: F(A,B) = A'B' + AB
On K-map:
```
    B'  B
A'  1   0
A   0   1
```
Simplified: F = A'B' + AB (can't be simplified further)

**3-Variable K-map**:
```
      C'C
    00 01 11 10
AB
00    0  1  3  2
01    4  5  7  6
11   12 13 15 14
10    8  9 11 10
```

Example: F(A,B,C) = Σm(1,3,5,7)
On K-map:
```
      C'C
    00 01 11 10
AB
00    0  1  1  0
01    0  1  1  0
11    0  0  0  0
10    0  0  0  0
```
Simplified: F = B'C

**4-Variable K-map**:
Similar to 3-variable but with 16 cells for all combinations of A,B,C,D.

### **5: What is Gray-code? Define the process to convert Binary number to Gray-code and Gray-code to Binary number.**
Gray code is a binary numeral system where two successive values differ in only one bit position.

**Binary to Gray code conversion**:
1. The most significant bit (MSB) of Gray code equals the MSB of binary
2. Each remaining Gray code bit = XOR of the current binary bit and previous binary bit

Example: Binary 1011 to Gray
- MSB of Gray = MSB of binary = 1
- Next bit: 0 ⊕ 1 = 1
- Next bit: 1 ⊕ 0 = 1
- Last bit: 1 ⊕ 1 = 0
- Gray code = 1110

**Gray code to Binary conversion**:
1. MSB of binary = MSB of Gray
2. Each remaining binary bit = XOR of current binary result so far and next Gray code bit

Example: Gray 1110 to Binary
- MSB of binary = MSB of Gray = 1
- Next bit: 1 ⊕ 1 = 0
- Next bit: 0 ⊕ 1 = 1
- Last bit: 1 ⊕ 0 = 1