'use client';

import { adminSignup } from '@/app/actions/actions';
import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const SignupForm = () => {
  const [state, action] = useActionState(adminSignup, undefined);

  return (
    <div className="mt-20 ">
      <form
        action={action}
        className="flex flex-col items-center justify-center gap-2"
      >
        <input
          type="text"
          className="border p-2"
          name="name"
          placeholder="Name"
        />
        {state?.errors?.name && <p>{state.errors.name}</p>}
        <input
          type="email"
          className="border p-2"
          name="email"
          placeholder="Email"
        />
        {state?.errors?.name && <p>{state.errors.email}</p>}
        <input
          type="password"
          className="border p-2"
          name="password"
          placeholder="Password"
        />
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <SubmitButton />
        {/* <button type="submit" className="my-4 border p-2">
          CREATE ADMIN
        </button> */}
      </form>
    </div>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      Sign Up
    </button>
  );
}

export default SignupForm;
