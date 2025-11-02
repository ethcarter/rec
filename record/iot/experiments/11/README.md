### **Experiment 11**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> To control the position of a servo motor using a potentiometer with Arduino.

---

#### **Components Required:**
- Arduino Board - 1
- Servo Motor - 1
- 10k ohm potentiometer - 1
- Hook-up wires
- Capacitors (100 µF recommended)
- Power supply

---

#### **Arduino Code:**
```ino
#include <Servo.h>

Servo myservo; // create servo object to control a servo

int potpin = 0; // analog pin used to connect the potentiometer
int val; // variable to read the value from the analog pin

void setup() {
    myservo.attach(9); // attaches the servo on pin 9 to the servo object
}

void loop() {
    val = analogRead(potpin); // reads the value of the potentiometer (value between 0 and 1023)
    val = map(val, 0, 1023, 0, 180); // scale it to use it with the servo (value between 0 and 180)
    myservo.write(val); // sets the servo position according to the scaled value
    delay(15); // waits for the servo to get there
}
```

---

#### **Conclusion:**
> The servo motor was successfully controlled using a potentiometer and Arduino. The potentiometer input (0-1023) was mapped to servo angles (0-180 degrees), allowing smooth and precise control of the servo motor position based on the potentiometer's rotation.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../10/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../12/)

</div>