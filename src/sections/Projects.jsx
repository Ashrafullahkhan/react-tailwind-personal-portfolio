import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Epic Estates — Web & Mobile",
    description:
      "Full responsive Angular web app plus React Native (Expo) mobile apps on Google Play and the App Store. Worked with a team of 5+ developers for a seamless cross-platform experience.",
    image: "/projects/project1.png",
    tags: ["Angular", "React Native", "Expo", "REST APIs"],
    link: "https://epicestates.us/",
    github: "#",
  },
  {
    title: "Cosmos Clinical — Clinical Dashboard",
    description:
      "Large-scale clinical frontend with 17+ developers: Angular components from complex Figma designs, with strong focus on UI performance, accessibility, and pixel-perfect execution.",
    image: "/projects/project2.png",
    tags: ["Angular", "Figma", "Accessibility", "Agile"],
    link: "https://dev.cosmosclinical.com/#/login",
    github: "#",
  },
  {
    title: "Freelance — International Clients",
    description:
      "20+ projects via Fiverr and direct clients in fintech, e-commerce, education, and real estate—end-to-end builds, APIs, and UI delivery with consistent quality and deadlines.",
    image: "/projects/project3.png",
    tags: ["React", "Laravel", "PHP", "REST APIs"],
    link: "https://www.fiverr.com",
    github: "#",
  },
  {
    title: "Swipen — Payment Solution",
    description:
      "UK-based fintech: scalable backend services and APIs with Stripe and Twilio integrations, built with security and performance best practices alongside a small team.",
    image: "/projects/project4.png",
    tags: ["Laravel", "Stripe", "Twilio", "APIs"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Selected builds spanning enterprise Angular frontends, cross-platform
            mobile, fintech backends, and international freelance deliveries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    {...(project.link.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    {...(project.github.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`Source for ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
