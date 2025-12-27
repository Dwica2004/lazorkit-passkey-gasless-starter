"use client";

import { useWallet } from "@lazorkit/wallet";

type LazorWalletAny = any;

export function WalletInfo() {
  const wallet = useWallet() as LazorWalletAny;

  if (!wallet || !wallet.address) return null;

  return (
    <div className="rounded-lg bg-zinc-800 p-3 text-sm">
      <p className="text-zinc-400 mb-1">Wallet Address</p>
      <code className="break-all text-xs text-indigo-300">
        {wallet.address}
      </code>
    </div>
  );
}
