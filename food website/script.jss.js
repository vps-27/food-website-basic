// Sample Data
const menu = {
    indian: [
      { name: "Butter Chicken", description: "Creamy and flavorful chicken curry.", image: "butter-chicken.jpg", price: 12 },
      { name: "Paneer Tikka", description: "Grilled cottage cheese with spices.", image: "paneer-tikka.jpg", price: 10 },
    ],
    italian: [
      { name: "Margherita Pizza", description: "Classic pizza with tomato and mozzarella.", image: "pizza.jpg", price: 14 },
      { name: "Pasta Carbonara", description: "Creamy pasta with bacon and cheese.", image: "pasta.jpg", price: 13 },
    ],
    chinese: [
      { name: "Fried Rice", description: "Stir-fried rice with vegetables and eggs.", image: "fried-rice.jpg", price: 9 },
      { name: "Dim Sum", description: "Steamed dumplings with savory fillings.", image: "dim-sum.jpg", price: 8 },
    ],
  };
  
  let selectedFood = null;
  
  // Show Cuisine Items
  function showCuisine(cuisine) {
    const cuisineSection = document.getElementById("cuisine");
    const foodItemsDiv = document.getElementById("food-items");
    const cuisineTitle = document.getElementById("cuisine-title");
  
    // Set title
    cuisineTitle.textContent = `${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} Cuisine`;
  
    // Clear previous items
    foodItemsDiv.innerHTML = "";
  
    // Add food items
    menu[cuisine].forEach((item) => {
      const foodItem = document.createElement("div");
      foodItem.className = "food-item";
      foodItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>$${item.price}</p>
        <button onclick="selectFood('${cuisine}', '${item.name}')">Order Now</button>
      `;
      foodItemsDiv.appendChild(foodItem);
    });
  
    // Show cuisine section
    document.getElementById("menu").classList.add("hidden");
    cuisineSection.classList.remove("hidden");
  }
  
  // Select Food
  function selectFood(cuisine, foodName) {
    selectedFood = menu[cuisine].find((item) => item.name === foodName);
    const orderSection = document.getElementById("order");
    const orderDetails = document.getElementById("order-details");
  
    // Show order details
    orderDetails.innerHTML = `
      <h3>${selectedFood.name}</h3>
      <p>${selectedFood.description}</p>
      <p>Price: $${selectedFood.price}</p>
    `;
  
    // Show order section
    document.getElementById("cuisine").classList.add("hidden");
    orderSection.classList.remove("hidden");
  }
  
  // Confirm Order
  function confirmOrder() {
    const paymentSection = document.getElementById("payment");
    document.getElementById("order").classList.add("hidden");
    paymentSection.classList.remove("hidden");
  }
  
  // Payment Methods
  function payWithUPI() {
    alert("Redirecting to UPI payment gateway...");
    // Add UPI payment logic here
  }
  
  function payWithCash() {
    alert("Order placed! Pay cash on delivery.");
    // Add cash on delivery logic here
  }