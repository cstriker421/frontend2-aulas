import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, description, buttonText }) => {
  const handleClick = () => {
    alert(`You clicked the card: ${title}`);
  };

  return (
    <div className="card-component">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default Card;
