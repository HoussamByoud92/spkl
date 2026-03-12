import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sparkle Beauty Empire</h3>
            <p className="text-sm opacity-80">
              Sparkle spa the beauty empire est l'adresse incontournable pour un moment de détente avec nos services de hammam, massage ou encore soin de visage. Sans oublier la partie coiffure, esthétique, onglerie, maquillage, maquillage permanent ....
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#nails" className="hover:text-accent transition-colors">
                  Nail Art
                </Link>
              </li>
              <li>
                <Link href="/services#lashes" className="hover:text-accent transition-colors">
                  Lash Extensions
                </Link>
              </li>
              <li>
                <Link href="/services#makeup" className="hover:text-accent transition-colors">
                  Makeup
                </Link>
              </li>
              <li>
                <Link href="/services#spa" className="hover:text-accent transition-colors">
                  Spa
                </Link>
              </li>
              <li>
                <Link href="/services#hair" className="hover:text-accent transition-colors">
                  Hair
                </Link>
              </li>
              <li>
                <Link href="/services#aesthetic" className="hover:text-accent transition-colors">
                  Aesthetic
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>quartier racine Casablanca</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>05 22 99 40 66</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>contact@sparklebeautyempire.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; 2026 Sparkle Beauty Empire. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
