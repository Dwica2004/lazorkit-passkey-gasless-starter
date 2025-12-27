"use client";

import { useState } from "react";
import { useWallet } from "@lazorkit/wallet";

type LazorWallet = {
  address?: string;
};

export function GaslessTransfer() {
  const wallet = useWallet() as unknown as LazorWallet;

  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  // kalau belum connect, jangan render
  if (!wallet.address) return null;

  return (
    <div className="rounded-xl bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 p-5 text-sm shadow-lg hover:border-zinc-600/50 transition-colors">
      <h3 className="font-semibold mb-5 text-base flex items-center gap-2.5">
        <div className="relative">
          <span className="w-2 h-2 rounded-full bg-purple-400 block" />
          <span className="absolute inset-0 w-2 h-2 rounded-full bg-purple-400 animate-ping opacity-75" />
        </div>
        Gasless Transfer (Stub)
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Recipient Address</label>
          <input
            className="w-full rounded-lg bg-zinc-900/80 border border-zinc-700/50 p-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-zinc-500 hover:border-zinc-600/70"
            placeholder="Enter recipient address"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Amount</label>
          <input
            className="w-full rounded-lg bg-zinc-900/80 border border-zinc-700/50 p-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-zinc-500 hover:border-zinc-600/70"
            placeholder="e.g. 1 USDC"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          disabled
          className="w-full rounded-lg bg-gradient-to-r from-indigo-600/60 to-purple-600/60 py-3 text-xs font-medium opacity-60 cursor-not-allowed shadow-md border border-indigo-500/20"
        >
          Send (Stub)
        </button>

        <div className="mt-4 pt-3 border-t border-zinc-700/30">
          <p className="text-xs text-zinc-500 leading-relaxed">
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Demo stub
            </span>
            <br />
            <span className="text-zinc-600">This would trigger a gasless transaction using Lazorkit Paymaster.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
