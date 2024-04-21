"use client";

import { FormEvent, useState } from "react";

interface FormProps {
  action?: any;
}

export const Form = ({ action }: FormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    action(email, password);
  };

  return (
    <form action={action} onSubmit={onSubmit} className="flex flex-col gap-1">
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" />
    </form>
  );
};
