// app/page.tsx
import Hero from "./components/Hero"
import Features from "./components/Features"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
    </main>
  )
}
