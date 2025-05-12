# 🌦️ DPS Weather App

![React](https://img.shields.io/badge/React-2025-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Live-brightgreen)
![OpenWeather](https://img.shields.io/badge/API-OpenWeatherMap-orange)

A sleek, modern, and responsive weather application built with React, integrating real-time weather data from the OpenWeatherMap API. Designed and developed by **Jammu Durga Prasad**.

---

## 🌐 Live Demo

🔗 **[Click here to try it live →](https://dpsweatherapp.netlify.app/)**

---

## 📸 Screenshots

| Weather in Vizianagaram | Weather in Guntur | Weather in Mumbai |
|---------------------|------------------|-------------------|
| ![NY](./Screenshot%202025-05-12%20112235.png) | ![Tokyo](./Screenshot%202025-05-12%20112254.png) | ![London](./Screenshot%202025-05-12%20112312.png) |

---

## ⚙️ Features

- 🌍 Search by city name
- 🌡️ Live temperature, humidity, and wind speed
- 🎨 Clean UI with Material Symbols icons
- 🧭 Auto icon switching using OpenWeatherMap conditions
- 📲 PWA support with installable app features
- 🔐 Secure API key via `.env` file

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- An [OpenWeatherMap](https://openweathermap.org/api) API key

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/weather_app.git
cd weather_app

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory and add:

```env
REACT_APP_OPEN_WEATHER=your_openweather_api_key
```

### Run the Application

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📁 Project Structure

```bash
Weather_App/
├── public/
│   ├── applogo.png
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
├── src/
│   ├── assets/
│   │   ├── blank.png
│   │   └── sunny.png
│   ├── components/
│   │   └── Weather.jsx
│   ├── css/
│   │   └── Weather.css
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 🧪 Testing

To run unit tests:

```bash
npm test
```

---

## 📦 Production Build

To generate an optimized production build:

```bash
npm run build
```

The output will be in the `/build` folder, ready to deploy.

---

## 🛠️ Tech Stack

- **Framework:** React.js (CRA)
- **Styling:** CSS3, Google Fonts, Material Symbols
- **API:** [OpenWeatherMap](https://openweathermap.org/)
- **Deployment:** Netlify
- **PWA:** Manifest, icons, offline fallback

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ✨ Author

**Jammu Durga Prasad**

---

> _"Designed and Developed with 💙 for learning and practical weather insights."_
