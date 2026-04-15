import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import craftsmanship1 from "@/assets/craftsmanship-1.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import heroImage from "@/assets/hero-image.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";

const processSteps = [
  {
    number: "01",
    title: "Source",
    subtitle: "The Raw Truth",
    description:
      "We travel to the origin. Loro Piana mills in Biella. Cashmere plateaus of Inner Mongolia. Tanneries of Tuscany. Every fibre is chosen by hand — because luxury begins where shortcuts end.",
    image: collection1,
  },
  {
    number: "02",
    title: "Pattern",
    subtitle: "The Blueprint",
    description:
      "Our master patternmakers draft each piece from zero. No generic blocks, no borrowed silhouettes. Every curve and seam exists for a reason — proportion, drape, movement.",
    image: collection2,
  },
  {
    number: "03",
    title: "Construct",
    subtitle: "By Hand, Always",
    description:
      "40+ hours per garment. Hand-felled seams. Buttonholes stitched one at a time. The kind of work that machines can replicate but never equal.",
    image: craftsmanship1,
  },
  {
    number: "04",
    title: "Refine",
    subtitle: "The Final 10%",
    description:
      "Steam-pressed on century-old forms. Every garment individually numbered. The last step takes the longest — because we believe perfection hides in the margins.",
    image: collection3,
  },
];

const materials = [
  { name: "Loro Piana Wool", origin: "Biella, Italy", quality: "Super 150s Virgin Wool" },
  { name: "Mongolian Cashmere", origin: "Inner Mongolia", quality: "Grade A, 14.5 Micron" },
  { name: "Belgian Linen", origin: "Kortrijk, Belgium", quality: "Stone-Washed, Heritage Weave" },
  { name: "Full-Grain Calfskin", origin: "Tuscany, Italy", quality: "Vegetable-Tanned, 2mm" },
  { name: "Melton Wool", origin: "Yorkshire, England", quality: "32oz, Double-Milled" },
  { name: "Italian Suede", origin: "Solofra, Italy", quality: "Reverse Calfskin, Hand-Finished" },
];

const stats = [
  { value: "40+", label: "Hours Per Garment" },
  { value: "12", label: "Countries Sourcing" },
  { value: "6", label: "Master Artisans" },
  { value: "0", label: "Machines Used" },
];

const SplitText = ({ text, className }: { text: string; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.03, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const Atelier = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative h-[100vh] overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img src={craftsmanship1} alt="The Atelier" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12"
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[10px] tracking-ultra uppercase text-accent font-body mb-6"
          >
            Craftsmanship — Since 2024
          </motion.p>

          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] font-light leading-[0.85] tracking-tight text-foreground mb-8">
            <SplitText text="The" />
            <br />
            <span className="italic">
              <SplitText text="Atelier" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-muted-foreground font-body text-sm max-w-lg leading-relaxed"
          >
            Where intention becomes fabric. Where heritage meets the hand. Every stitch is a decision — and we don't make decisions lightly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute right-6 md:right-12 bottom-28 hidden md:block"
          >
            <p className="text-[10px] tracking-ultra uppercase text-foreground/30 font-body [writing-mode:vertical-rl] rotate-180">
              Scroll to discover
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats band */}
      <section className="border-y border-border/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </section>

      {/* Philosophy statement */}
      <PhilosophySection />

      {/* Process Steps — alternating immersive sections */}
      {processSteps.map((step, i) => (
        <ProcessStep key={step.number} step={step} index={i} />
      ))}

      {/* Materials */}
      <MaterialsSection />

      {/* Closing statement */}
      <section className="py-28 md:py-40 px-6 md:px-12 border-t border-border/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[15vw] font-light text-foreground/[0.02] tracking-tight leading-none whitespace-nowrap">
            MAISON
          </span>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.2] tracking-tight"
          >
            We don't make <span className="italic text-accent">clothes</span>.
            <br />
            We make <span className="italic">time stand still</span>.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border/20 pt-12">
          <div>
            <p className="text-[10px] tracking-ultra uppercase text-muted-foreground font-body mb-2">
              Experience the Craft
            </p>
            <h3 className="font-display text-2xl md:text-4xl font-light text-foreground">
              Shop what we <span className="italic">make</span>.
            </h3>
          </div>
          <Link
            to="/shop"
            className="group flex items-center gap-3 text-[11px] tracking-ultra uppercase font-body text-foreground hover:text-accent transition-colors border border-border/30 hover:border-accent/40 px-8 py-4"
          >
            <span>Enter the Shop</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const StatItem = ({ stat, index }: { stat: (typeof stats)[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="py-12 md:py-16 text-center border-r border-border/20 last:border-r-0"
    >
      <p className="font-display text-4xl md:text-5xl font-light text-foreground mb-2">{stat.value}</p>
      <p className="text-[10px] tracking-ultra uppercase text-muted-foreground font-body">{stat.label}</p>
    </motion.div>
  );
};

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] tracking-ultra uppercase text-accent font-body mb-8">
            Our Philosophy
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-[1.3] mb-10">
            We believe the most powerful garment is the one you don't notice until it's{" "}
            <span className="italic text-accent">gone</span>.
          </h2>
          <div className="luxury-divider mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              The atelier was founded on a single conviction: that quiet excellence will always outlast noise. We don't chase trends. We don't follow calendars. We build garments that exist outside of time — pieces that feel as right in ten years as they do today.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Every material is sourced at origin. Every pattern is drafted from zero. Every seam is finished by hand. This isn't efficiency — it's devotion. Because we believe that when you wear something made with genuine care, you carry that intention with you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessStep = ({
  step,
  index,
}: {
  step: (typeof processSteps)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  const isEven = index % 2 === 0;

  return (
    <section ref={ref} className="border-t border-border/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Image */}
        <div
          ref={imgRef}
          className={`relative overflow-hidden ${isEven ? "" : "lg:order-2"}`}
        >
          <motion.img
            style={{ scale: imgScale }}
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover min-h-[50vh] lg:min-h-full"
          />
          <div className="absolute inset-0 bg-background/15" />

          {/* Giant step number */}
          <div className="absolute top-8 left-8 pointer-events-none">
            <span className="font-display text-[10rem] md:text-[14rem] font-light leading-none text-foreground/[0.05]">
              {step.number}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-24 ${isEven ? "" : "lg:order-1"}`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] tracking-ultra uppercase text-accent font-body mb-6">
              Step {step.number}
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mb-3 tracking-tight">
              {step.title}
            </h2>
            <p className="font-display text-xl italic text-muted-foreground mb-8">
              {step.subtitle}
            </p>
            <div className="luxury-divider mb-8" />
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-md">
              {step.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MaterialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12 border-t border-border/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
        >
          <div>
            <p className="text-[10px] tracking-ultra uppercase text-muted-foreground font-body mb-4">
              What We Work With
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
              Our <span className="italic">Materials</span>
            </h2>
          </div>
          <div className="luxury-divider hidden md:block" />
        </motion.div>

        <div className="space-y-0 border-t border-border/20">
          {materials.map((mat, i) => (
            <motion.div
              key={mat.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/20 hover:border-accent/30 transition-colors cursor-default"
            >
              <div>
                <h3 className="font-display text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                  {mat.name}
                </h3>
              </div>
              <div>
                <p className="text-[10px] tracking-ultra uppercase text-muted-foreground font-body">
                  {mat.origin}
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-muted-foreground font-body text-xs">{mat.quality}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Atelier;
