const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// In-memory menu data - at least 6 items, 3+ categories, veg & non-veg
const menu = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 350,
    isVegetarian: true,
    description: "Classic pizza with tomato, fresh basil and mozzarella."
  },
  {
    id: 2,
    name: "Butter Chicken",
    category: "Main Course",
    price: 420,
    isVegetarian: false,
    description: "Creamy tomato gravy with tender chicken pieces."
  },
  {
    id: 3,
    name: "Caesar Salad",
    category: "Appetizer",
    price: 220,
    isVegetarian: true,
    description: "Crisp romaine, parmesan, croutons and Caesar dressing."
  },
  {
    id: 4,
    name: "Fish Fry",
    category: "Appetizer",
    price: 280,
    isVegetarian: false,
    description: "Lightly spiced fried fish served with lemon wedges."
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    category: "Dessert",
    price: 150,
    isVegetarian: true,
    description: "Warm gooey chocolate brownie with vanilla ice cream."
  },
  {
    id: 6,
    name: "Masala Chai",
    category: "Beverage",
    price: 60,
    isVegetarian: true,
    description: "Spiced Indian tea brewed with milk."
  },
  // optional extra item
  {
    id: 7,
    name: "Paneer Tikka",
    category: "Main Course",
    price: 330,
    isVegetarian: true,
    description: "Grilled cottage cheese marinated in spices."
  }
];

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// --- API endpoints ---

// 1) GET /menu -> all menu items
app.get('/menu', (req, res) => {
  res.json(menu);
});

// 2) GET /menu/vegetarian -> only vegetarian items
app.get('/menu/vegetarian', (req, res) => {
  const veg = menu.filter(item => item.isVegetarian === true);
  res.json(veg);
});

// 3) GET /menu/categories -> unique categories with counts
app.get('/menu/categories', (req, res) => {
  const counts = menu.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(counts).map(name => ({
    name,
    itemCount: counts[name]
  }));

  res.json({ categories });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
