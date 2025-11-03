### **Experiment 12**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> To sweep the shaft of a servo motor back and forth across 180 degrees automatically using Arduino.

---

#### **Components Required:**
- Arduino Board - 1
- Servo Motor - 1
- Hook-up wires
- Capacitors (100 µF recommended)
- Power supply

---

#### **Arduino Code:**
```ino
#include <Servo.h>

Servo myservo; // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0; // variable to store the servo position

void setup() {
    myservo.attach(9); // attaches the servo on pin 9 to the servo object
}

void loop() {
    for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
        // in steps of 1 degree
        myservo.write(pos); // tell servo to go to position in variable 'pos'
        delay(15); // waits 15ms for the servo to reach the position
    }
    
    for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
        myservo.write(pos); // tell servo to go to position in variable 'pos'
        delay(15); // waits 15ms for the servo to reach the position
    }
}
```

---

#### **Conclusion:**
> The servo motor was successfully programmed to sweep automatically across its full 180-degree range. The motor smoothly rotates from 0 to 180 degrees and back in a continuous loop, demonstrating automated servo control without external input devices.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../11/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../13/)

</div>