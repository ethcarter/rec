### **Experiment 9**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> To design an ambient light sensor using a photo resistor to determine whether a room is bright, average or dark, and display the status using LEDs and serial monitor.

---

#### **Components Required:**
- Arduino UNO - 1
- Photo resistor - 1
- LED (generic) - 2
- Resistor 100 ohm - 2
- Resistor 1k ohm - 1
- Breadboard (generic) - 1
- Jumper wires (generic) - 1

---

#### **Arduino Code:**
```ino
int light = 0; // store the current light value

void setup() {
    // put your setup code here, to run once:
    Serial.begin(9600); //configure serial to talk to computer
    pinMode(13, OUTPUT); // configure digital pin 13 as an output
    pinMode(12, OUTPUT); // configure digital pin 12 as an output
}

void loop() {
    // put your main code here, to run repeatedly:
    light = analogRead(A0); // read and save value from PR
    Serial.println(light); // print current light value
    
    if(light > 450) { // If it is bright...
        Serial.println("It is quite light!");
        digitalWrite(13,LOW); //turn left LED off
        digitalWrite(12,LOW); // turn right LED off
    }
    else if(light > 229 && light < 451) { // If it is average light...
        Serial.println("It is average light!");
        digitalWrite(13, HIGH); // turn left LED on
        digitalWrite(12,LOW); // turn right LED off
    }
    else { // If it's dark...
        Serial.println("It is pretty dark!");
        digitalWrite(13,HIGH); // Turn left LED on
        digitalWrite(12,HIGH); // Turn right LED on
    }
    
    delay(1000); // don't spam the computer!
}
```

---

#### **Conclusion:**
> The ambient light sensor was successfully implemented using a photo resistor and Arduino UNO. The system accurately detects three levels of light intensity (bright, average, and dark) and provides visual feedback through LEDs while displaying the light values on the serial monitor. The threshold values of 450 and 230 effectively differentiate between the three light conditions.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../8/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../10/)

</div>