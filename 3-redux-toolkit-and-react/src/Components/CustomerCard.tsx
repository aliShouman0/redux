import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType {
  name: string;
  id: string;
  food: string[];
}

function CustomerCard({ name, id, food }: CustomerCardType) {
  const [newFood, setNewFood] = useState("");
  const dispatch = useDispatch();

  const handelAddFood = () => {
    if (!newFood) return;
    dispatch(addFoodToCustomer({ id, food: newFood }));
    setNewFood("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((f) => (
            <p>{f}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            type="text"
            value={newFood}
            onChange={(e) => {
              setNewFood(e.target.value);
            }}
          />
          <button onClick={handelAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
