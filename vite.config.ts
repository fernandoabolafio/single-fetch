import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import envOnly from "vite-env-only";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools";

export default defineConfig({
	plugins: [
		envOnly(),
		tsconfigPaths(),
		remixDevTools(),
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
				unstable_singleFetch: true,
			},
		}),
	],
});
