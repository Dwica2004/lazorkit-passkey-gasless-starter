# 🔐 Lazorkit Passkey & Gasless Starter

Passwordless Solana smart wallet demo using **Lazorkit SDK**, **passkeys**, and **gasless transactions**.

This project demonstrates how Web3 apps can onboard users **without browser wallets, seed phrases, or gas fees**, using OS-native authentication and smart wallets.

---

## ✨ Features

- 🔑 Passkey-based authentication (WebAuthn)
- 👛 Automatic Solana smart wallet creation
- ♻️ Session persistence (auto reconnect)
- ⛽ Gasless transaction flow (Paymaster – demo/stub)
- 🧼 Clean Next.js App Router structure
- 🌑 Dark / glass Web3 UI

---

## 🧱 Tech Stack

- Next.js (App Router)
- React
- Lazorkit Wallet SDK
- Solana Web3.js
- Tailwind CSS
- Solana Devnet

---

## 📁 Project Structure

app/
├─ page.tsx # Main UI
├─ layout.tsx # Root layout
├─ providers.tsx # Lazorkit provider
└─ api/gasless-transfer/
└─ route.ts # Gasless tx stub
components/
├─ LoginButton.tsx
├─ WalletInfo.tsx
├─ GaslessTransfer.tsx
└─ NotConnected.tsx
lib/
└─ env.ts
tutorials/
├─ 01-passkey-wallet.md
├─ 02-session-persistence.md
└─ 03-gasless-transaction.md


---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/lazorkit-passkey-gasless-starter
cd lazorkit-passkey-gasless-starter
npm install

🔐 Environment Setup

Create .env.local:

NEXT_PUBLIC_SOLANA_RPC=https://api.devnet.solana.com
NEXT_PUBLIC_LAZORKIT_PORTAL=https://portal.lazor.sh
NEXT_PUBLIC_LAZORKIT_PAYMASTER=https://kora.devnet.lazorkit.com


ℹ️ No API key required for Devnet usage.

▶️ Run Locally
npm run dev


Open:

http://localhost:3000

🧪 Demo Flow

Open the app

Click Login with Passkey

Authenticate using your OS passkey

Smart wallet is created or restored automatically

Wallet address is displayed

Gasless transfer section becomes available (demo)

No extensions. No seed phrase. No manual gas fees.

🧠 Notes

This is a demo / starter, not a production dApp

Gasless transfer logic is a stub

Designed for clarity and hackability

Ready to be extended by developers

🚀 Possible Extensions

Real SOL or SPL token transfers

Token balance display

Subscription or payment flows

Mainnet deployment with Paymaster

📚 Resources

Lazorkit Docs: https://docs.lazorkit.com

Lazorkit GitHub: https://github.com/lazor-kit/lazor-kit

📜 License

MIT