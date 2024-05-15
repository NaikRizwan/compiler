import React, { useEffect, useState } from "react";
import axios from "axios";

const RestaurantCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.swiggy.com/dapi/restaurants/list/v5/",
          {
            params: {
              lat: 12.9351929,
              lng: 77.62448069999999,
              page_type: "DESKTOP_WEB_LISTING",
            },
          }
        );
        const cardData =
          response.data.data.cards[0].card.card.imageGridCards.info;
        setCards(cardData);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <img
            src={`https://res.cloudinary.com/swiggy/image/upload/${card.imageId}`}
            alt={card.accessibility.altText}
          />
          <h3>{card.action.text}</h3>
          <a href={card.action.link} target="_blank" rel="noopener noreferrer">
            {card.accessibility.altTextCta}
          </a>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCards;
