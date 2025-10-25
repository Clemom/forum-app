export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Forum. Tous droits réservés.</p>
        <nav className="flex gap-4">
          <a href="/about">À propos</a>
          <a href="/contact">Contact</a>
          <a href="/legal">Mentions légales</a>
        </nav>
      </div>
    </footer>
  )
}
