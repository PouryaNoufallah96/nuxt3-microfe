import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
  experimental: {
    asyncEntry: true,
  },
  vite: {
    plugins: [
      federation({
        name: "remote",
        filename: "remoteEntry.js",
        exposes: {
          "./navbar": "./components/Navbar",
        }
      }),
    ],
    build: {
      target: "esnext",
      minify: false,
      cssCodeSplit: true,
    },
  },
});
