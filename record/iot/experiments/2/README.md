### **Experiment 02**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> Write a program to make an LED blink

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
  digitalWrite(pin, HIGH);
  delay(1000);
  digitalWrite(pin, LOW);
  delay(1000);
}
```

---

#### **Conclusion:**
> The experiment successfully demonstrated basic digital output control by making an LED blink at regular one-second intervals.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../1/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../3/)

</div>
