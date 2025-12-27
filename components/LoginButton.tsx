"use client";

import { useState } from "react";
import { useWallet } from "@lazorkit/wallet";
import { STORAGE_KEYS } from "@/lib/env";

export function LoginButton() {
  const { connect } = useWallet();
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      await connect();

      // Mark session as connected
      localStorage.setItem(STORAGE_KEYS.HAS_CONNECTED, "true");
    } catch (e) {
      console.warn("Passkey login pending / blocked");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={onLogin}
      disabled={loading}
      className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 font-medium disabled:opacity-60"
    >
      {loading ? "Connecting..." : "Login with Passkey"}
    </button>
  );
  
}
