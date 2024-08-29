import React from "react";

const Destinations = ({ params }: { params: { destinationsId: string } }) => {
  return (
    <div>
      <p>Destinations in Ondo state</p>
      <span>{params.destinationsId}</span>
    </div>
  );
};

export default Destinations;
