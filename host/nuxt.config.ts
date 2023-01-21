import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
  experimental: {
    asyncEntry: true,
  },
  vite: {
    plugins: [
      federation({
        name: "host",
        filename: "remoteEntry.js",
        exposes:{},
        remotes: {
          remote: "http://localhost:5001/assets/remoteEntry.js",
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
