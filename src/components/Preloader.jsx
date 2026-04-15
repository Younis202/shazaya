import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');
  const onCompleteRef = useRef(onComplete);
  const alreadyFiredRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 28 + 22;
        if (next >= 100) {
          clearInterval(interval);

          if (!alreadyFiredRef.current) {
            alreadyFiredRef.current = true;
            setTimeout(() => setPhase('revealing'), 150);
            setTimeout(() => {
              setPhase('done');
              onCompleteRef.current?.();
            }, 950);
          }

          return 100;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const num = Math.min(Math.round(progress), 100).toString().padStart(3, '0');

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <>
          <motion.div
            className="fixed top-0 right-0 w-1/2 h-full z-[100]"
            style={{ backgroundColor: 'hsl(36 18% 5%)' }}
            initial={{ x: 0 }}
            animate={phase === 'revealing' ? { x: '100%' } : { x: 0 }}
            transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1] }}
          />
          <motion.div
            className="fixed top-0 left-0 w-1/2 h-full z-[100]"
            style={{ backgroundColor: 'hsl(36 18% 5%)' }}
            initial={{ x: 0 }}
            animate={phase === 'revealing' ? { x: '-100%' } : { x: 0 }}
            transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1] }}
          />
          <motion.div
            className="fixed inset-0 z-[101] flex flex-col items-center justify-center pointer-events-none"
            animate={phase === 'revealing' ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="font-display leading-none select-none tabular-nums absolute"
              style={{
                fontSize: 'clamp(6rem, 14vw, 14rem)',
                fontWeight: 300,
                color: 'hsl(36 20% 90% / 0.04)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {num}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.4em' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display absolute"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                fontWeight: 300,
                color: 'hsl(36 20% 90%)',
              }}
            >
              شذايا
            </motion.h1>

            <div className="absolute bottom-24 w-48 md:w-64">
              <div className="relative overflow-hidden" style={{ height: '1px', backgroundColor: 'hsl(36 10% 16%)' }}>
                <motion.div
                  className="absolute top-0 right-0 h-full"
                  style={{
                    width: `${Math.min(progress, 100)}%`,
                    background: 'linear-gradient(90deg, hsl(38 58% 52%), hsl(42 68% 68%))',
                  }}
                  transition={{ ease: 'linear' }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 font-body text-center"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'hsl(36 10% 50%)',
                }}
              >
                عطور فاخرة — ٢٠٢٦
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
