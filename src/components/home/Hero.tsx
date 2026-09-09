import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { ArrowDown } from "lucide-react";

import heroAsset from "@/assets/hero-campus.jpg";

import { ArcPattern } from "@/components/brand/Brandmark";
import { LineReveal } from "@/components/motion/Reveal";
import { company } from "@/lib/site";

export function Hero() {
  const reduced = useReducedMotion();

  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 900],
    [0, 160],
  );

  const fade = useTransform(
    scrollY,
    [0, 620],
    [1, 0],
  );

  return (
    <section
      id="top"
      className="
        relative
        w-full
        overflow-hidden
        bg-core

        min-h-[calc(100svh-80px)]
        pt-20

        sm:min-h-[calc(100svh-88px)]
        sm:pt-[88px]

        lg:min-h-[calc(100svh-96px)]
        lg:pt-24
      "
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}

      <motion.div
        style={
          reduced
            ? undefined
            : { y }
        }
        className="
          absolute
          inset-0
          h-[118%]
        "
      >
        <img
          src={heroAsset}
          alt="A modern university campus at golden hour with a long reflecting pool"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="
            h-full
            w-full
            object-cover
          "
        />
      </motion.div>

      {/* =========================================
          OVERLAYS
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[#201A57]/65
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#201A57]/95
          via-transparent
          to-[#201A57]/50
        "
      />

      <ArcPattern
        className="text-[#3F80CF]"
        opacity={0.06}
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div
        className="
          shell
          relative
          z-10

          flex
          min-h-[calc(100svh-80px)]
          flex-col
          justify-center

          py-10

          sm:min-h-[calc(100svh-88px)]
          sm:py-12

          lg:min-h-[calc(100svh-96px)]
          lg:py-14
        "
      >
        {/* Eyebrow */}

        <motion.p
          initial={
            reduced
              ? false
              : { opacity: 0 }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          className="
            eyebrow
            text-[#3F80CF]
          "
        >
          {company.purpose}
        </motion.p>

        {/* Main Heading */}

        <h1
          className="
            mt-5

            max-w-[15ch]

            text-[3rem]
            font-extrabold
            leading-[0.95]

            text-white

            sm:text-[4rem]

            md:text-[5rem]

            lg:text-[5.8rem]

            xl:text-[6.4rem]
          "
        >
          <LineReveal
            delay={0.25}
            lines={[
              "Smarter Student",
              "Accommodation",
              "Operations",
            ]}
            lineClassName="
              text-white
              font-extrabold
            "
          />
        </h1>

        {/* Bottom hero content */}

        <div
          className="
            mt-8

            grid

            gap-7

            border-t
            border-white/10

            pt-6

            lg:mt-9
            lg:grid-cols-[1fr_auto]
            lg:items-end
            lg:gap-10
            lg:pt-7
          "
        >
          {/* Subheadline */}

          <motion.p
            initial={
              reduced
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.75,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              max-w-xl

              text-base
              leading-relaxed

              text-white/85

              sm:text-lg

              lg:text-xl
            "
          >
            {company.subheadline}
          </motion.p>

          {/* CTAs */}

          <motion.div
            initial={
              reduced
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              flex
              flex-col
              gap-3

              sm:flex-row
              sm:flex-wrap
            "
          >
            <a
              href="#services"
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                rounded-full

                border
                border-active

                bg-active

                px-6
                py-3.5

                text-sm
                font-semibold

                text-white

                transition-all

                hover:bg-active/90
                hover:shadow-[0_0_20px_rgba(63,128,207,0.35)]

                sm:px-7
                sm:py-4
                sm:text-base
              "
            >
              Explore Services
            </a>

            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                rounded-full

                border
                border-white/20

                px-6
                py-3.5

                text-sm
                font-semibold

                text-white

                transition-all

                hover:bg-white/10

                sm:px-7
                sm:py-4
                sm:text-base
              "
            >
              View Our Work
            </a>
          </motion.div>
        </div>

        {/* Tagline */}

        <motion.p
          initial={
            reduced
              ? false
              : { opacity: 0 }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
          className="
            mt-6

            max-w-2xl

            text-sm
            leading-relaxed

            text-white/75

            sm:text-base
          "
        >
          {company.tagline}
        </motion.p>
      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}

      <motion.div
        style={
          reduced
            ? undefined
            : { opacity: fade }
        }
        className="
          absolute
          bottom-7
          right-6

          hidden
          items-center
          gap-2

          text-[0.6875rem]
          uppercase
          tracking-[0.18em]

          text-white/50

          lg:flex
        "
      >
        Scroll

        <ArrowDown className="h-3.5 w-3.5" />
      </motion.div>
    </section>
  );
}