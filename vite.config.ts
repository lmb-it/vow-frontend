import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import { resolve } from "path";

const FRONTEND_ROOT = __dirname;
const VOW_ROOT = resolve(FRONTEND_ROOT, "../");

export default defineConfig({
    plugins: [tailwindcss(), react()],
    // Env files live one level up, shared between frontend builds.
    // Vite still only exposes VITE_* keys to client code.
    envDir: resolve(FRONTEND_ROOT, '../env'),
    define: {
        'process.env': {}
    },
    build: {
        chunkSizeWarningLimit: 5000,
    },
    server: {
        watch: {
            usePolling: true
        },
        fs: {
            strict: true,
            allow: [
                FRONTEND_ROOT,
                VOW_ROOT,
            ],
        },
    },
    resolve: {
        preserveSymlinks: true,
        extensions: [
            ".web.ts", ".web.tsx",
            ".ts", ".tsx",
            ".js", ".jsx"
        ],
        alias: {
            react: resolve(__dirname, "node_modules/react"),
            "react-dom": resolve(__dirname, "node_modules/react-dom"),
            "react/jsx-runtime": resolve(__dirname, "node_modules/react/jsx-runtime"),
            "react-native": "react-native-web",
            "lucide-react-native": "lucide-react",
            "@lmb-it/kitsconcerto": "@lmb-it/kitsconcerto-web",
            'Assets': resolve(__dirname, 'src/Assets'),
            'Components': resolve(__dirname, 'src/Components'),
            'Modules': resolve(__dirname, 'src/Modules'),
            'Pages': resolve(__dirname, 'src/Pages'),
            'Localization': resolve(__dirname, 'src/Localization'),
            'Hooks': resolve(__dirname, 'src/Hooks'),
            'Routes': resolve(__dirname, 'src/Routes'),
            'Tools': resolve(__dirname, 'src/Tools'),
            'Services': resolve(__dirname, 'src/Services'),
            'Redux': resolve(__dirname, 'src/Redux'),
            'Types': resolve(__dirname, 'src/Types')
        }
    },
})