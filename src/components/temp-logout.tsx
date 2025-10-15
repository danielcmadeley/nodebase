"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";

export const TempLogout = () => {
  return (
    <Button
      onClick={() => {
        authClient.signOut();
      }}
    >
      Logout
    </Button>
  );
};
