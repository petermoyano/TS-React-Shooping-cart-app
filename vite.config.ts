/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        watch: { usePolling: true },
    },
    optimizeDeps: { disabled: false },
    plugins: [react()],
    test: {
        environment: "jsdom",
        globals: true,
    },
});
