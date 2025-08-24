# RideFlow - A Modern Car Rental Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

RideFlow is a modern, client-side car rental web application built with React, TypeScript, and Tailwind CSS. It offers a complete rental experience — from browsing cars to booking and managing rentals. All user and booking data is persisted client-side using localStorage.

## 🚀 Live Demo

**[https://ride-flow-whtw.vercel.app/](https://ride-flow-whtw.vercel.app/)**

## 📸 Screenshots

![RideFlow Home Page](https://res.cloudinary.com/dgtfgihga/image/upload/v1756041440/Screenshot_2025-08-24_184554_rayghr.png)

![RideFlow Cars List Page](https://res.cloudinary.com/dgtfgihga/image/upload/v1756041449/Screenshot_2025-08-24_184608_fyko74.png)

![RideFlow Car Details Page](https://res.cloudinary.com/dgtfgihga/image/upload/v1756041530/Screenshot_2025-08-24_184838_uj2rpa.png)

![RideFlow Bookings Page](https://res.cloudinary.com/dgtfgihga/image/upload/v1756041660/Screenshot_2025-08-24_184621_ac6l2x.png)

## ✨ Key Features

* **User Authentication:** Secure, client-side login and logout functionality using React Context for global state management and `localStorage` for session persistence.
* **Cars Discovery:**
    * **Car Discovery & Details:** Browse a list of available rental cars, View a dedicated details page for each car.
    * **Live Search:** Instantly search for cars by name or model.
* **Dynamic Booking System**
    * Select check-in/check-out dates with a date picker.
    * Real-time rental price calculation based on duration.
    * Book cars instantly with one click.
* **Cars Details Page:** A dedicated, dynamic route for each car, showing detailed information.
* **Bookings Management:** A dedicated page to view and manage all current bookings.
* **Responsive Design:** A mobile-first approach ensures a seamless experience on all devices, from small phones to large desktops.
* **User Feedback:** Toast notifications provide clear, non-intrusive feedback for actions like adding items to the cart, login success, or errors.

## 🛠️ Tech Stack

* **Frontend:** React, Typescript
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** React Context API
* **Notifications:** `react-toast`
* **Build Tool:** Vite

## ⚙️ Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed on your system.
* Node.js (v18.x or higher)
* npm (v9.x or higher)

### Installation

1.  **Clone the repository:**
    ```sh
     git clone https://github.com/SakethSampathVinay/RideFlow.git
    ```
    2.  **Navigate to the project directory:**
    ```sh
    cd RideFlow
    cd frontend
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

The application should now be running on `http://localhost:5173`.

## 🔮 Future Enhancements

Here are some features planned for future development:

* **Backend Integration:** Transition from localStorage to a full-stack application with a dedicated backend (e.g., Node.js/Express) and database (e.g., MongoDB/PostgreSQL).
* **Payment Gateway:** Integrate Stripe or another payment provider to handle real transactions.
* **User Profiles:** Allow users to view booking history and manage account details.
* **Pagination:** A system to navigate through large lists of products.
* **Advanced Filtering:** Implement search and filter functionality for cars based on type, price range, and availability.
* **Admin Dashboard:** A secure panel for administrators to manage car listings, users, and bookings.


