import type { Config } from "@react-router/dev/config";
import { projects } from "./app/content/projects";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,

  async prerender() {
    return ["/", ...projects.map((project) => `/work/${project.slug}`)]
  }
} satisfies Config;
