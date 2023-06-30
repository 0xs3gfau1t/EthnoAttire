import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    console.log(env.VITE_BACKEND_PORT)
    return defineConfig({
        plugins: [react()],
        server: {
            host: env.VITE_HOST || 'localhost',
            port: env.VITE_PORT,
            proxy: {
                '/api': {
                    target: `http://${env.VITE_BACKEND_HOST || 'localhost'}:${
                        env.VITE_BACKEND_PORT || 3000
                    }`,
                    changeOrigin: true,
                },
            },
        },
    })
}
