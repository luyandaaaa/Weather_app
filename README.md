# Weather_app
Table of Contents
Overview

Features

Technologies Used

Setup Instructions

API Configuration

Project Structure

Customization

Deployment

Troubleshooting

Contributing

License

Acknowledgements

Overview
MyWeatherApp is a responsive web application that provides current weather conditions and hourly forecasts for locations worldwide. Built with HTML, CSS, and JavaScript, it offers a clean, intuitive interface with smooth animations and responsive design that works across all device sizes.

Features
Current Weather Display:

Temperature (in Celsius)

Weather conditions (e.g., "Partly Cloudy")

Feels-like temperature

Humidity percentage

Wind speed

Location name and country

Hourly Forecast:

8-hour forecast with time indicators

Weather icons for each time period

Temperature readings

User Experience:

Responsive design for all screen sizes

Search functionality with error handling

12-hour time format display

Animated weather icons

Smooth transitions between states

Technical Features:

OpenWeatherMap API integration

Modern CSS with variables and flexbox

Mobile-first approach

Accessible design

Progressive enhancement

Technologies Used
Frontend:

HTML5

CSS3 (with variables and modern layout techniques)

JavaScript (ES6+)

Libraries:

Font Awesome (for icons)

OpenWeatherMap API (for weather data)

Tools:

Git (version control)

Visual Studio Code (recommended editor)

Setup Instructions
Prerequisites
Modern web browser (Chrome, Firefox, Safari, Edge)

Text editor or IDE

Internet connection (for API calls)

Installation
Clone the repository:

bash
git clone https://github.com/yourusername/MyWeatherApp.git
Navigate to the project directory:

bash
Copy
cd MyWeatherApp
Running the Application
Open the index.html file in your preferred web browser

API Configuration
The website uses the OpenWeatherMap API. To set up your own API key:

Sign up for a free account at OpenWeatherMap

Get your API key from the account dashboard

Replace the existing API key in script.js:
const apiKey = 'YOUR_NEW_API_KEY_HERE';
Note: The free tier of OpenWeatherMap has limits (60 calls/minute, 1,000,000 calls/month).

Project Structure
Copy
MyWeatherApp/
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # Main JavaScript functionality
├── README.md           # This documentation file

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
OpenWeatherMap for providing the weather data API

Font Awesome for the beautiful icons

Created by Luyanda Xhakaza
© 2025 MyWeatherApp
