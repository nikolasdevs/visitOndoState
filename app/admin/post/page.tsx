import { createAccommodation } from '@/app/actions/actions';
import React from 'react';

const page = ({ userId }: { userId: string }) => {
  return (
    <div className="mt-20 ">
      <form
        action={createAccommodation}
        className="flex flex-col items-center justify-center gap-2"
      >
        {/* Hidden input for userId */}
        <input type="hidden" name="userId" value={userId} />{' '}
        {/* Set userId value */}
        <input
          type="text"
          className="border p-2"
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          className="border p-2"
          name="address"
          placeholder="Address"
        />
        <input
          type="text"
          className="border p-2"
          name="city"
          placeholder="City"
        />
        <input
          type="text"
          className="border p-2"
          name="state"
          placeholder="State"
        />
        <input
          type="text"
          className="border p-2"
          name="country"
          placeholder="Country"
        />
        <select name="type" className="border p-2">
          <option value="HOTEL">HOTEL</option>
          <option value="MOTEL">MOTEL</option>
          <option value="APARTMENT">APARTMENT</option>
        </select>
        <button className="my-4 border p-2">CREATE</button>
      </form>
    </div>
  );
};
export default page;
