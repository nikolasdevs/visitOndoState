import connect from "@/lib/db";
import Hotel from "@/lib/modals/hotels";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
  try {
    await connect();

    const hotels = await Hotel.find();
    return new NextResponse(JSON.stringify(hotels), { status: 200 });
  } catch (error: any) {
    console.error(error);
    return new NextResponse("Error fetching hotels" + error.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const newHotel = new Hotel(body);
    await newHotel.save();

    return new NextResponse(
      JSON.stringify({ message: "Hotel is created", hotel: newHotel }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return new NextResponse("Error creating hotel" + error.message, {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { hotelId, newName } = body;

    await connect();
    if (!hotelId || !newName) {
      return new NextResponse(JSON.stringify({ message: "Hotel not found" }), {
        status: 400,
      });
    }

    if (!Types.ObjectId.isValid(hotelId)) {
      return new NextResponse(JSON.stringify({ message: "Hotel not found" }), {
        status: 400,
      });
    }

    const updateHotel = await Hotel.findOneAndUpdate(
      { _id: new ObjectId(hotelId) },
      { name: newName },
      { new: true }
    );
    if (!updateHotel) {
      return new NextResponse(
        JSON.stringify({ message: "Update request failed with error" }),
        { status: 400 }
      );
    }
    return new NextResponse(
      JSON.stringify({
        message: "Update request succeeded",
        hotel: updateHotel,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return new NextResponse("Error creating hotel" + error.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const hotelId = searchParams.get("hotelId");

    await connect();

    if (!hotelId) {
      return new NextResponse(JSON.stringify({ message: "Hotel not found" }), {
        status: 400,
      });
    }

    if (!Types.ObjectId.isValid(hotelId)) {
      return new NextResponse(JSON.stringify({ message: "Hotel not found" }), {
        status: 400,
      });
    }

    const deletedHotel = await Hotel.findByIdAndDelete(
      new Types.ObjectId(hotelId)
    );

    if (!deletedHotel) {
      return new NextResponse(
        JSON.stringify({ message: "Hotel not found in database" }),
        { status: 400 }
      );
    }
    return new NextResponse(
      JSON.stringify({
        message: "Hotel deleted successfully",
        hotel: deletedHotel,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return new NextResponse("Error deleting hotel" + error.message, {
      status: 500,
    });
  }
};
