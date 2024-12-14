'use client';

import React from "react";
import { FormData } from "@/components/User/UserForm";

type ResolvedProps = {
  users: FormData[];
};

export default function Resolved({ users }: ResolvedProps) {
  return (
    <div>
      <h1>Resolved Dashboard</h1>
      <div>
        {users.length === 0 ? (
          <p>No resolved users yet.</p>
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
              <p>Status: Resolved</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
