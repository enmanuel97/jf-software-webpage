import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Mail, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
          <div className="relative p-8 lg:p-16">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">¿Listo para comenzar tu proyecto?</h2>
              <p className="text-lg lg:text-xl text-primary-foreground/90 text-pretty">
                Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos digitales. Nuestro equipo está listo
                para transformar tu visión en realidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="text-base">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar mensaje
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar ahora
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2 justify-center">
                  <Mail className="h-4 w-4" />
                  <span>info@jfsoftware.com</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="h-4 w-4" />
                  <span>+1 (809) 906-0295</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
