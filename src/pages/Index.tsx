import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import ShowcaseCard from "@/components/ShowcaseCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { fetchPosts, stripHtml, formatDate, getFeaturedImage, getPostCategories } from "@/lib/wordpress";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowUpRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import screenshotRezaeiSaffron from "@/assets/screenshot-rezaei-saffron.png";
import screenshotRezaeiSaffronEn from "@/assets/screenshot-rezaei-saffron-en.png";
import screenshotGandomak from "@/assets/screenshot-gandomak.png";
import screenshotAcademiapen from "@/assets/screenshot-academiapen.png";
import screenshotTarjomeLand from "@/assets/screenshot-tarjome-land.png";
import screenshotPersonalProfile from "@/assets/screenshot-personal-profile.png";

const showcaseProjects = [
  {
    title: "Rezaei Saffron (Persian)",
    description: "E-commerce storefront showcasing saffron products with a clean catalog experience and product details.",
    image: screenshotRezaeiSaffron,
    url: "https://rezaei-saffron.ir/",
    label: "Web Store",
  },
  {
    title: "Rezaei Saffron (English)",
    description: "English version of the Rezaei Saffron store, serving international customers with the same polished experience.",
    image: screenshotRezaeiSaffronEn,
    url: "https://rezaei-saffron.ir/en/",
    label: "Web Store",
  },
  {
    title: "Gandomak Shop",
    description: "Online shop with product browsing and a simple purchase flow—built to be fast and mobile friendly.",
    image: screenshotGandomak,
    url: "https://gandomakshop.ir/",
    label: "Web Store",
  },
  {
    title: "AcademiaPen",
    description: "A professional academic writing service for humanities sciences—papers and theses written by humans.",
    image: screenshotAcademiapen,
    url: "https://academiapen.ir/",
    label: "Web Site",
  },
  {
    title: "Tarjome Land",
    description: "An AI-free translation service, done by a master's degree in English.",
    image: screenshotTarjomeLand,
    url: "https://tarjome-land.ir/",
    label: "Web Site",
  },
  {
    title: "Personal Profile",
    description: "Personal academic profile and portfolio website.",
    image: screenshotPersonalProfile,
    url: "https://maminrezaie.github.io",
    label: "Web Site",
  },
];

const Index = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["wp-posts-home"],
    queryFn: () => fetchPosts({ per_page: 6 })
  });

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20 sm:pt-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Showcase Section */}
        <section id="showcase" className="pt-0 pb-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Showcase</h2>
            <span className="text-sm font-medium text-muted-foreground px-4 py-2">
              Web Stores I've Built
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseProjects.map((project, index) => (
              <AnimateOnScroll key={project.title} delay={index * 100}>
                <ShowcaseCard {...project} />
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* Intro Section */}
        <IntroSection />

        {/* Featured Blog Posts */}
        <section id="articles" className="py-12">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Blog</h2>
            <a href="/blog" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-muted/60">
              View all →
            </a>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="aspect-[4/3] w-full rounded-[2.5rem]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.posts.map((post, index) => {
                const image = getFeaturedImage(post);
                const cats = getPostCategories(post);
                return (
                  <a
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className={`group relative block rounded-[2.5rem] overflow-hidden card-hover animate-slide-up stagger-${Math.min(index + 1, 6)}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-[2.5rem]">
                      {image ? (
                        <img
                          src={image}
                          alt={stripHtml(post.title.rendered)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">No image</span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                          {cats[0] && (
                            <span className="px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md bg-accent/80 text-accent-foreground">
                              {cats[0].name}
                            </span>
                          )}
                          <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white border border-white/30">
                            {formatDate(post.date)}
                          </span>
                        </div>

                        <div className="flex items-end justify-between gap-4">
                          <div className="flex-1">
                            <h3
                              className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight"
                              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-6 right-6 floating-button">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's connect.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Interested in collaboration, translation work, or academic projects? Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <button className="px-10 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 hover:scale-105 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="/#articles" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://t.me/maminre" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Telegram</a></li>
                <li><a href="https://instagram.com/maminrezai" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="https://x.com/AminReformist" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">X / Twitter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:m.amin.rezai@gmail.com" className="hover:text-accent transition-colors">m.amin.rezai@gmail.com</a></li>
                <li><a href="tel:+989150616788" className="hover:text-accent transition-colors">+98 915 061 6788</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Mohammad Amin Rezaie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
