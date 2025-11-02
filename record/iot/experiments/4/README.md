### **Experiment 04**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> Write a program to make three LEDs blink in a sequence

---

#### **Components Required:**
- Arduino UNO board
- 3 LEDs (different colors recommended)
- 3 × 220Ω resistors
- Jumper wires

---

#### **Arduino Code:**
```ino
const int pins[] = {11, 12, 13};

void setup() {
  for (int i = 0; i < 3; i++) {
    pinMode(pins[i], OUTPUT);
  }
}

void loop() {
  for (int i = 0; i < 3; i++) {
    digitalWrite(pins[i], HIGH);
    delay(500);
    digitalWrite(pins[i], LOW);
    delay(500);
  }
}
```

---

#### **Conclusion:**
> The experiment successfully created a sequential blinking pattern across three LEDs, demonstrating control of multiple digital outputs.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../3/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../README.md)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../5/)

</div>
