
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-3/5 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <div className="font-mono text-muted-foreground mb-2">Hi, my name is</div>
              <div className="text-foreground">George Mounir</div>
              <div className="text-primary mt-2">Flutter Developer</div>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 mb-8 max-w-xl">
              I build exceptional mobile applications that deliver outstanding 
              user experiences across platforms. Specializing in healthcare, ERP, 
              and logistics solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-semibold">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary animate-fade-in animation-delay-300">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGUghCqL_iUmw/profile-displayphoto-shrink_200_200/B4DZYXwfKuHIAc-/0/1744155309692?e=1750291200&v=beta&t=5YZMRkShwPj5ug-9BSYbvFPVcsrTp8Tu7UKasZT8Gko"
                alt="George Mounir"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="animate-bounce rounded-full bg-primary/10 p-2 transition-colors duration-300 hover:bg-primary/20"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
