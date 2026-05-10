import { Code2, Globe, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Global Clients",
    description:
      "Worked with teams and clients from the US, UK, and Canada on remote, agile engagements.",
  },
  {
    icon: Rocket,
    title: "Full Lifecycle Delivery",
    description:
      "End-to-end web and mobile delivery—from APIs and backends to polished UI and store releases.",
  },
  {
    icon: Users,
    title: "Communication",
    description:
      "Strong client handling, clear updates, and collaboration across time zones.",
  },
  {
    icon: Code2,
    title: "Quality & Reliability",
    description:
      "On-time, high-performing systems with a track record of client satisfaction.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a results-driven software developer and freelance engineer
                with 5+ years of experience designing, developing, and deploying
                scalable web and mobile applications. I've shipped work with
                international clients across the US and UK in pharmaceutical,
                fintech, and real estate domains.
              </p>
              <p>
                I'm highly proficient in full-stack development—Laravel and PHP
                on the backend; Angular, React, and React Native on the
                front—and I thrive in Agile environments delivering accessible,
                performant interfaces from complex Figma designs.
              </p>
              <p>
                I hold a Bachelor of Technology in Computer Science from Benawa
                Institute of Higher Education (2018–2022), Kandahar,
                Afghanistan.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I focus on timely delivery, clear communication, and solutions
                that scale—whether that's a clinical dashboard, a payment
                stack, or a cross-platform mobile app."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
