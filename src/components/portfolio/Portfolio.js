import React from "react";
import "./portfolio.css";
import Card from "../card/Card";
import cat from "../portfolio/1.jpeg";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfoliotHeader">
        <h1>Portfolio</h1>
        <p>my works</p>
      </div>
      <div className="cardContainer">
        <Card
          img={cat}
          title="Paczący Kot"
          description="Bardzo ładna karta panocku. Cieszę się, że mogę mieć kartę paczącego kota. Ten paczący kot to maximum możliwości poznawczych mojego zdebilałego mózgu."
        />
        <Card
          img={cat}
          title="Paczący Kot"
          description="Bardzo ładna karta panocku. Cieszę się, że mogę mieć kartę paczącego kota. Ten paczący kot to maximum możliwości poznawczych mojego zdebilałego mózgu."
        />
        <Card
          img={cat}
          title="Paczący Kot"
          description="Bardzo ładna karta panocku. Cieszę się, że mogę mieć kartę paczącego kota. Ten paczący kot to maximum możliwości poznawczych mojego zdebilałego mózgu."
        />
        <Card
          img={cat}
          title="Paczący Kot"
          description="Bardzo ładna karta panocku. Cieszę się, że mogę mieć kartę paczącego kota. Ten paczący kot to maximum możliwości poznawczych mojego zdebilałego mózgu."
        />
        <Card
          img={cat}
          title="Paczący Kot"
          description="Bardzo ładna karta panocku. Cieszę się, że mogę mieć kartę paczącego kota. Ten paczący kot to maximum możliwości poznawczych mojego zdebilałego mózgu."
        />
        <Card
          img={cat}
          title="Paczący Kot"
          description="Bardzo ładna karta panocku. Cieszę się, że mogę mieć kartę paczącego kota. Ten paczący kot to maximum możliwości poznawczych mojego zdebilałego mózgu."
        />
      </div>
    </div>
  );
}

export default Portfolio;
