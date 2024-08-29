import React from "react";

const Hotels = ({ params }: { params: { hotelId: string } }) => {
  return (
    <div>
      <p>hotels in Ondo state</p>
      <span>{params.hotelId}</span>
    </div>
  );
};

export default Hotels;
