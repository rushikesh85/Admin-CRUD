'use client';

import React from "react";
import { FormData } from "@/components/User/UserForm";

type AdminProps = {
  users: FormData[];
  onDelete: (id: number) => void;
  onResolve: (id: number) => void;
};

export default function Admin({ users, onDelete, onResolve }: AdminProps) {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        {users.length === 0 ? (
          <p>No registered users yet.</p>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Query: {user.description}</p>
              <button onClick={() => onResolve(user.id)} style={{ marginRight: "1rem" }}>
                Resolve
              </button>
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
