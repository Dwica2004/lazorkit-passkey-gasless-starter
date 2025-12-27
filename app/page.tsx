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
    <main className="min-h-screen flex items-center justify-center text-white relative z-10 px-4 py-8">
      <div className="w-full max-w-md rounded-3xl border border-zinc-700/60 bg-zinc-900/90 backdrop-blur-xl p-8 shadow-2xl shadow-black/50 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
  
        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2.5 mb-4 justify-center">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping opacity-75" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Passkey Portal
              </h1>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
              Passwordless Solana smart wallet using passkeys & gasless transactions.
            </p>
          </div>
    
          {/* Divider */}
          <div className="mb-8 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
    
          {/* Not connected */}
          {!connected && (
            <div className="space-y-6">
              <NotConnected />
              <LoginButton />
            </div>
          )}
    
          {/* Connected */}
          {connected && (
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 text-xs font-semibold text-green-400 shadow-lg shadow-green-500/10 backdrop-blur-sm">
                <div className="relative">
                  <span className="h-2 w-2 rounded-full bg-green-400 block" />
                  <span className="absolute inset-0 h-2 w-2 rounded-full bg-green-400 animate-ping opacity-75" />
                </div>
                Connected
              </div>
    
              <WalletInfo />
              <GaslessTransfer />
            </div>
          )}
        </div>
      </div>
    </main>
  );
  
}
