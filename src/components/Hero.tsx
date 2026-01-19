import { ChevronRight } from "lucide-react";

const valueProps = [
  "Grow Revenue",
  "Enhance Experience",
  "Expand Margin",
  "Reduce Risk",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-8">
            Create New Value with{" "}
            <span className="text-gradient">AI-First Innovation</span>
          </h1>

          {/* Value propositions */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-12">
            {valueProps.map((prop, index) => (
              <div key={prop} className="flex items-center">
                <span className="text-primary font-medium text-sm md:text-base">
                  {prop}
                </span>
                {index < valueProps.length - 1 && (
                  <span className="ml-3 md:ml-4 h-4 w-px bg-primary/50" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#projects"
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium text-foreground hover:text-primary transition-colors group"
          >
            Realize Your True North
            <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <ChevronRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute right-20 top-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-40 bottom-40 w-48 h-48 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;