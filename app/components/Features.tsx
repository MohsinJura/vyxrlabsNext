// components/Features.tsx
import { Rocket, Code, Zap } from "lucide-react"

const features = [
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: "Fast Performance",
    desc: "Next.js automatically optimizes pages for speed and SEO.",
  },
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Developer Friendly",
    desc: "Built with modern tools like React, TypeScript, and Tailwind.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Full Stack Ready",
    desc: "Easily add APIs, authentication, and server components.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-12">
          Why Choose Emansite
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
