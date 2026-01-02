# 🏭 Industrial Tools Marketing Website

A high-performance, responsive marketing platform built with **React**. This project showcases industrial tools and services, establishing brand authority through a localized experience for global markets.

---

## 📍 Table of Contents
* [🌐 Features](#-features)
* [🛠️ Tech Stack](#️-tech-stack)
* [📄 Pages Included](#-pages-included)
* [📁 Project Structure](#-project-structure)
* [🚀 Getting Started](#-getting-started)
* [🌍 Language Support](#-language-support)
* [🎯 Purpose](#-purpose-of-the-project)
* [📌 Future Improvements](#-future-improvements)

---

## 🌐 Features {#-features}

* **⚛️ Built with React** - Component-based UI for maximum performance.
* **🌍 Multi-language Support** - Localized for **English (🇬🇧)**, **Japanese (🇯🇵)**, and **Sinhala (🇱🇰)**.
* **🔄 Seamless Switching** - Change languages instantly without page reloads using `react-i18next`.
* **📱 Responsive Design** - Mobile-first approach ensuring compatibility across all devices.
* **🏢 B2B Focused** - Professional industrial aesthetic designed for lead generation.

---

## 🛠️ Tech Stack {#️-tech-stack}

| Technology | Usage |
| :--- | :--- |
| **React.js** | Core Library |
| **React Router** | Client-side Routing |
| **Tailwind CSS** | Styling & Layout |
| **i18next** | Internationalization |
| **ES6+ JS** | Modern Logic |

---

## 📄 Pages Included {#-pages-included}

* **[Home](#)** – Company overview, highlights, and primary CTA.
* **[Products](#)** – Detailed industrial tool categories.
* **[Services](#)** – Maintenance, supply, and consultation details.
* **[About Us](#)** – Background, Mission, and Vision.
* **[Contact](#)** – Lead generation form and contact info.

---

## 📁 Project Structure {#-project-structure}

```text
src/
 ├─ components/  # Reusable UI (Navbar, Footer, Button)
 ├─ pages/       # Page components (Home.jsx, Contact.jsx)
 ├─ locales/     # Translation JSON files
 │   ├─ en.json
 │   ├─ ja.json
 │   └─ si.json
 ├─ i18n.js      # Configuration for multi-language logic
 ├─ App.jsx      # Route management
 └─ main.jsx     # Entry point


 🚀 Getting Started {#-getting-started}
Clone the repository

Bash

git clone <repository-url>
Install dependencies

Bash

npm install
Run the development server

Bash

npm run dev

🌍 Language Support

The application uses localStorage to remember the user's preferred language.

English: Default international business language.
Japanese: Optimized for East Asian industrial markets.
Sinhala: Localized support for the Sri Lankan market.

🎯 Purpose of the Project 

This platform acts as a digital storefront for an industrial tools company to:
Promote high-end machinery and services.
Reach international customers via native language support.
Collect and manage business inquiries efficiently.

📌 Future Improvements 

[ ] Backend Integration: Connect contact form to Node.js/Express.
[ ] SEO: Implement Meta tags for better Google ranking.
[ ] Admin Panel: A dashboard to add/remove products.
[ ] Performance: Image lazy loading and minification.