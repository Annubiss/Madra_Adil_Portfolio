import type { Config } from "@react-router/dev/config";
import { projects } from "./app/content/projects";

export default {
  ssr: false,

  async prerender() {
    const englishPaths = ["/", ...projects.map((project) => `/work/${project.slug}`)];
    const romanianPaths = englishPaths.map((path) => (path === "/" ? "/ro" : `/ro${path}`));
    return [...englishPaths, ...romanianPaths];
  },
} satisfies Config;