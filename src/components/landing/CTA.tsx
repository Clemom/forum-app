import { Button } from "../ui/button"

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h3 className="text-2xl font-bold">Prêt à poster ton premier sujet ?</h3>
      <p className="mt-2 text-muted-foreground">Crée un compte et lance ton débat.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button asChild><a href="/login">Commencer</a></Button>
        <Button variant="outline" asChild><a href="#features">Voir les features</a></Button>
      </div>
    </section>
  )
}
