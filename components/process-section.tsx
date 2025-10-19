import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, FileText, Code2, Rocket } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Descubrimiento",
      description: "Analizamos tus necesidades y objetivos para entender tu visión y crear la estrategia perfecta.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Planificación",
      description: "Diseñamos la arquitectura y el flujo de trabajo, definiendo cada detalle del proyecto.",
    },
    {
      number: "03",
      icon: Code2,
      title: "Desarrollo",
      description: "Construimos tu solución con las mejores prácticas y tecnologías más modernas del mercado.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Lanzamiento",
      description: "Desplegamos tu proyecto y brindamos soporte continuo para garantizar su éxito.",
    },
  ]

  return (
    <section id="proceso" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nuestro Proceso</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Cómo trabajamos contigo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un proceso probado que garantiza resultados excepcionales en cada proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="bg-card relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 -mr-4 -mt-4">
                  {step.number}
                </div>
                <CardContent className="p-6 lg:p-8 relative">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
