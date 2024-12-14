'use client';

import { useState } from "react";
import UserForm, { FormData } from "@/components/User/UserForm";
import Admin from "@/components/Admin/Admin";
import Resolved from "@/components/Admin/Resoved";

export default function HomePage() {
  const [users, setUsers] = useState<FormData[]>([]);
  const [resolvedUsers, setResolvedUsers] = useState<FormData[]>([]);

  const handleRegister = (userData: FormData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };

  const handleDelete = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleResolve = (id: number) => {
    const resolvedUser = users.find((user) => user.id === id);
    if (resolvedUser) {
      setResolvedUsers((prevResolved) => [...prevResolved, resolvedUser]);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }
  };

  return (
    <div>
      <h1>User Management System</h1>
      <UserForm onRegister={handleRegister} />
      <Admin users={users} onDelete={handleDelete} onResolve={handleResolve} />
      <Resolved users={resolvedUsers} />
    </div>
  );
}
