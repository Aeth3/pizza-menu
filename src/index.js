import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "images/prosciutto.jpg",
    soldOut: false,
  },
];
const pizzas = pizzaData;
// const newPizza = [];
const numPizzas = pizzas.length;
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style = {color: "red", fontSize: "48px", textTransform: "uppercase"}

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine. {numPizzas} creative dishes to choose
            from. All from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzas={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 24;
  var isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open");
  // } else {
  //   alert("Sorry, We're currently close");
  // }

  if (isOpen && numPizzas > 0) {
    return (
      <footer className="footer">
        <Order closeHour={closeHour} openHour={openHour} isOpen={isOpen} />
      </footer>
    );
  } else {
    return (
      <footer className="footer">
        <p>Something went wrong...</p>
      </footer>
    );
  }
}

function Order({ openHour, closeHour, isOpen }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      {!isOpen || numPizzas < 0 ? null : <Button />}
    </div>
  );
}
function Button() {
  return <button className="btn">Order now</button>;
}

function Pizza({ pizzas }) {
  // if (props.pizzas.soldOut) {
  //   return (
  //     <li className="pizza">
  //       <div className="pizza sold-out">
  //         <img src={props.pizzas.photoName} alt={props.pizzas.name} />
  //       </div>
  //       <div>
  //         <h3>{props.pizzas.name}</h3>
  //         <p>{props.pizzas.ingredients}</p>
  //         <p>${props.pizzas.price}</p>
  //       </div>
  //     </li>
  //   );
  // } else {
  return (
    <li className={`pizza ${pizzas.soldOut ? "sold-out" : ""}`}>
      {pizzas.soldOut ? (
        <div className="pizza sold-out">
          <img src={pizzas.photoName} alt={pizzas.name} />
        </div>
      ) : (
        <div>
          <img src={pizzas.photoName} alt={pizzas.name} />
        </div>
      )}
      <div>
        <h3>{pizzas.name}</h3>
        <p>{pizzas.ingredients}</p>
        <span>{pizzas.soldOut ? "SOLD OUT" : pizzas.price}</span>
      </div>
    </li>
  );
  // }
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
