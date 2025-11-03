### **Experiment 10**
> *Arduino Basics*

---
---

#### **Aim of the experiment:**
> To interface LM35 temperature sensor with Arduino Uno to measure and display temperature readings on the serial monitor.

---

#### **Components Required:**
- Arduino UNO - 1
- LM35 Temperature Sensor - 1
- Jumper wires (generic)
- Breadboard (generic) - 1

---

#### **Arduino Code:**
```ino
// LM35 is connected to this PIN
#define sensorPin A0

void setup() {
    // Init serial at 9600 baud
    Serial.begin(9600);
}

void loop() {
    //Read Raw ADC Data
    int adcData = analogRead(sensorPin);
    
    // Convert that ADC Data into voltage
    float voltage = adcData * (5.0 / 1024.0);
    
    // Convert the voltage into temperature
    float temperature = voltage * 100;
    
    // Print the temperature data
    Serial.print("Temperature: ");
    Serial.print(temperature);
    Serial.println("*C");
    
    delay(800); // wait a second between readings
}
```

---

#### **Conclusion:**
> The LM35 temperature sensor was successfully interfaced with Arduino Uno. The analog voltage output from the sensor was converted to digital form and processed to obtain accurate temperature readings in Celsius. The system provides continuous temperature monitoring with readings displayed on the serial monitor at regular intervals.

---

<div align="center">

[![Previous](https://img.shields.io/badge/Previous-%23000000.svg?style=for-the-badge&logo=backbone&logoColor=1E8E3E)](../9/)  [![Home](https://img.shields.io/badge/Home-%23000000.svg?style=for-the-badge&logo=googlehome&logoColor=1E8E3E)](../../)  [![Next](https://img.shields.io/badge/Next-%23000000.svg?style=for-the-badge&logo=inertia&logoColor=1E8E3E)](../11/)

</div>