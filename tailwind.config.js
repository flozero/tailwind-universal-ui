/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      ring: "var(--ring)",
      chart1: "var(--chart-1)",
      chart2: "var(--chart-2)",
      chart3: "var(--chart-3)",
      chart4: "var(--chart-4)",
      chart5: "var(--chart-5)",
      radius: "var(--radius)",
      muted: {
        "DEFAULT": "var(--muted)",
        foreground: "var(--muted-foreground)"
      },
      popover: {
        DEFAULT: "var(--popover)",
        foreground: "var(--popover-foreground)"
      },
      card: {
        DEFAULT: "var(--card)",
        foreground: "var(--card-foreground)"
      },
      border: "var(--border)",
      input: "var(--input)",
      primary: {
        DEFAULT: "var(--primary)",
        foreground: "var(--primary-foreground)"
      },
      secondary: {
        DEFAULT: "var(--secondary)",
        foreground: "var(--secondary-foreground)"
      },
      accent: {
        DEFAULT: "var(--accent)",
        foreground: "var(--accent-foreground)"
      },
      destructive: {
        DEFAULT: "var(--destructive)",
        foreground: "var(--destructive-foreground)"
      }
    }
  },
  plugins: [],
}