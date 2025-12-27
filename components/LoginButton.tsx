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
      className="group w-full rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 px-6 py-3.5 font-semibold disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Connecting...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Login with Passkey
          </>
        )}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </button>
  );
  
}
