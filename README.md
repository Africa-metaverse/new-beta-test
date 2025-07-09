# Abstract Global Wallet with Next.js

This example showcases how to use the Abstract Global Wallet react SDK inside a [Next.js](https://nextjs.org/) application.

## Local Development

1. Get a copy of the `agw-nextjs` example directory from the Abstract Examples repository:

   ```bash
   mkdir -p agw-nextjs && curl -L https://codeload.github.com/Abstract-Foundation/examples/tar.gz/main | tar -xz --strip=2 -C agw-nextjs examples-main/agw-nextjs && cd agw-nextjs
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the development server

   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## Useful Links

- [Docs](https://docs.abs.xyz/)
- [Official Site](https://abs.xyz/)
- [GitHub](https://github.com/Abstract-Foundation)
- [X](https://x.com/AbstractChain)
- [Discord](https://discord.com/invite/abstractchain)

# How to Run the App Locally

## 1. Install Dependencies

```
npm install
```

or if you use pnpm:

```
pnpm install
```

## 2. Set Up Environment Variables

Create a `.env.local` file in the project root with the following (replace with your real keys):

```
OPENAI_API_KEY=your-openai-key
REPLICATE_API_TOKEN=your-replicate-token
PINATA_API_KEY=your-pinata-key
PINATA_API_SECRET=your-pinata-secret
```

**Do NOT commit your real API keys to the codebase!**

## 3. Run the Development Server

```
npm run dev
```

or

```
pnpm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

---

## Production Build

```
npm run build
npm start
```

---

## Notes
- Make sure you have Node.js 18+ installed.
- If you see errors about missing dependencies, run `npm install` or `pnpm install` again.
- If you want to deploy, use Vercel or another Next.js-compatible host.

Next.js has been successfully updated to the latest version!

**What to do next:**
1. Run your development server:
   ```sh
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser to check that everything works.
3. If you encounter any issues or errors, let me know and I’ll help you resolve them.

Would you like to proceed with starting the development server, or do you need help with anything else?

---

## How to Fix

1. **Navigate to your project directory first:**
   ```sh
   cd /Users/classic/ai-nft-app
   ```

2. **Then run the dev server:**
   ```sh
   npm run dev
   ```

---

**Summary:**  
Always run project commands from your project’s root directory, not from your home directory.

Let me know if you need more help!

---

## **Step-by-Step Fix**

### 1. **Open Terminal**

If it’s not already open, open the Terminal app.

---

### 2. **Go to Your Project Directory**

Type this command and press Enter:
```sh
cd /Users/classic/ai-nft-app
```
This moves you into your project folder, where your `package.json` and scripts are.

---

### 3. **Check for the `dev` Script**

You can check if the `dev` script exists by running:
```sh
npm run
```
You should see `dev` listed in the output.

---

### 4. **Start the Development Server**

Now run:
```sh
npm run dev
```
This will start your Next.js app.

---

### 5. **Open Your Browser**

Go to [http://localhost:3000](http://localhost:3000) to view your app.

---

## **Summary**

- Always run `npm run dev` from inside your project directory, not your home directory.
- If you see “Missing script: dev”, it means you’re in the wrong folder.

---

**If you follow these steps and still see an error, please copy the full error message here and I’ll help you further!**

Here’s how to run your app on your computer and access it in your browser:

---

## 1. **Open Terminal**

- On your Mac, open the Terminal app.

---

## 2. **Navigate to Your Project Directory**

If your project is in `/Users/classic/ai-nft-app`, run:
```sh
<code_block_to_apply_changes_from>
```

---

## 3. **Install Dependencies**

If you haven’t already, install all required packages:
```sh
npm install
```
or, if you use pnpm:
```sh
pnpm install
```

---

## 4. **Start the Development Server**

Run:
```sh
npm run dev
```
or, if you use pnpm:
```sh
pnpm run dev
```

---

## 5. **Open Your Browser**

- After running the dev server, you’ll see output like:
  ```
  Local: http://localhost:3000
  ```
- Open your browser and go to:  
  [http://localhost:3000](http://localhost:3000)

> If port 3000 is in use, Next.js will use the next available port (e.g., 3001, 3002, etc.).  
> Check your terminal for the exact link if it’s not 3000.

---

## 6. **(Optional) Access from Other Devices on Your Network**

- Use the "Network" address shown in your terminal, e.g.:
  ```
  Network: http://192.168.x.x:3000
  ```
- Open that link on your phone or another computer on the same WiFi.

---

**That’s it!**  
If you see any errors or issues, copy the error message here and I’ll help you fix them.  
If you want to deploy your app online (e.g., with Vercel), let me know!
