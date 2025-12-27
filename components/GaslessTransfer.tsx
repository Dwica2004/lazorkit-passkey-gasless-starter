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
    <div className="mt-4 rounded-lg bg-zinc-800 p-3 text-sm">
      <h3 className="font-medium mb-2">Gasless Transfer (Stub)</h3>

      <input
        className="w-full mb-2 rounded bg-zinc-900 p-2 text-xs"
        placeholder="Recipient address"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <input
        className="w-full mb-2 rounded bg-zinc-900 p-2 text-xs"
        placeholder="Amount (e.g. 1 USDC)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        disabled
        className="w-full rounded bg-indigo-600 py-2 text-xs opacity-60"
      >
        Send (Stub)
      </button>

      <p className="mt-2 text-xs text-zinc-400">
        This is a demo stub showing where a gasless transaction
        would be triggered using Lazorkit Paymaster.
      </p>
    </div>
  );
}
