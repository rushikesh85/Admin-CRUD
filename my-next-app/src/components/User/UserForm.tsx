'use client';

import { useState } from "react";

export type FormData = {
  id: number;
  name: string;
  email: string;
  password: string;
  description: string;
};

type UserFormProps = {
  onRegister: (data: FormData) => void;
};

export default function UserForm({ onRegister }: UserFormProps) {
  const [formData, setFormData] = useState<Omit<FormData, "id">>({
    name: "",
    email: "",
    password: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister({ ...formData, id: Date.now() }); // Pass data to parent/admin
    setFormData({
      name: "",
      email: "",
      password: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Query</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
