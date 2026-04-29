import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";

function getGithubPagesBase() {
  const homepage = packageJson.homepage;

  if (!homepage) {
    return "/";
  }

  try {
    const { pathname } = new URL(homepage);
    return pathname.endsWith("/") ? pathname : `${pathname}/`;
  } catch {
    return "/";
  }
}

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? getGithubPagesBase() : "/",
}));
