import { useState } from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ArrowLeft,
  ArrowRight,
  Star,
  MapPin,
  Globe,
} from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { ArcPattern } from "@/components/brand/Brandmark";

import {
  company,
  project,
  projectScope,
} from "@/lib/site";

import caseAsset from "@/assets/case-study.jpg";
import studentAsset from "@/assets/student-living.jpg";
import campusAsset from "@/assets/hero-campus.jpg";

function ProjectLightSweep() {
  return (
    <span
      aria-hidden="true"
      className="
        pointer-events-none

        absolute
        inset-y-0
        -left-1/2

        z-10
        w-1/3

        -translate-x-full
        -skew-x-12

        bg-gradient-to-r
        from-transparent
        via-white/[0.10]
        to-transparent

        opacity-0

        transition-[transform,opacity]
        duration-[1400ms]
        ease-out

        group-hover:translate-x-[520%]
        group-hover:opacity-100
      "
    />
  );
}

/* =========================================================
   CASE STUDY
========================================================= */

export function CaseStudy() {
  const reduced = useReducedMotion();

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden

        bg-background

        py-12

        sm:py-14
        md:py-16
        lg:py-20
        xl:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -right-[220px]
          top-[80px]

          h-[480px]
          w-[480px]

          rounded-full

          bg-[#3F80CF]/[0.06]

          blur-[125px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -left-[240px]
          bottom-[100px]

          h-[460px]
          w-[460px]

          rounded-full

          bg-[#6659CC]/[0.045]

          blur-[130px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1380px]

          px-4

          sm:px-5
          md:px-7
          lg:px-8
          xl:px-10
          2xl:px-0
        "
      >
        {/* =================================================
            MAIN TWO-COLUMN AREA
        ================================================== */}

        <div
          className="
            grid

            gap-8

            border-b
            border-white/10

            pb-10

            sm:gap-10
            sm:pb-12

            lg:grid-cols-[1.03fr_0.97fr]
            lg:items-start
            lg:gap-12

            xl:gap-14
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="min-w-0">
            {/* LABEL */}

            <Reveal>
              <div
                className="
                  inline-flex
                  items-center

                  gap-2.5

                  rounded-full

                  border
                  border-[#63AEFF]/25

                  bg-[#63AEFF]/[0.07]

                  px-4
                  py-2

                  backdrop-blur-sm
                "
              >
                <span
                  className="
                    h-[6px]
                    w-[6px]

                    shrink-0

                    rounded-full

                    bg-[#63AEFF]

                    shadow-[0_0_10px_rgba(99,174,255,0.85)]
                  "
                />

                <span
                  className="
                    text-[14px]

                    font-bold

                    tracking-[-0.01em]

                    text-white

                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  Our Projects &amp; Operations
                </span>
              </div>
            </Reveal>

            {/* MAIN HEADING */}

            <Reveal delay={0.08}>
              <h2
                className="
                  mt-5

                  max-w-[760px]

                  text-[2.1rem]

                  font-bold

                  leading-[1.04]

                  tracking-[-0.04em]

                  text-white

                  sm:text-[2.6rem]
                  md:text-[3rem]
                  lg:text-[3.35rem]
                  xl:text-[3.65rem]
                "
              >
                Thoughtfully Managed

                <span
                  className="
                    block
                    text-[#69AEF7]
                  "
                >
                  Student Accommodation
                </span>
              </h2>
            </Reveal>

            {/* DESCRIPTION */}

            <Reveal delay={0.12}>
              <p
                className="
                  mt-4

                  max-w-2xl

                  text-[14px]
                  leading-7

                  text-white/58

                  sm:text-[15px]

                  lg:text-[16px]
                  lg:leading-8
                "
              >
                {project.body}
              </p>
            </Reveal>

            {/* PROJECT SCOPE */}

            <Reveal delay={0.16}>
              <div
                className="
                  mt-5

                  border-l-[3px]
                  border-active

                  pl-4

                  sm:mt-6
                  sm:pl-5
                "
              >
                <p
                  className="
                    text-[11px]

                    font-bold
                    uppercase

                    tracking-[0.17em]

                    text-[#69AEF7]
                  "
                >
                  {project.subtitle}
                </p>

                <p
                  className="
                    mt-2

                    max-w-2xl

                    text-[14px]
                    leading-7

                    text-white/70

                    sm:text-[15px]
                  "
                >
                  {project.scope}
                </p>
              </div>
            </Reveal>
          </div>

          {/* =================================================
              RIGHT IMAGE GALLERY
              ALIGNED WITH MAIN HEADING
          ================================================== */}

          <div
            className="
              flex
              min-w-0
              flex-col

              gap-4

              sm:gap-5

              lg:mt-[60px]

              xl:mt-[60px]
            "
          >
            {/* =================================================
                ROW 1 — LARGE IMAGE
            ================================================== */}

            <Reveal>
              <motion.div
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0.7,
                        y: 18,
                        scale: 0.985,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 1.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -5,
                        transition: {
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                }
                className="
                  group
                  relative

                  h-[300px]
                  w-full

                  overflow-hidden

                  rounded-[22px]

                  border
                  border-white/10

                  bg-[#121217]

                  shadow-[0_22px_55px_rgba(0,0,0,0.17)]

                  sm:h-[350px]

                  lg:h-[310px]

                  xl:h-[330px]
                "
              >
                <ProjectLightSweep />

                <motion.img
                  src={caseAsset}
                  alt="Khalifa University student accommodation buildings"
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="
                    h-full
                    w-full

                    object-cover

                    transition-transform
                    duration-[1000ms]

                    group-hover:scale-[1.035]
                  "
                />

                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-t

                    from-[#11102f]/75
                    via-transparent
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute

                    bottom-4
                    left-4

                    rounded-full

                    border
                    border-white/15

                    bg-[#201A57]/75

                    px-4
                    py-2

                    text-[10px]

                    font-bold
                    uppercase

                    tracking-[0.16em]

                    text-white/80

                    backdrop-blur-lg

                    sm:bottom-5
                    sm:left-5
                  "
                >
                  Khalifa University
                </div>
              </motion.div>
            </Reveal>

            {/* =================================================
                ROW 2 — TWO IMAGES
            ================================================== */}

            <div
              className="
                grid
                grid-cols-1

                gap-4

                sm:grid-cols-2
                sm:gap-5
              "
            >
              {/* =============================================
                  STUDENT LIVING
              ============================================== */}

              <Reveal
                delay={0.1}
                className="h-full"
              >
                <motion.div
                  initial={
                    reduced
                      ? false
                      : {
                          opacity: 0.65,
                          x: -24,
                          y: 16,
                          scale: 0.98,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 1.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          y: -4,
                          transition: {
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }
                  }
                  className="
                    group
                    relative

                    h-[220px]

                    overflow-hidden

                    rounded-[20px]

                    border
                    border-white/10

                    bg-[#121217]

                    shadow-[0_12px_32px_rgba(0,0,0,0.12)]

                    sm:h-[220px]

                    lg:h-[185px]

                    xl:h-[200px]
                  "
                >
                  <ProjectLightSweep />

                  <motion.img
                    src={studentAsset}
                    alt="Student living space"
                    width={1408}
                    height={1008}
                    loading="lazy"
                    className="
                      h-full
                      w-full

                      object-cover

                      transition-transform
                      duration-[1000ms]

                      group-hover:scale-[1.05]
                    "
                  />

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      bg-gradient-to-t

                      from-[#11102f]/72
                      via-transparent
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute

                      bottom-3
                      left-3

                      rounded-full

                      border
                      border-white/10

                      bg-[#201A57]/70

                      px-3
                      py-1.5

                      backdrop-blur-lg

                      sm:bottom-4
                      sm:left-4
                    "
                  >
                    <span
                      className="
                        text-[9px]

                        font-bold
                        uppercase

                        tracking-[0.14em]

                        text-white/80

                        xl:text-[10px]
                      "
                    >
                      Student Living
                    </span>
                  </div>
                </motion.div>
              </Reveal>

              {/* =============================================
                  CAMPUS ENVIRONMENT
              ============================================== */}

              <Reveal
                delay={0.16}
                className="h-full"
              >
                <motion.div
                  initial={
                    reduced
                      ? false
                      : {
                          opacity: 0.65,
                          x: 24,
                          y: 16,
                          scale: 0.98,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 1.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          y: -4,
                          transition: {
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }
                  }
                  className="
                    group
                    relative

                    h-[220px]

                    overflow-hidden

                    rounded-[20px]

                    border
                    border-white/10

                    bg-[#121217]

                    shadow-[0_12px_32px_rgba(0,0,0,0.12)]

                    sm:h-[220px]

                    lg:h-[185px]

                    xl:h-[200px]
                "
              >
                  <ProjectLightSweep />

                  <motion.img
                    src={campusAsset}
                    alt="Campus architecture"
                    width={1920}
                    height={1088}
                    loading="lazy"
                    className="
                      h-full
                      w-full

                      object-cover

                      transition-transform
                      duration-[1000ms]

                      group-hover:scale-[1.05]
                    "
                  />

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      bg-gradient-to-t

                      from-[#11102f]/72
                      via-transparent
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute

                      bottom-3
                      left-3

                      rounded-full

                      border
                      border-white/10

                      bg-[#201A57]/70

                      px-3
                      py-1.5

                      backdrop-blur-lg

                      sm:bottom-4
                      sm:left-4
                    "
                  >
                    <span
                      className="
                        text-[9px]

                        font-bold
                        uppercase

                        tracking-[0.14em]

                        text-white/80

                        xl:text-[10px]
                      "
                    >
                      Campus Environment
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* =================================================
            OPERATIONAL SCOPE INTRO
        ================================================== */}

        <Reveal>
          <div
            className="
              mt-12

              grid

              gap-5

              sm:mt-14

              lg:grid-cols-[1fr_0.7fr]
              lg:items-end
              lg:gap-12

              xl:mt-16
            "
          >
            <div>
              <div
                className="
                  inline-flex
                  items-center

                  gap-2.5

                  rounded-full

                  border
                  border-[#63AEFF]/25

                  bg-[#63AEFF]/[0.07]

                  px-4
                  py-2
                "
              >
                <span
                  className="
                    h-[6px]
                    w-[6px]

                    rounded-full

                    bg-[#63AEFF]

                    shadow-[0_0_10px_rgba(99,174,255,0.8)]
                  "
                />

                <span
                  className="
                    text-[14px]

                    font-bold

                    text-white

                    sm:text-[15px]
                  "
                >
                  Operational Scope
                </span>
              </div>

              <h3
                className="
                  mt-5

                  max-w-[700px]

                  text-[1.9rem]

                  font-bold

                  leading-[1.08]

                  tracking-[-0.035em]

                  text-white

                  sm:text-[2.25rem]

                  lg:text-[2.6rem]
                "
              >
                Complete support across

                <span className="text-[#69AEF7]">
                  {" "}
                  every aspect of student living.
                </span>
              </h3>
            </div>

            <p
              className="
                max-w-[480px]

                text-[14px]
                leading-7

                text-white/50

                sm:text-[15px]

                lg:justify-self-end
              "
            >
              From technical maintenance to everyday
              resident support, every operational area
              works together as one coordinated service.
            </p>
          </div>
        </Reveal>

        {/* =================================================
            OPERATIONAL CARDS
        ================================================== */}

        <div
          className="
            mt-8

            grid
            grid-cols-1

            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-4
          "
        >
          <Reveal
            delay={0.08}
            className="h-full"
          >
            <ScopeCard
              delay={0.08}
              number="01"
              title="Hard Services"
              items={projectScope.hardServices}
            />
          </Reveal>

          <Reveal
            delay={0.12}
            className="h-full"
          >
            <ScopeCard
              delay={0.14}
              number="02"
              title="Soft Services"
              items={projectScope.softServices}
            />
          </Reveal>

          <Reveal
            delay={0.16}
            className="h-full"
          >
            <ScopeCard
              delay={0.2}
              number="03"
              title="Value-Added"
              items={projectScope.valueAdded}
            />
          </Reveal>

          <Reveal
            delay={0.2}
            className="h-full"
          >
            <ScopeCard
              delay={0.26}
              number="04"
              title="Student Welfare"
              items={projectScope.studentWelfare}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SCOPE CARD
========================================================= */

type ScopeCardProps = {
  number: string;
  title: string;
  items: string[];
  delay?: number;
};

function ScopeCard({
  number,
  title,
  items,
  delay = 0,
}: ScopeCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={
        reduced
          ? false
          : {
              opacity: 0,
              y: 24,
              scale: 0.985,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        delay: reduced ? 0 : delay,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduced
          ? undefined
          : {
              y: -7,
              scale: 1.015,
              transition: {
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      className="
        group
        relative

        flex

        h-full
        min-h-[250px]

        flex-col

        overflow-hidden

        rounded-[20px]

        border
        border-white/10

        bg-white/[0.035]

        p-5

        shadow-[0_12px_36px_rgba(0,0,0,0.10)]

        transform-gpu

        transition-[border-color,background-color,box-shadow]
        duration-700

        hover:border-active/30
        hover:bg-white/[0.055]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.16)]

        sm:p-6
      "
    >
      <ProjectLightSweep />

      <span
        className="
          absolute

          left-0
          top-0

          h-[3px]
          w-0

          bg-active

          transition-all
          duration-700

          group-hover:w-full
        "
      />

      <div
        className="
          flex
          items-center
          justify-between

          gap-3
        "
      >
        <span
          className="
            text-[11px]

            font-bold
            uppercase

            tracking-[0.18em]

            text-active
          "
        >
          {number}
        </span>

        <span
          className="
            flex

            h-8
            w-8

            items-center
            justify-center

            rounded-full

            border
            border-white/10

            bg-white/[0.025]
          "
        >
          <span
            className="
              h-[6px]
              w-[6px]

              rounded-full

              bg-active/60

              transition-all
              duration-700

              group-hover:scale-150
              group-hover:bg-active
              group-hover:shadow-[0_0_10px_rgba(63,128,207,0.7)]
            "
          />
        </span>
      </div>

      <h3
        className="
          mt-5

          text-[19px]

          font-bold

          leading-snug

          tracking-[-0.02em]

          text-white

          sm:text-[20px]
        "
      >
        {title}
      </h3>

      <ul
        className="
          mt-4
          space-y-2.5
        "
      >
        {items.map((item) => (
          <li
            key={item}
            className="
              flex
              items-start

              gap-2.5

              text-[12.5px]
              leading-5

              text-white/58

              sm:text-[13px]
              sm:leading-6
            "
          >
            <span
              className="
                mt-[8px]

                h-[5px]
                w-[5px]

                shrink-0

                rounded-full

                bg-active
              "
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        className="
          mt-auto
          pt-5
        "
      >
        <span
          className="
            block

            h-px
            w-full

            bg-gradient-to-r

            from-active/35
            to-transparent
          "
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const quotes = [
  {
    quote:
      "The difference is that issues get closed, not logged. Our residence team spends its time on students again.",
    name: "Head of Accommodation Services",
    org: "Khalifa University Residences",
  },
  {
    quote:
      "Mobilisation was the calmest handover we have run. Every asset was on the register before we opened the doors.",
    name: "Estates Director",
    org: "Khalifa University Student Accommodation",
  },
  {
    quote:
      "Compliance evidence arrives before we ask for it. That alone changed how we plan the academic year.",
    name: "Facilities Manager",
    org: "Sas Al Nakhl Student Accommodation",
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

export function Testimonials() {
  const [i, setI] = useState(0);

  const go = (direction: number) => {
    setI(
      (previous) =>
        (previous + direction + quotes.length) %
        quotes.length,
    );
  };

  return (
    <section
      className="
        border-t
        border-hairline

        bg-background
      "
    >
      <div
        className="
          mx-auto

          w-full
          max-w-[1380px]

          px-4
          py-12

          sm:px-5
          sm:py-14

          md:px-7
          md:py-16

          lg:px-8
          lg:py-20

          xl:px-10
          xl:py-24

          2xl:px-0
        "
      >
        {/* HEADER */}

        <Reveal>
          <div>
            <div
              className="
                inline-flex
                items-center

                gap-2.5

                rounded-full

                border
                border-[#63AEFF]/25

                bg-[#63AEFF]/[0.07]

                px-4
                py-2
              "
            >
              <span
                className="
                  h-[6px]
                  w-[6px]

                  rounded-full

                  bg-[#63AEFF]

                  shadow-[0_0_10px_rgba(99,174,255,0.8)]
                "
              />

              <span
                className="
                  text-[14px]

                  font-bold

                  text-white

                  sm:text-[15px]
                "
              >
                University Feedback
              </span>
            </div>

            <h2
              className="
                mt-5

                max-w-[850px]

                text-[2rem]

                font-bold

                leading-[1.08]

                tracking-[-0.035em]

                text-white

                sm:text-[2.4rem]
                md:text-[2.7rem]
                lg:text-[3rem]
              "
            >
              What the University

              <span className="text-[#69AEF7]">
                {" "}
                Teams Say
              </span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p
            className="
              mt-5

              max-w-3xl

              text-[14px]
              leading-7

              text-white/55

              sm:text-[15px]

              lg:text-[16px]
              lg:leading-8
            "
          >
            Feedback from the housing administrators,
            estates directors, and student accommodation
            teams who experience our operations daily
            across campuses.
          </p>
        </Reveal>

        {/* TESTIMONIAL CARD */}

        <div
          className="
            mt-8

            sm:mt-10

            lg:mt-12
          "
        >
          <div
            className="
              relative

              overflow-hidden

              rounded-[22px]

              border
              border-white/10

              bg-white/[0.03]

              p-6

              sm:rounded-[24px]
              sm:p-8

              lg:p-10
            "
          >
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -14,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="
                    mb-5

                    flex
                    items-center

                    gap-1.5

                    text-[#3F80CF]
                  "
                >
                  {Array.from({
                    length: 5,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      className="
                        h-4
                        w-4

                        fill-current

                        sm:h-[18px]
                        sm:w-[18px]
                      "
                    />
                  ))}
                </div>

                <p
                  className="
                    max-w-[38ch]

                    text-[1.65rem]

                    font-bold

                    leading-[1.18]

                    tracking-[-0.03em]

                    text-white

                    sm:text-[2rem]
                    md:text-[2.25rem]
                    lg:text-[2.5rem]
                  "
                >
                  &ldquo;{quotes[i].quote}&rdquo;
                </p>

                <footer
                  className="
                    mt-7

                    text-[14px]

                    leading-6

                    text-muted-foreground

                    sm:text-[15px]
                  "
                >
                  <span
                    className="
                      font-semibold
                      text-white/85
                    "
                  >
                    {quotes[i].name}
                  </span>

                  <span
                    className="
                      mx-2
                      text-white/25
                    "
                  >
                    ·
                  </span>

                  <span>
                    {quotes[i].org}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {/* CONTROLS */}

            <div
              className="
                mt-8

                flex
                flex-wrap
                items-center

                gap-3

                border-t
                border-hairline

                pt-6
              "
            >
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="
                  inline-flex

                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-hairline

                  text-white

                  transition-all
                  duration-600

                  hover:border-active
                  hover:bg-active/10
                  hover:text-active
                "
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="
                  inline-flex

                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-hairline

                  text-white

                  transition-all
                  duration-600

                  hover:border-active
                  hover:bg-active/10
                  hover:text-active
                "
              >
                <ArrowRight className="h-4 w-4" />
              </button>

              <span
                className="
                  ml-1

                  text-[11px]

                  font-semibold

                  tracking-[0.14em]

                  text-muted-foreground

                  sm:ml-3
                  sm:text-xs
                "
              >
                {String(i + 1).padStart(2, "0")}
                {" / "}
                {String(quotes.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA / CONTACT
========================================================= */

export function CtaBand() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden

        border-t
        border-hairline

        bg-background

        text-white
      "
    >
      <ArcPattern
        className="
          absolute
          inset-0

          h-full
          w-full

          text-[#3F80CF]
        "
        opacity={0.06}
      />

      <div
        className="
          relative
          z-10

          mx-auto

          w-full
          max-w-[1380px]

          px-4
          py-12

          sm:px-5
          sm:py-14

          md:px-7
          md:py-16

          lg:px-8
          lg:py-20

          xl:px-10
          xl:py-24

          2xl:px-0
        "
      >
        {/* CONTACT HEADER */}

        <Reveal>
          <div
            className="
              inline-flex
              items-center

              gap-2.5

              rounded-full

              border
              border-[#63AEFF]/25

              bg-[#63AEFF]/[0.07]

              px-4
              py-2
            "
          >
            <span
              className="
                h-[6px]
                w-[6px]

                rounded-full

                bg-[#63AEFF]

                shadow-[0_0_10px_rgba(99,174,255,0.8)]
              "
            />

            <span
              className="
                text-[14px]

                font-bold

                text-white

                sm:text-[15px]
              "
            >
              Contact Kunnected FM
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="
              mt-5

              max-w-[750px]

              text-[2.1rem]

              font-bold

              leading-[1.03]

              tracking-[-0.04em]

              text-white

              sm:text-[2.6rem]
              md:text-[3rem]
              lg:text-[3.35rem]
            "
          >
            Get in

            <span className="text-[#69AEF7]">
              {" "}
              Touch
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p
            className="
              mt-4

              max-w-2xl

              text-[15px]
              leading-7

              text-muted-foreground

              sm:text-[16px]
              sm:leading-8
            "
          >
            {company.tagline}
          </p>
        </Reveal>

        {/* CONTACT GRID */}

        <div
          className="
            mt-8

            grid
            grid-cols-1

            gap-5

            border-t
            border-hairline

            pt-8

            sm:mt-10
            sm:gap-6

            md:grid-cols-2

            lg:gap-8
          "
        >
          {/* CONTACT INFO */}

          <Reveal
            delay={0.14}
            className="h-full"
          >
            <div
              className="
                h-full

                rounded-[20px]

                border
                border-active/35

                bg-[#121217]

                p-6

                shadow-[0_0_30px_rgba(63,128,207,0.10)]

                transition-all
                duration-300

                hover:border-active/70
                hover:shadow-[0_0_45px_rgba(63,128,207,0.18)]

                sm:p-7

                lg:p-8
              "
            >
              <h3
                className="
                  flex
                  items-center

                  gap-2

                  text-[15px]

                  font-bold
                  uppercase

                  tracking-[0.12em]

                  text-white

                  sm:text-[17px]
                "
              >
                <span
                  className="
                    h-2
                    w-2

                    shrink-0

                    rounded-full

                    bg-active
                  "
                />

                Contact Info
              </h3>

              <div
                className="
                  mt-6

                  flex
                  items-start

                  gap-3

                  sm:gap-4
                "
              >
                <div
                  className="
                    mt-0.5

                    flex

                    h-10
                    w-10

                    shrink-0

                    items-center
                    justify-center

                    rounded-lg

                    bg-active/10

                    text-active
                  "
                >
                  <MapPin className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <h4
                    className="
                      text-[14px]

                      font-semibold

                      text-white

                      sm:text-[15px]
                    "
                  >
                    {company.name}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-[13px]
                      leading-6

                      text-muted-foreground

                      sm:text-[14px]
                    "
                  >
                    {company.address.line1}

                    <br />

                    {company.address.line2}
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-7

                  border-t
                  border-white/5

                  pt-6
                "
              >
                <a
                  href={`https://${company.web}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group

                    -mx-2

                    flex
                    items-center

                    gap-3

                    rounded-xl

                    p-2

                    transition-colors

                    hover:bg-white/5

                    sm:gap-4
                  "
                >
                  <div
                    className="
                      flex

                      h-10
                      w-10

                      shrink-0

                      items-center
                      justify-center

                      rounded-lg

                      bg-white/5

                      text-muted-foreground

                      transition-colors

                      group-hover:bg-active/15
                      group-hover:text-active
                    "
                  >
                    <Globe className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[10px]

                        font-semibold
                        uppercase

                        tracking-[0.15em]

                        text-muted-foreground
                      "
                    >
                      Website
                    </p>

                    <p
                      className="
                        mt-0.5

                        break-all

                        text-[13px]

                        font-medium

                        text-white

                        transition-colors

                        group-hover:text-active

                        sm:text-[14px]
                      "
                    >
                      {company.web}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          {/* OFFICE SUPPORT */}

          <Reveal
            delay={0.18}
            className="h-full"
          >
            <div
              className="
                flex

                h-full

                flex-col

                rounded-[20px]

                border
                border-hairline

                bg-[#121217]

                p-6

                transition-all
                duration-300

                hover:border-white/15

                sm:p-7

                lg:p-8
              "
            >
              <div>
                <h3
                  className="
                    text-[15px]

                    font-bold
                    uppercase

                    tracking-[0.12em]

                    text-white

                    sm:text-[17px]
                  "
                >
                  Office Hours &amp; Support
                </h3>

                <p
                  className="
                    mt-4

                    text-[14px]
                    leading-7

                    text-muted-foreground

                    sm:text-[15px]
                  "
                >
                  Our administrative and management teams
                  are available during standard working
                  hours for support, meetings, and planned
                  maintenance coordination.
                </p>

                <div
                  className="
                    mt-6

                    border-t
                    border-white/5

                    pt-6
                  "
                >
                  <h4
                    className="
                      text-[10px]

                      font-semibold
                      uppercase

                      tracking-[0.15em]

                      text-white/50

                      sm:text-[11px]
                    "
                  >
                    Office Hours
                  </h4>

                  <p
                    className="
                      mt-2

                      text-[14px]
                      leading-6

                      text-white/80
                    "
                  >
                    {company.hours}
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-auto
                  pt-8
                "
              >
                <div
                  className="
                    border-t
                    border-white/10

                    pt-6
                  "
                >
                  <span
                    className="
                      inline-flex

                      max-w-full

                      items-center

                      gap-2

                      rounded-full

                      bg-active/10

                      px-3
                      py-1.5

                      text-[11px]

                      font-semibold

                      text-active

                      sm:text-xs
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5

                        shrink-0

                        rounded-full

                        bg-active
                      "
                    />

                    24/7 Operations Helpdesk
                  </span>

                  <p
                    className="
                      mt-3

                      text-[12px]
                      leading-6

                      text-muted-foreground

                      sm:text-[13px]
                    "
                  >
                    A staffed helpdesk and emergency
                    response team remains active 24/7/365
                    to handle any immediate residential or
                    accommodation infrastructure issues.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}