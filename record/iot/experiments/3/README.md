### **Experiment 03**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> Write a program to make an LED blink for a specific number of times

---

#### **Components Required:**
- Arduino UNO board
- LED (any color)
- 220Ω resistor
- Jumper wires

---

#### **Arduino Code:**
```ino
const int pin = 13;

void setup() {
  pinMode(pin, OUTPUT);
}

void loop() {
  int count = 5;
  
  while(count > 0) {
    digitalWrite(pin, HIGH);
    delay(500);
    digitalWrite(pin, LOW);
    delay(500);
    
    count -= 1;
  }
  
  delay(2000);
}
```

---

#### **Conclusion:**
> The experiment successfully implemented controlled iteration to make an LED blink exactly 5 times before pausing and repeating.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../2/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../4/)

</div>
