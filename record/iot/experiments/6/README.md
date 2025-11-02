### **Experiment 06**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> Write a program to return the user input through the serial monitor

---

#### **Components Required:**
- Arduino UNO board
- USB cable

---

#### **Arduino Code:**
```ino
void setup() {
  Serial.begin(9600);
  Serial.println("Hey... What is your name?");
}

void loop() {
  if (Serial.available() > 0) {
    String input_name = Serial.readString();
    Serial.println("Good to see you " + input_name);
  }
  Serial.flush();
}
```

---

#### **Conclusion:**
> The experiment demonstrated bidirectional serial communication by receiving user input and responding with personalized messages.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../5/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../7/)

</div>
