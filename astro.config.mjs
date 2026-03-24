import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"
import react from "@astrojs/react"
import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
    server: { port: 4500 },
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [icon(), react()],
    adapter: node({
        mode: "standalone",
    }),
    output: "server",
})
