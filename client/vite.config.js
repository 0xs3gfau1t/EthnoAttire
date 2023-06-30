import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return defineConfig({
        plugins: [react()],
        server: {
            host: env.BACKEND_HOST || 'localhost',
            port: env.PORT,
            proxy: {
                '/api': {
                    target: `http://${env.BACKEND_HOST || 'localhost'}:${
                        env.BACKEND_PORT || 3000
                    }`,
                },
            },
        },
    })
}
