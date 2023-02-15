import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();

  const customer: Customer = {
    id: uuid(),
    name,
    food: [],
  };

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch2(addCustomer(customer));
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}

export default ReservationCard;
