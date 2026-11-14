import {
  isRouteErrorResponse,
  Links,
  Meta,
  Scripts,
  useNavigationType,
} from "react-router";

import { Header } from "./components/layout/Header"

import type { Route } from "./+types/root";
import "@fontsource-variable/geist"
import "@fontsource-variable/geist-mono"
import "./app.css";
import { ViewTransition, useState, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import { useLocation, useOutlet } from "react-router";
import { flipRects } from "./lib/flip";

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
            <Header />
            {children}
        
        <Scripts />
      </body>
    </html>
  );
}

const scrollPositions = new Map<string, number>()

function FrozenOutlet() {
  const outlet = useOutlet()
  const location = useLocation()
  const navigationType = useNavigationType()
  const [frozen] = useState(outlet)

  useLayoutEffect(() => {
    const saved = scrollPositions.get(location.key)
    if (navigationType !== "POP" || saved === undefined) return
    window.scrollTo(0, saved)
  }, [])

  return frozen;
}

export default function App() {
  const location = useLocation()

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual"
    const key = location.key
    return () => {
      scrollPositions.set(key, window.scrollY)

      flipRects.clear()
      document.querySelectorAll<HTMLElement>("[data-flip]").forEach((el) => {
        const id = el.dataset.flip;
        if (id) flipRects.set(id, el.getBoundingClientRect())
      })
    }
  }, [location.key])
  return (
    <AnimatePresence 
      mode="wait" 
      initial={false}
      onExitComplete={() => {
          if (window.location.hash) return;
          window.scrollTo(0, 0)
        }}
    >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{opacity: 1, y: 0 }}
        exit ={{ opacity: 0 }}
        
        transition={{ duration: 0.3, ease: "easeOut"}}
      >
        <FrozenOutlet />
      </motion.div>
    </AnimatePresence>
  );
}


export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
