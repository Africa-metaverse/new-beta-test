/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

if (typeof window !== "undefined" && window.ethereum) {
  console.log("Ethereum wallet detected!");
} else {
  console.log("No Ethereum wallet found.");
}