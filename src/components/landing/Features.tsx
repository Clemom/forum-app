import FeatureCard from "./FeatureCard"
import { ThumbsUp, MessageSquare, Shield } from "lucide-react"

const features = [
  {
    icon: ThumbsUp,
    title: "Votes simples",
    description: "Vote pour les posts que tu trouves pertinents. Le meilleur contenu remonte automatiquement."
  },
  {
    icon: MessageSquare,
    title: "Discussions claires",
    description: "Échange librement sur les sujets qui t’intéressent avec une interface fluide et moderne."
  },
  {
    icon: Shield,
    title: "Sécurité et respect",
    description: "Chaque utilisateur garde le contrôle de ses données. Un environnement sûr et propre."
  },
]

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold text-center">Pourquoi utiliser notre forum ?</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  )
}
