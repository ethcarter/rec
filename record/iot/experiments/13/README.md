### **Experiment 13**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> To interface a buzzer module (piezo speaker) with Arduino UNO to generate tone signals.

---

#### **Components Required:**
- Arduino UNO - 1
- Piezo Speaker/Buzzer - 1
- Resistor 100 ohm - 1
- Breadboard - 1
- Jumper wires (generic) - 3

---

#### **Arduino Code:**
```ino
const int buzzer = 9; //buzzer to arduino pin 9

void setup(){
    pinMode(buzzer, OUTPUT); // Set buzzer - pin 9 as an output
}

void loop(){
    tone(buzzer, 1000); // Send 1KHz sound signal...
    delay(1000); // ...for 1 sec
    noTone(buzzer); // Stop sound...
    delay(1000); // ...for 1sec
}
```

---

#### **Conclusion:**
> The buzzer module was successfully interfaced with Arduino UNO. The tone() and noTone() functions were effectively used to generate a 1KHz sound signal with intermittent beeping patterns. This demonstrates the basic functionality of audio output control using Arduino.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../12/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../14/)

</div>