import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./Components/CustomerCard";
import ReservationCard from "./Components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservationName, setReservationName] = useState("");

  const reservation = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customer.value);

  const dispatch = useDispatch();
  const addName = () => {
    if (!reservationName) return;
    dispatch(addReservation(reservationName));
    setReservationName("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((name, idx) => (
                <ReservationCard key={idx} name={name} index={idx} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              type="text"
              value={reservationName}
              onChange={(e) => {
                setReservationName(e.target.value);
              }}
            />
            <button onClick={addName}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard
              name={customer.name}
              food={customer.food}
              id={customer.id}
              key={customer.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
