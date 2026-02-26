import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import portraitImg from "@/assets/portrait-4.jpg";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted mb-12 -mt-8 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            src={portraitImg}
            alt="Mohammad Amin Rezaie"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />

        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground animate-slide-down">
              <span className="font-semibold text-lg text-accent">Web Designer</span> • English Graduate • Scholar • Translator
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight animate-slide-down">
              Mohammad Amin{" "}
              <span className="text-accent">Rezaie</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              I do website & Webstore building & updating paired with full support after delivery. I also do social media post creation.                    
            </p>
          </div>

          <div className="flex flex-row items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <a href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105">
                Get in Touch
              </Button>
            </a>
            <Button
              variant="outline"
              className="animate-gentle-bounce rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium text-muted-foreground transition-all hover:scale-105"
              onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Works
              <ArrowDown className="w-4 h-4 animate-[bounce_2s_infinite]" />
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;