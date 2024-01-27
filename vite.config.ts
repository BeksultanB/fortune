import react from '@vitejs/plugin-react-swc'
import path from 'path'

import { defineConfig } from 'vite'
// import z from 'zod'

// const envSchema = z.object({
//     VITE_APP_VERSION: z.string(),
//     VITE_APP_GITHUB_LINK: z.string().url(),
//     VITE_APP_RELEASES_LINK: z.string().url(),
// })

// https://vitejs.dev/config/
export default defineConfig(() => {
    // Validate env
    // const env = Object.assign({}, process.env, loadEnv(mode, process.cwd()))
    // envSchema.parse(env)

    return {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "shared/styles/vars/temp.scss";`, // автоматически импортируйте ваш глобальный файл с переменными
                },
            },
        },
        plugins: [react()],
        resolve: {
            alias: {
                app: path.resolve(__dirname, './src/app'),
                processes: path.resolve(__dirname, './src/processes'),
                pages: path.resolve(__dirname, './src/pages'),
                widgets: path.resolve(__dirname, './src/widgets'),
                features: path.resolve(__dirname, './src/features'),
                entities: path.resolve(__dirname, './src/entities'),
                shared: path.resolve(__dirname, './src/shared'),
            },
        },
    }
})
