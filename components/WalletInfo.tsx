"use client";

import { useWallet } from "@lazorkit/wallet";

type LazorWalletAny = any;

export function WalletInfo() {
  const wallet = useWallet() as LazorWalletAny;

  if (!wallet || !wallet.address) return null;

  return (
    <div className="rounded-xl bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 p-5 text-sm shadow-lg hover:border-zinc-600/50 transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Wallet Address</p>
      </div>
      <code className="break-all text-xs text-indigo-300 font-mono bg-zinc-900/70 px-4 py-3 rounded-lg block border border-zinc-700/40 hover:border-indigo-500/30 transition-colors">
        {wallet.address}
      </code>
    </div>
  );
}
