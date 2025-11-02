### **Experiment 05**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> To write a program to display a message on the serial monitor

---

#### **Components Required:**
- Arduino UNO board
- USB cable

---

#### **Arduino Code:**
```ino
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("Hello World!");
  Serial.println("Welcome, to UGIE");
  
  delay(1000);
}
```

---

#### **Conclusion:**
> The experiment successfully established serial communication, displaying messages on the serial monitor at regular intervals.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../4/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../6/)

</div>
