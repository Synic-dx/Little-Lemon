import React, { useReducer, useEffect } from "react";
import BookingForm from "../components/BookingForm";

// Initialize the state for availableTimes
const initializeTimes = () => {
  return {
    availableTimes: [], // Start with an empty array or some default value
  };
};

// Reducer function to handle state changes for availableTimes
const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
};

function BookingPage() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes());
  const handleBookingSubmit = (formData) => {
    console.log("Booking data from BookingPage:", formData);
  };

  return (
    <div>
      <BookingForm dispatch={dispatch} onBookingSubmit={handleBookingSubmit} bookingState={state} />
    </div>
  );
}

export default BookingPage;
