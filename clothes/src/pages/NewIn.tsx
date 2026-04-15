import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProducts } from "@/data/products";

const newProducts = allProducts.filter((p) => p.tag === "New");
const heroProduct = allProducts[0]; // The Overcoat as hero feature

const editorialPicks = [
  {
    product: allProducts.find((p) => p.slug === "the-overcoat")!,
    label: "01 — The Statement",
    quote: "A coat that commands the room before you ever speak.",
  },
  {
    product: allProducts.find((p) => p.slug === "ivory-cable-knit")!,
    label: "02 — The Texture",
    quote: "Mongolian cashmere, hand-knitted into quiet luxury.",
  },
  {
    product: allProducts.find((p) => p.slug === "midnight-suit")!,
    label: "03 — The Silhouette",
    quote: "Cut from Super 150s — the suit that needs no introduction.",
  },
  {
    product: allProducts.find((p) => p.slug === "chelsea-boots")!,
    label: "04 — The Foundation",
    quote: "Three decades of cobbling tradition, distilled into one sole.",
  },
];

const SplitText = ({ text, className }: { text: string; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60 }}
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

const NewIn = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const editorialRef = useRef(null);
  const isEditorialInView = useInView(editorialRef, { once: true, margin: "-150px" });

  const marqueeRef = useRef(null);
  const isMarqueeInView = useInView(marqueeRef, { once: true });

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero — Full bleed cinematic */}
      <section ref={heroRef} className="relative h-[100vh] overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src={heroProduct.images[0]}
            alt="New Arrivals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12"
        >
          {/* Season badge */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] tracking-ultra uppercase text-accent font-body mb-6"
          >
            SS26 Collection — New Arrivals
          </motion.p>

          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] font-light leading-[0.85] tracking-tight text-foreground mb-8">
            <SplitText text="What's" />
            <br />
            <span className="italic">
              <SplitText text="New" />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-8"
          >
            <p className="text-muted-foreground font-body text-sm max-w-md leading-relaxed">
              The latest additions to our collection — each piece a quiet declaration of intent. Thoughtfully crafted, never rushed.
            </p>
            <Link
              to="/shop"
              className="group flex items-center gap-3 text-[11px] tracking-ultra uppercase font-body text-foreground hover:text-accent transition-colors"
            >
              <span>Shop All New</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Rotated side text */}
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

      {/* Scrolling text marquee */}
      <section ref={marqueeRef} className="py-10 border-y border-border/20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isMarqueeInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex animate-marquee whitespace-nowrap"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-12 font-display text-3xl md:text-5xl font-light text-foreground/[0.06] tracking-tight">
              New Arrivals — SS26 — Quiet Luxury — New Arrivals — SS26 — Quiet Luxury —
            </span>
          ))}
        </motion.div>
      </section>

      {/* Editorial Picks — Asymmetric layout */}
      <section ref={editorialRef} className="py-20 md:py-32 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isEditorialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto mb-20"
        >
          <p className="text-[10px] tracking-ultra uppercase text-muted-foreground font-body mb-4">
            Editor's Selection
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
              Pieces That <span className="italic">Speak</span>
            </h2>
            <div className="luxury-divider hidden md:block" />
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
          {editorialPicks.map((pick, i) => {
            const isEven = i % 2 === 0;
            return (
              <EditorialCard key={pick.product.slug} pick={pick} index={i} isEven={isEven} />
            );
          })}
        </div>
      </section>

      {/* New Products Grid */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <p className="text-[10px] tracking-ultra uppercase text-muted-foreground font-body mb-4">
                Just Landed
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
                All <span className="italic">New</span>
              </h2>
            </div>
            <Link
              to="/shop"
              className="group flex items-center gap-2 text-[10px] tracking-ultra uppercase text-foreground/40 hover:text-accent transition-colors font-body"
            >
              <span>View All</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {newProducts.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <StatementBand />

      <Footer />
    </main>
  );
};

const EditorialCard = ({
  pick,
  index,
  isEven,
}: {
  pick: (typeof editorialPicks)[0];
  index: number;
  isEven: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${isEven ? "" : "md:direction-rtl"}`}
    >
      {/* Image */}
      <div
        ref={imgRef}
        className={`${isEven ? "md:col-span-7" : "md:col-span-7 md:col-start-6"} relative overflow-hidden aspect-[3/4] group cursor-pointer`}
      >
        <Link to={`/product/${pick.product.slug}`}>
          <motion.img
            style={{ y: imgY }}
            src={pick.product.images[0]}
            alt={pick.product.name}
            className="w-full h-[110%] object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-colors duration-700" />

          {/* Giant index number */}
          <div className="absolute bottom-6 right-6 pointer-events-none">
            <span className="font-display text-[8rem] md:text-[12rem] font-light leading-none text-foreground/[0.04]">
              0{index + 1}
            </span>
          </div>

          {/* Tag */}
          <div className="absolute top-6 left-6">
            <span className="text-[9px] tracking-ultra uppercase font-body bg-accent text-accent-foreground px-3 py-1.5">
              {pick.product.tag}
            </span>
          </div>
        </Link>
      </div>

      {/* Text */}
      <div
        className={`${isEven ? "md:col-span-5" : "md:col-span-5 md:col-start-1 md:row-start-1"} flex flex-col justify-center`}
        style={{ direction: "ltr" }}
      >
        <p className="text-[10px] tracking-ultra uppercase text-accent font-body mb-6">
          {pick.label}
        </p>
        <Link to={`/product/${pick.product.slug}`}>
          <h3 className="font-display text-3xl md:text-5xl font-light text-foreground hover:text-accent transition-colors duration-500 mb-4">
            {pick.product.name}
          </h3>
        </Link>
        <p className="font-display text-lg md:text-xl italic text-muted-foreground mb-8 leading-relaxed">
          "{pick.quote}"
        </p>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
          {pick.product.shortDescription}
        </p>
        <div className="flex items-center gap-6">
          <span className="font-display text-2xl text-foreground">{pick.product.price}</span>
          {pick.product.originalPrice && (
            <span className="text-muted-foreground/50 line-through font-body text-sm">
              {pick.product.originalPrice}
            </span>
          )}
        </div>
        <div className="mt-8">
          <Link
            to={`/product/${pick.product.slug}`}
            className="group inline-flex items-center gap-3 text-[11px] tracking-ultra uppercase font-body text-foreground hover:text-accent transition-colors"
          >
            <span>Discover</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="luxury-divider mt-8" />
      </div>
    </motion.div>
  );
};

const ProductCard = ({ product, index }: { product: (typeof allProducts)[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/product/${product.slug}`} className="group block">
        <div className="relative overflow-hidden aspect-[3/4] mb-5">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-colors duration-700" />
          <div className="absolute top-4 left-4">
            <span className="text-[9px] tracking-ultra uppercase font-body bg-accent text-accent-foreground px-2.5 py-1">
              {product.tag}
            </span>
          </div>
          {/* Hover action */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <span className="flex items-center justify-center gap-2 bg-foreground text-background py-3 text-[10px] tracking-ultra uppercase font-body hover:bg-accent hover:text-accent-foreground transition-colors">
              View Details
              <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="font-display text-lg font-light text-foreground group-hover:text-accent transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-[10px] tracking-editorial uppercase text-muted-foreground font-body mt-1">
              {product.category}
            </p>
          </div>
          <span className="font-body text-sm text-foreground">{product.price}</span>
        </div>
      </Link>
    </motion.div>
  );
};

const StatementBand = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-36 px-6 md:px-12 border-t border-border/20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.2] tracking-tight"
        >
          New doesn't mean <span className="italic text-accent">loud</span>.
          <br />
          It means <span className="italic">considered</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default NewIn;
