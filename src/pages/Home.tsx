import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
        <Hero />
        <Features />
        <Footer />
    </main>
  )
}
