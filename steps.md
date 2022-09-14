# check node version before running server!.7

```
node -v
nvm list
nvm use 18.17.0
```

create /style/tailwind.css  and add 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
add to tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```