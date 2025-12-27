"use client";

import { useEffect } from "react";
import { useWallet } from "@lazorkit/wallet";
import { LoginButton } from "@/components/LoginButton";
import { WalletInfo } from "@/components/WalletInfo";
import { NotConnected } from "@/components/NotConnected";
import { GaslessTransfer } from "@/components/GaslessTransfer";
import { STORAGE_KEYS } from "@/lib/env";

export default function Home() {
  // 1️⃣ ambil wallet
  const wallet = useWallet() as any;

  // 2️⃣ tentukan connected
  const connected = !!wallet?.address;

  // ✅ 3️⃣ useEffect DI SINI
  useEffect(() => {
    const hasConnected =
      localStorage.getItem(STORAGE_KEYS.HAS_CONNECTED);

    if (hasConnected && !connected) {
      wallet.connect?.().catch(() => {});
    }
  }, [connected, wallet]);

  // 4️⃣ return UI
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur p-6 shadow-xl">
  
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Lazorkit Passkey Demo
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Passwordless Solana smart wallet using passkeys & gasless transactions.
          </p>
        </div>
  
        {/* Divider */}
        <div className="mb-6 h-px bg-zinc-800" />
  
        {/* Not connected */}
        {!connected && (
          <div className="space-y-4">
            <NotConnected />
            <LoginButton />
          </div>
        )}
  
        {/* Connected */}
        {connected && (
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Connected
            </div>
  
            <WalletInfo />
            <GaslessTransfer />
          </div>
        )}
      </div>
    </main>
  );
  
}
