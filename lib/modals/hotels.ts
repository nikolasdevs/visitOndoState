import { timeStamp } from "console";
import { Schema, model, models } from "mongoose";

const HotelSchema = new Schema(
  {
    name: { type: "string", required: true },
    address: { type: "string", required: true },
    city: { type: "string", required: true },
    state: { type: "string", required: true },
    country: { type: "string", required: true },
    postalCode: { type: "string", required: true },
    stars: { type: "number", required: true },
    price: { type: "number", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
    category: { type: "string", required: true },
  },

  {
    timestamps: true,
  }
);

const Hotel = models.Hotel || model("Hotel", HotelSchema);

export default Hotel;
