import { createAdmin } from '@/app/actions/actions';
import React from 'react';

const page = () => {
  return (
    <div className="mt-20 ">
      <form
        action={createAdmin}
        className="flex flex-col items-center justify-center gap-2"
      >
        <input
          type="email"
          className="border p-2"
          name="email"
          placeholder="Email"
        />

        <button type="submit" className="my-4 border p-2">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default page;
