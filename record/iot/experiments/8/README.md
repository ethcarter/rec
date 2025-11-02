### **Experiment 08**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> Write a program that would count the no. of times to blink the LED according to the no. times the button is pressed

---

#### **Components Required:**
- Arduino UNO board
- LED (any color)
- Pushbutton
- 220Ω resistor (for LED)
- 10kΩ resistor (for button, optional with INPUT_PULLUP)
- Jumper wires

---

#### **Arduino Code:**
```ino
const int led = 11;
const int btn = 2;

int btnState = 0;
int btnValue = 0;
int count = 0;

void setup() {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
  pinMode(btn, INPUT_PULLUP);
}

void loop() {
  btnState = digitalRead(btn);
 
  if (btnState == LOW) {
    if(btnValue == 0) {
      digitalWrite(led, HIGH);
      Serial.println("Button is pressed " + String(count+1) + " times!");
      delay(200);
      btnValue = 1;
    } else if (btnValue == 1) {
      digitalWrite(led, LOW);
      delay(200);
      btnValue = 0;
      count++;
    }
  }
}
```

---

#### **Conclusion:**
> The experiment effectively counted button presses and provided visual feedback via an LED, demonstrating state tracking.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../7/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../9/)

</div>
