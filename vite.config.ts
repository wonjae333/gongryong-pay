import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
plugins: [react()],
// HashRouter는 base URL이 필요 없음
base: "/gongryong-ticket/",
}));
