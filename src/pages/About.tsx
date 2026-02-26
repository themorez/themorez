import Header from "@/components/Header";
import { Mail, GraduationCap, Briefcase, BookOpen, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            English Graduate • Scholar • Translator • Web Designer
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-up stagger-2">
            I work at the intersection of literary studies, critical theory, and translation—supported by a strong background in academic research and English language teaching.
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <BookOpen className="w-7 h-7" /> Bio
          </h2>
          <p>
            I'm an M.A. graduate in English Language and Literature with experience in teaching, academic writing, 
            and English↔Persian translation. I enjoy close reading, theory-informed interpretation, and research-based 
            writing—especially where literature, philosophy, and cultural studies overlap.
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>Thesis focus: mysticism and poetic subjectivity in Rumi & Emily Dickinson (Lacanian approach).</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>Translation work includes philosophy and humanities texts (e.g., parts of the Stanford Encyclopedia of Philosophy).</span>
            </li>
          </ul>
        </section>

        {/* Skills & Languages */}
        <section className="mb-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-card p-8">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>Independent academic research & writing</li>
              <li>Critical thinking and speculating</li>
              <li>English ↔ Persian translation</li>
              <li>English & Persian essay writing</li>
              <li>Web design (WordPress / WooCommerce)</li>
              <li>Basic computer, web, and social media skills</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-card p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Languages className="w-6 h-6" /> Languages
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong>English</strong> — Fluent (IELTS Band 7)</li>
              <li><strong>Persian</strong> — Native</li>
              <li><strong>Arabic</strong> — Reading knowledge</li>
              <li><strong>French</strong> — Basic reading</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-7 h-7" /> Education
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl bg-muted p-8">
              <p className="text-sm text-muted-foreground mb-1">2021 – Present</p>
              <h3 className="text-xl font-semibold mb-2">Ph.D. Candidate — English Language and Literature</h3>
              <p className="text-muted-foreground">Science and Research Branch, Islamic Azad University (SRBIAU), Tehran</p>
            </div>
            <div className="rounded-2xl bg-muted p-8">
              <p className="text-sm text-muted-foreground mb-1">Sep 2018 – Aug 2021</p>
              <h3 className="text-xl font-semibold mb-2">M.A. in English Language and Literature</h3>
              <p className="text-muted-foreground mb-2">University of Guilan, Rasht, Iran</p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>– GPA: 17.38/20 (Excellent)</li>
                <li>– Thesis: "Mystical elements in Rumi's & Emily Dickinson's poetry: a Lacanian approach"</li>
                <li>– Thesis grade: 19.25/20 (Excellent)</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-muted p-8">
              <p className="text-sm text-muted-foreground mb-1">Sep 2013 – Feb 2018</p>
              <h3 className="text-xl font-semibold mb-2">B.A. in English Language and Literature</h3>
              <p className="text-muted-foreground mb-2">Hakim Sabzevari University, Sabzevar, Iran</p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>– GPA: 14.45/20 (Good)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-7 h-7" /> Experience
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl bg-card p-8">
              <p className="text-sm text-muted-foreground mb-1">2020 – Present</p>
              <h3 className="text-xl font-semibold mb-2">Freelance Web Designer</h3>
              <p className="text-muted-foreground mb-2">Independent</p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>– Design and build e-commerce websites using WordPress and WooCommerce.</li>
                <li>– Deliver responsive, user-friendly storefronts for small businesses.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-card p-8">
              <p className="text-sm text-muted-foreground mb-1">2017 – 2018</p>
              <h3 className="text-xl font-semibold mb-2">English Teacher (Pre-Intermediate & Intermediate)</h3>
              <p className="text-muted-foreground mb-2">Shokouh Institute of Language Learning, Gonābād, Iran</p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>– Taught pre-intermediate and intermediate English classes.</li>
                <li>– Prepared lesson plans and classroom activities aligned with student level and goals.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-card p-8">
              <p className="text-sm text-muted-foreground mb-1">2014 – Present</p>
              <h3 className="text-xl font-semibold mb-2">Freelance Translator (English → Persian)</h3>
              <p className="text-muted-foreground mb-2">Independent</p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>– Translated a wide range of topics, including parts of the Stanford Encyclopedia of Philosophy.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-card p-8">
              <p className="text-sm text-muted-foreground mb-1">2015 – 2016</p>
              <h3 className="text-xl font-semibold mb-2">Freelance Writer (English)</h3>
              <p className="text-muted-foreground mb-2">Various weblogs</p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>– Wrote articles for blogs across different topics in English.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            For teaching opportunities, translation work, academic collaboration, or editorial projects—feel free to reach out.
          </p>
          <a href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default About;
