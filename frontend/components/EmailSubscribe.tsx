"use client";

import { FormEvent, useState } from "react";

export function EmailSubscribe() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[456px] items-center overflow-hidden rounded-full bg-white pl-6 pr-1.5 shadow-sm"
    >
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        className="min-w-0 flex-1 bg-transparent py-4 text-xl text-black placeholder:text-black/40 outline-none"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-[#fe4d00] px-6 py-2.5 text-xl text-white transition-colors hover:bg-[#e54500]"
      >
        Subscribe
      </button>
    </form>
  );
}
