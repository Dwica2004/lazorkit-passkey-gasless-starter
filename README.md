# 🔐 Lazorkit Passkey & Gasless Starter

> A beautiful **Next.js** starter demonstrating **passkey-based authentication**, **smart wallet creation**, **session persistence**, and **gasless transactions** using **Lazorkit SDK** on **Solana Devnet**.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## ✨ Features

- 🔐 **Passkey Authentication** - Passwordless login using WebAuthn (OS-native authentication)
- 👛 **Smart Wallet Creation** - Automatic Solana wallet creation via Lazorkit
- ♻️ **Session Persistence** - Auto-reconnect on page reload
- ⛽ **Gasless Transactions** - Paymaster integration for fee-free transactions (demo stub)
- 🎨 **Modern UI** - Beautiful glassmorphism design with Tailwind CSS
- ⚡ **Next.js App Router** - Built with the latest Next.js architecture

---

## 🧱 Tech Stack

| Technology | Description |
|------------|-------------|
| **Next.js** | React framework with App Router |
| **React 19** | UI library |
| **Lazorkit Wallet SDK** | Solana smart wallet SDK |
| **Solana Web3.js** | Solana blockchain interaction |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **TypeScript** | Type-safe JavaScript |

---

## 📁 Project Structure

```
lazorkit-passkey-gasless-starter/
├── app/
│   ├── api/
│   │   └── gasless-transfer/
│   │       └── route.ts          # Gasless transaction API stub
│   ├── page.tsx                  # Main application page
│   ├── layout.tsx                # Root layout with metadata
│   ├── providers.tsx             # Lazorkit provider setup
│   └── globals.css               # Global styles & Tailwind imports
│
├── components/
│   ├── LoginButton.tsx           # Passkey login button
│   ├── WalletInfo.tsx            # Wallet address display
│   ├── GaslessTransfer.tsx       # Gasless transfer form (stub)
│   └── NotConnected.tsx          # Not connected state component
│
├── lib/
│   └── env.ts                    # Environment helpers
│
└── tutorials/
    ├── 01-passkey-wallet.md
    ├── 02-session-persistence.md
    └── 03-gasless-transaction.md
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- A modern browser with WebAuthn support (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Dwica2004/lazorkit-passkey-gasless-starter.git
cd lazorkit-passkey-gasless-starter
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SOLANA_RPC=https://api.devnet.solana.com
NEXT_PUBLIC_LAZORKIT_PORTAL=https://portal.lazor.sh
NEXT_PUBLIC_LAZORKIT_PAYMASTER=https://kora.devnet.lazorkit.com
```

> 💡 **Note:** No API key required for Devnet usage.

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🧪 Demo Flow

1. **Open the app** in your browser
2. **Click "Login with Passkey"** button
3. **Authenticate** using your OS passkey (Face ID, Touch ID, Windows Hello, etc.)
4. **Smart wallet is created** or restored automatically
5. **Wallet address is displayed** in the UI
6. **Gasless transfer section** becomes available (demo stub)

> ✨ **No browser extensions. No seed phrases. No manual gas fees.**

---

## 📝 Usage Notes

### Current Status

- ✅ **Production Ready:** Passkey authentication and wallet creation
- 🚧 **Demo Mode:** Gasless transaction logic is a stub
- 🎯 **Purpose:** Starter template for developers to extend

### What's Included

- Complete passkey authentication flow
- Smart wallet creation and management
- Session persistence (auto-reconnect)
- Beautiful modern UI with glassmorphism effects
- Type-safe TypeScript implementation
- Clean, maintainable code structure

### What's Not Included (Stub)

- Real gasless transaction execution
- Token balance fetching
- Token transfer functionality
- Production Paymaster integration

---

## 🚀 Possible Extensions

Here are some ideas to extend this starter:

- 💰 **Real Token Transfers** - Implement SOL or SPL token transfers
- 📊 **Balance Display** - Show wallet balance and token holdings
- 🔔 **Transaction History** - Display past transactions
- 💳 **Payment Flows** - Build subscription or one-time payment flows
- 🌐 **Mainnet Deployment** - Deploy to Solana Mainnet with production Paymaster
- 🎨 **Additional UI Components** - Add more wallet management features
- 🔐 **Multi-Device Support** - Manage passkeys across devices
- 📱 **Mobile Optimization** - Enhance mobile experience

---

## 📚 Resources

- **Lazorkit Documentation** - [https://docs.lazorkit.com](https://docs.lazorkit.com)
- **Lazorkit GitHub** - [https://github.com/lazor-kit/lazor-kit](https://github.com/lazor-kit/lazor-kit)
- **Solana Documentation** - [https://docs.solana.com](https://docs.solana.com)
- **Next.js Documentation** - [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS Documentation** - [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Dwica2004/lazorkit-passkey-gasless-starter/issues).

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ⭐ Show Your Support

If you find this project helpful, please consider giving it a star on GitHub!

---

**Made with ❤️ using Lazorkit and Next.js**
