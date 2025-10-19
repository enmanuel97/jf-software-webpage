import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/modern-technology-abstract-digital-network-connect.jpg" alt="" className="w-full h-full object-cover opacity-10 dark:opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] z-[1]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Soluciones digitales de vanguardia</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-[1.1] tracking-tight">
            Transformamos ideas en{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary">
              experiencias digitales
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto">
            Creamos software innovador y diseños excepcionales que impulsan el crecimiento de tu negocio
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20" asChild>
              <a href="#contacto">
                Iniciar proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-12 bg-background/50 backdrop-blur-sm"
              asChild
            >
              <a href="#servicios">Explorar servicios</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
