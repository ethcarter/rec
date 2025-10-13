# **DE Assignment I**

#### **1: What is a number system? Discuss various types of number systems with examples**
A number system is basically a way to represent quantities using specific symbols and rules. Different number systems use different bases (or radicals) to express values.

 Main number systems:

- **Decimal (Base-10)**: What we use daily, using digits 0-9
  Example: 237 = (2 × 10²) + (3 × 10¹) + (7 × 10⁰)

- **Binary (Base-2)**: Used by computers, using only 0 and 1
  Example: 1101 = (1 × 2³) + (1 × 2²) + (0 × 2¹) + (1 × 2⁰) = 13 in decimal

- **Octal (Base-8)**: Uses digits 0-7
  Example: 752 = (7 × 8²) + (5 × 8¹) + (2 × 8⁰) = 490 in decimal

- **Hexadecimal (Base-16)**: Uses digits 0-9 and letters A-F
  Example: 2AF = (2 × 16²) + (10 × 16¹) + (15 × 16⁰) = 687 in decimal

#### **2: State and explain different binary arithmetic operations with examples.**
- **Addition**: Similar to decimal addition but with carry rules based on 2
  Example: 1101 + 1001 = 10110
  ```
     1 0 1 (carries)
     1 1 0 1
   + 1 0 0 1
   ---------
   1 0 1 1 0
  ```

- **Subtraction**: Uses borrowing technique
  Example: 1101 - 0111
  ```
     1 0 11 (after borrowing)
     1 1 0 1
   - 0 1 1 1
   ---------
     0 1 1 0
  ```

- **Multiplication**: Similar to decimal but simpler since only 0 and 1
  Example: 101 × 11
  ```
        1 0 1
      ×   1 1
    -------
        1 0 1
      1 0 1  
    -------
      1 1 1 1
  ```

- **Division**: Like long division in decimal
  Example: 1100 ÷ 11 = 100 (4 in decimal)

#### **3: Briefly explain different laws of boolean algebra.**
- **Commutative Laws**:
  A + B = B + A
  A · B = B · A

- **Associative Laws**:
  A + (B + C) = (A + B) + C
  A · (B · C) = (A · B) · C

- **Distributive Laws**:
  A · (B + C) = A · B + A · C
  A + (B · C) = (A + B) · (A + C)

- **Identity Laws**:
  A + 0 = A
  A · 1 = A

- **Complement Laws**:
  A + A' = 1
  A · A' = 0

- **Idempotent Laws**:
  A + A = A
  A · A = A

#### **4: Differentiate between Digital and Analog signal.**
**Digital Signal**:
- Represents data in discrete values (typically 0s and 1s)
- Has discrete steps with specific values
- Less susceptible to noise and interference
- Can be easily stored and reproduced without degradation
- Example: Computer data, digital audio files

**Analog Signal**:
- Represents data as continuous waveforms
- Can take any value within a range
- More susceptible to noise and degradation
- Harder to store and reproduce exactly
- Example: Human voice, natural sounds, vinyl records

#### **5: State and explain De-Morgan's Law.**
De-Morgan's laws establish the relationship between AND, OR, and NOT operations:

1. **(A + B)' = A' · B'**
   The complement of a sum equals the product of the complements.
   
   Example: If A = 1 and B = 0
   Left side: (1 + 0)' = 1' = 0
   Right side: 1' · 0' = 0 · 1 = 0

2. **(A · B)' = A' + B'**
   The complement of a product equals the sum of the complements.
   
   Example: If A = 1 and B = 0
   Left side: (1 · 0)' = 0' = 1
   Right side: 1' + 0' = 0 + 1 = 1