### **Experiment 14**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> To interface a 5V relay module with Arduino Uno to control an LED, demonstrating the principle of controlling high power devices.

---

#### **Components Required:**
- Arduino Uno - 1
- 5V Relay Module - 1
- LED - 1
- Breadboard - 1
- Jumper Wires

---

#### **Arduino Code:**
```ino
int relay_pin = 7;
int led_pin = 12;

void setup()
{
    pinMode(relay_pin,OUTPUT);
    pinMode(led_pin,OUTPUT);
    digitalWrite(led_pin,HIGH);
}

void loop()
{
    digitalWrite(relay_pin,HIGH);
    delay(2000);
    digitalWrite(relay_pin,LOW);
    delay(2000);
}
```

---

#### **Conclusion:**
> The 5V relay module was successfully interfaced with Arduino Uno to control an LED. The relay switched the LED on and off at 2-second intervals, demonstrating the fundamental principle of using relays to control devices. This experiment establishes the foundation for controlling high-power appliances safely using Arduino's low-voltage digital outputs through electromechanical relays.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../13/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)

</div>