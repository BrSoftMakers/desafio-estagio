"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({ children }) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('@token:auth') : null;

  useEffect(() => {
    if (!token) {
      redirect("/");
    }
  }, [token]);

  return <div>{children}</div>;
}
