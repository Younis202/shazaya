import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProducts } from "@/data/products";

import categoryOuterwear from "@/assets/category-outerwear.jpg";
import categoryKnitwear from "@/assets/category-knitwear.jpg";
import categoryTailoring from "@/assets/category-tailoring.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const collections = [
  {
    name: "Outerwear",
    tagline: "Armour for the modern man",
    description: "Coats and jackets in Loro Piana wool, double-faced cashmere, and Melton cloth. Engineered to outlive every season.",
    image: categoryOuterwear,
    count: allProducts.filter((p) => p.category === "Outerwear").length,
    filter: "Outerwear",
  },
  {
    name: "Knitwear",
    tagline: "Softness as a philosophy",
    description: "Hand-knitted Mongolian cashmere, extra-fine merino, and heritage cable patterns. Warmth that whispers.",
    image: categoryKnitwear,
    count: allProducts.filter((p) => p.category === "Knitwear").length,
    filter: "Knitwear",
  },
  {
    name: "Tailoring",
    tagline: "The precision of silence",
    description: "Half-canvas suits, linen shirts, and worsted trousers. Every stitch placed with intention, every line considered.",
    image: categoryTailoring,
    count: allProducts.filter((p) => p.category === "Tailoring").length,
    filter: "Tailoring",
  },
  {
    name: "Accessories",
    tagline: "The finishing gesture",
    description: "Full-grain leather, Italian suede, inner Mongolian cashmere scarves. The details that complete the story.",
    image: categoryAccessories,
    count: allProducts.filter((p) => p.category === "Accessories").length,
    filter: "Accessories",
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

const Collections = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[85vh] overflow-hidden flex items-end">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-background/60 z-10" />
          {/* Large ghosted text */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <span className="font-display text-[20vw] font-light text-foreground/[0.03] tracking-tight leading-none select-none">
              004
            </span>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-30 px-6 md:px-12 pb-16 md:pb-24 w-full"
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[10px] tracking-ultra uppercase text-accent font-body mb-6"
          >
            4 Worlds — {allProducts.length} Pieces
          </motion.p>

          <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-light leading-[0.85] tracking-tight text-foreground mb-8">
            <SplitText text="Shop by" />
            <br />
            <span className="italic">
              <SplitText text="World" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-muted-foreground font-body text-sm max-w-md leading-relaxed"
          >
            Four distinct universes, one shared philosophy — craft above trend, quality above quantity, silence above noise.
          </motion.p>
        </motion.div>
      </section>

      {/* Collection Sections — Full bleed immersive */}
      {collections.map((col, i) => (
        <CollectionSection key={col.name} collection={col} index={i} />
      ))}

      {/* Bottom Statement */}
      <section className="py-24 md:py-36 px-6 md:px-12 border-t border-border/20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.2] tracking-tight"
          >
            Four worlds. One <span className="italic text-accent">language</span>.
          </motion.p>
        </div>
      </section>

      {/* All Products CTA */}
      <section className="pb-20 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border/20 pt-12">
          <div>
            <p className="text-[10px] tracking-ultra uppercase text-muted-foreground font-body mb-2">
              Complete Archive
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground">
              View All {allProducts.length} Pieces
            </h3>
          </div>
          <Link
            to="/shop"
            className="group flex items-center gap-3 text-[11px] tracking-ultra uppercase font-body text-foreground hover:text-accent transition-colors border border-border/30 hover:border-accent/40 px-8 py-4 transition-all"
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

const CollectionSection = ({
  collection,
  index,
}: {
  collection: (typeof collections)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  const isEven = index % 2 === 0;
  const products = allProducts.filter((p) => p.category === collection.filter);

  return (
    <section ref={ref} className="border-t border-border/20">
      <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]`}>
        {/* Image */}
        <div
          ref={imgRef}
          className={`relative overflow-hidden ${isEven ? "" : "lg:order-2"}`}
        >
          <motion.img
            style={{ scale: imgScale, y: imgY }}
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover min-h-[50vh] lg:min-h-full"
          />
          <div className="absolute inset-0 bg-background/20" />

          {/* Giant number overlay */}
          <div className="absolute bottom-8 right-8 pointer-events-none">
            <span className="font-display text-[10rem] md:text-[14rem] font-light leading-none text-foreground/[0.05]">
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20 ${isEven ? "" : "lg:order-1"}`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] tracking-ultra uppercase text-accent font-body mb-6">
              Collection 0{index + 1}
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mb-4 tracking-tight">
              {collection.name}
            </h2>
            <p className="font-display text-xl italic text-muted-foreground mb-8">
              {collection.tagline}
            </p>
            <div className="luxury-divider mb-8" />
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-10 max-w-md">
              {collection.description}
            </p>

            {/* Mini product list */}
            <div className="space-y-0 mb-10 border-t border-border/20">
              {products.slice(0, 3).map((product, pi) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + pi * 0.1, duration: 0.6 }}
                >
                  <Link
                    to={`/product/${product.slug}`}
                    className="group flex items-center justify-between py-4 border-b border-border/20 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-14 object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                      <div>
                        <span className="font-display text-base text-foreground group-hover:text-accent transition-colors">
                          {product.name}
                        </span>
                        <p className="text-[10px] text-muted-foreground font-body">{product.material}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-body text-foreground/60">{product.price}</span>
                      <ArrowUpRight size={12} className="text-foreground/20 group-hover:text-accent transition-colors" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 text-[11px] tracking-ultra uppercase font-body text-foreground hover:text-accent transition-colors"
            >
              <span>Shop {collection.name} — {collection.count} Pieces</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
