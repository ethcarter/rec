### **Experiment 07**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> Write a program to blink an LED when a button is pressed

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
const int btnPin = 2;
const int ledPin = 11;
int btnState = 0;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(btnPin, INPUT_PULLUP);
}

void loop() {
  btnState = digitalRead(btnPin);
  
  if (btnState == LOW) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Button is pressed!");
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

---

#### **Conclusion:**
> The experiment successfully used digital input from a button to control an LED, demonstrating basic input-output interaction.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../6/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../8/)

</div>
