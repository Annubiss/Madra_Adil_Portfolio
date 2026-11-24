import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route(":lang?", "routes/home.tsx"), 
    route(":lang?work/:slug", "routes/work.$slug.tsx")
] satisfies RouteConfig;
