import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  const values = [
    "Innovación constante en cada proyecto",
    "Compromiso con la calidad y excelencia",
    "Soluciones personalizadas para cada cliente",
    "Tecnologías modernas y actualizadas",
  ]

  return (
    <section id="nosotros" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Sobre Nosotros</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance leading-tight">
              Expertos en desarrollo de software
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos una empresa especializada en tecnología y desarrollo, ofreciendo una amplia gama de servicios. Nos
              destacamos en el desarrollo de aplicaciones personalizadas, diseño UI/UX, desarrollo web y móvil, y
              soluciones de software.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro enfoque es crear soluciones tecnológicas innovadoras y a medida para impulsar el crecimiento de
              nuestros clientes.
            </p>
            <div className="space-y-3 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 lg:p-8 space-y-2 bg-card hover:shadow-lg transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-primary">100+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Proyectos completados</div>
            </Card>
            <Card className="p-6 lg:p-8 space-y-2 bg-card hover:shadow-lg transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-primary">50+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Clientes satisfechos</div>
            </Card>
            <Card className="p-6 lg:p-8 space-y-2 bg-card hover:shadow-lg transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-primary">5+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Años de experiencia</div>
            </Card>
            <Card className="p-6 lg:p-8 space-y-2 bg-card hover:shadow-lg transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-primary">24/7</div>
              <div className="text-sm lg:text-base text-muted-foreground">Soporte técnico</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
