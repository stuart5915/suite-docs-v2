---
sidebar_position: 2
title: "👨‍💻 Developer Guide"
---

# 👨‍💻 Developer Guide

**Complete documentation for building apps on SUITE**

---

## Development Workflow

### 1. App Creation
Use `/create-app` to scaffold a new Expo project with SUITE-ready configuration.

### 2. Iterative Building
Queue prompts with `/addition` to have Cadence AI implement features.

### 3. Local Testing
Run `npx expo start` and test on physical devices via Expo Go.

### 4. Publishing
Submit with `/publish` for review and App Store listing.

---

## Project Structure

```
apps/YourApp/
├── App.tsx           # Main entry point
├── app.json          # Expo configuration
├── package.json      # Dependencies
├── assets/           # Images, fonts
└── src/
    ├── screens/      # Screen components
    ├── components/   # Reusable components
    ├── hooks/        # Custom hooks
    └── utils/        # Helper functions
```

---

## Integrating SUITE Payments

```typescript
import { useSUITE } from '@suite/sdk';

function PayButton() {
  const { pay, balance } = useSUITE();
  
  const handlePurchase = async () => {
    await pay({
      amount: 10,  // SUITE tokens
      reason: 'Premium feature unlock'
    });
  };
  
  return <Button onPress={handlePurchase}>Buy (10 SUITE)</Button>;
}
```

---

## Best Practices

✅ **Keep apps focused** — Do one thing well

✅ **Mobile-first design** — Test on real devices

✅ **Handle offline states** — Users may have spotty connections

✅ **Use SUITE for payments** — Don't build custom payment flows

✅ **Document your app** — Good descriptions get more downloads

---

[🚀 Back to Quick Start](/build/quickstart)
