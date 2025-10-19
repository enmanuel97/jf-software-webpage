import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">JF Software</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformando ideas en soluciones digitales innovadoras que impulsan el éxito de tu negocio.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#servicios" className="hover:text-secondary transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-secondary transition-colors">
                  Aplicaciones Móviles
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-secondary transition-colors">
                  Diseño UI/UX
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-secondary transition-colors">
                  Branding
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Empresa</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#nosotros" className="hover:text-secondary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-secondary transition-colors">
                  Nuestro Proceso
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-secondary transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Portafolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Santo Domingo, República Dominicana</li>
              <li>
                <a href="mailto:info@jfsoftware.com" className="hover:text-secondary transition-colors">
                  info@jfsoftware.com
                </a>
              </li>
              <li>
                <a href="tel:+18099060295" className="hover:text-secondary transition-colors">
                  +1 (809) 906-0295
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} JF Software. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
