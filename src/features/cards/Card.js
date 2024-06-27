import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCardById } from '../cards/cardsSlice';

export default function Card({ id }) {
  const card = useSelector(state => selectCardById(state, id)); // Access the card by id using the selector
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
