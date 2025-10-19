import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Layout, Palette, Package, Code } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Sitios web modernos, responsivos y optimizados para SEO que convierten visitantes en clientes.",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps nativas y multiplataforma para iOS y Android con experiencias de usuario excepcionales.",
    },
    {
      icon: Code,
      title: "Aplicaciones Web",
      description: "Sistemas web robustos y escalables adaptados a las necesidades específicas de tu negocio.",
    },
    {
      icon: Layout,
      title: "Landing Pages",
      description: "Páginas de aterrizaje optimizadas para conversión que impulsan tus campañas de marketing.",
    },
    {
      icon: Palette,
      title: "Diseño Gráfico",
      description: "Diseños creativos y profesionales que comunican la esencia de tu marca de forma visual.",
    },
    {
      icon: Package,
      title: "Branding",
      description: "Identidad de marca completa que diferencia tu negocio y conecta con tu audiencia.",
    },
  ]

  return (
    <section id="servicios" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/abstract-technology-circuit-board-digital-network-.jpg"
          alt=""
          className="w-full h-full object-cover opacity-5 dark:opacity-[0.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-balance tracking-tight">
            Soluciones completas para tu negocio
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Desde ideas brillantes hasta proyectos completos. Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
