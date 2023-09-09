import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import react from "@vitejs/plugin-react";

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
    ],
    ssr: {
        noExternal: ["laravel-vite-plugin", "@inertiajs/react/server"],
    },
});
