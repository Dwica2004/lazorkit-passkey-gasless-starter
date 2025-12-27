# Tutorial 01: Creating a Passkey-Based Wallet on Solana

In this tutorial, we demonstrate how to create a Solana smart wallet
using Lazorkit without requiring users to install any browser wallet
or manage seed phrases.

## Overview

The wallet is created using WebAuthn (passkey) triggered directly
from the browser through Lazorkit's wallet adapter.

## Flow

User clicks "Login with Passkey"  
→ Browser triggers WebAuthn  
→ Lazorkit creates a smart wallet  
→ Wallet address is returned to the app

## Key Code

```ts
const { connect } = useWallet();
await connect();
