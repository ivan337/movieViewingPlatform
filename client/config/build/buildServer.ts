import {Configuration as DevServerConfiguration} from "webpack-dev-server"
import {BuildOptions} from "./types/types"

export function buildServer({mode, port}: BuildOptions): DevServerConfiguration {
    const isDev = mode === 'development'

    return isDev ? {
        port: port,
        open: true,
        static: './dist',
    } : undefined
}