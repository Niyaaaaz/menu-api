# Restaurant – Menu Display API**

## 📌 **1. About the Restaurant**

**Royal Spice Restaurant** is a modern Indian fusion eatery that brings you delicious appetizers, rich main courses, and irresistible desserts. We believe in serving fresh, flavorful, and beautifully crafted dishes that make every meal feel royal.

---

## 📌 **2. Project Description**

This project is a **Restaurant Menu Display API** built using **Node.js** and **Express.js**.
It includes a simple **frontend webpage** that displays menu items dynamically using the **Fetch API**.

### **Technologies Used**

* Node.js
* Express.js
* JavaScript
* HTML
* CSS

---

## 📌 **3. Menu Categories Available**

Your menu includes at least 3 major categories:

* **Appetizer**
* **Main Course**
* **Dessert**

---

## 📌 **4. Project Structure**

```
project-folder/
│── public/            
│     ├── index.html
│     ├── css/
│     │    └── styles.css
│     └── js/
│          └── main.js
│── server.js
│── package.json
│── .gitignore
│── README.md

---


## 📌 **5. API Documentation**

---

### ⭐ **GET /menu**

**Method:** GET
**Description:** Returns all menu items

#### **Sample Response**

```json
[
  {
    "id": 1,
    "name": "Margherita Pizza",
    "category": "Main Course",
    "price": 350,
    "isVegetarian": true,
    "description": "Classic pizza with tomato and mozzarella"
  }
]
```

---

### ⭐ **GET /menu/vegetarian**

**Method:** GET
**Description:** Returns only vegetarian menu items

#### **Sample Response**

```json
[
  {
    "id": 3,
    "name": "Veg Spring Rolls",
    "category": "Appetizer",
    "price": 180,
    "isVegetarian": true,
    "description": "Crispy rolls filled with mixed vegetables"
  }
]
```

---

### ⭐ **GET /menu/categories**

**Method:** GET
**Description:** Returns all unique categories with item count

#### **Sample Response**

```json
{
  "categories": [
    { "name": "Appetizer", "itemCount": 2 },
    { "name": "Main Course", "itemCount": 2 },
    { "name": "Dessert", "itemCount": 2 }
  ]
}
```

---

## 📌 **6. Installation & Setup Instructions**

### **Step 1: Clone the repository**

```bash
git clone https://github.com/your-username/restaurant-menu-api.git
```

### **Step 2: Navigate into the folder**

```bash
cd restaurant-menu-api
```

### **Step 3: Install dependencies**

```bash
npm install
```

### **Step 4: Start the server**

```bash
node server.js
```

### **Step 5: Open the API in browser**

* [http://localhost:3000/menu](http://localhost:3000/menu)
* [http://localhost:3000/menu/vegetarian](http://localhost:3000/menu/vegetarian)
* [http://localhost:3000/menu/categories](http://localhost:3000/menu/categories)

### **Step 6: Open the frontend**

```
http://localhost:3000
```

---

## 📌 **7. Features**

✔️ Full menu displayed from API
✔️ Vegetarian-only filter
✔️ Menu categories with item count
✔️ Simple UI with buttons for each feature
✔️ Fetch API integration
✔️ Clean and readable code
✔️ In-memory menu data (no database required)
✔️ Responsive and visually clear design

---

## 📌 **8. GitHub Repository Link**

[https://github.com/your-username/restaurant-menu-api]

---

## 📌 **9. Author Information**

**Name:** Niyaz AM
**Project:** Restaurant Menu Display API

