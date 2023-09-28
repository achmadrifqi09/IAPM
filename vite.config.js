import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
    plugins: [
        laravel(
            {
                input: ["resources/css/app.css", "resources/js/app.jsx"],
                ssr: "resources/js/ssr.jsx",
                refresh: true,
            },

            react()
        ),
        esbuildCommonjs(),
        viteCompression({
            algorithm: "gzip",
        }),
    ],
    ssr: {
        noExternal: ["laravel-vite-plugin"],
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                },
            },
        },
    },
});
