import type { ReactNode } from "react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  Parallax,
  Reveal,
} from "@/components/motion/Reveal";

import {
  company,
  foundations,
  keyStrengths,
  promise,
  vision,
} from "@/lib/site";

import engineerAsset from "@/assets/hero-campus.jpg";

/* =========================================================
   SHARED MOTION
========================================================= */

const easePremium = [
  0.22,
  1,
  0.36,
  1,
] as const;

/* =========================================================
   SECTION UNDERLINE
========================================================= */

function SectionUnderline() {
  const reduced = useReducedMotion();

  return (
    <motion.span
      initial={
        reduced
          ? false
          : {
              scaleX: 0,
            }
      }
      whileInView={{
        scaleX: 1,
      }}
      viewport={{
        once: true,
        margin: "-10%",
      }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        mt-4
        block
        h-[3px]
        w-[64px]
        origin-left
        rounded-full
        bg-[#3F80CF]
        sm:w-[72px]
        lg:w-[80px]
      "
    />
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2.5

        rounded-full

        border

        px-3.5
        py-2

        sm:px-4
        sm:py-2.5

        ${
          light
            ? `
                border-[#3F80CF]/20
                bg-[#3F80CF]/[0.06]
              `
            : `
                border-white/15
                bg-white/[0.04]
              `
        }
      `}
    >
      <span
        className="
          h-[6px]
          w-[6px]

          shrink-0

          rounded-full

          bg-[#3F80CF]
        "
      />

      <span
        className={`
          font-sans

          text-[12px]
          font-medium

          tracking-[0.02em]

          sm:text-[13px]
          lg:text-[14px]

          ${
            light
              ? "text-[#201A57]"
              : "text-white"
          }
        `}
      >
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   DARK INFORMATION CARD
========================================================= */

function DarkInfoCard({
  label,
  title,
  items,
  delay = 0,
}: {
  label: string;
  title: string;
  items: string[];
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={
        reduced
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        delay,
        duration: 0.8,
        ease: easePremium,
      }}
      whileHover={
        reduced
          ? undefined
          : {
              y: -4,
              transition: {
                duration: 0.35,
                ease: easePremium,
              },
            }
      }
      className="h-full"
    >
      <div
        className="
          relative
          h-full

          overflow-hidden

          rounded-[18px]

          border
          border-white/10

          bg-white/[0.035]

          p-5

          transition-colors
          duration-300

          hover:border-[#3F80CF]/40
          hover:bg-white/[0.05]

          sm:p-6
        "
      >
        {/* ACTIVE BLUE SIDE LINE */}

        <span
          className="
            absolute
            left-0
            top-0

            h-full
            w-[3px]

            bg-[#3F80CF]
          "
        />

        <p
          className="
            font-sans

            text-[10px]
            font-medium

            uppercase

            tracking-[0.18em]

            text-[#3F80CF]

            sm:text-[11px]
          "
        >
          {label}
        </p>

        <h3
          className="
            mt-2

            font-display

            text-[19px]
            font-medium

            leading-tight

            tracking-[-0.02em]

            text-white

            sm:text-[20px]

            lg:text-[21px]
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

                gap-3

                font-sans

                text-[13px]

                leading-6

                text-white/65

                sm:text-[14px]
              "
            >
              <span
                className="
                  mt-[9px]

                  h-[4px]
                  w-[4px]

                  shrink-0

                  rounded-full

                  bg-[#3F80CF]
                "
              />

              <span>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* =========================================================
   WHO WE ARE
========================================================= */

export function WhoWeAre() {
  const reduced = useReducedMotion();

  return (
    <section
      id="who-we-are"
      className="
        relative

        overflow-hidden

        bg-[#201A57]
      "
    >
      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          w-full
          max-w-[1380px]

          px-4
          pb-14
          pt-6

          sm:px-5
          sm:pb-16
          sm:pt-8

          md:px-7
          md:pb-20
          md:pt-10

          lg:px-8
          lg:pb-24
          lg:pt-12

          xl:px-10
          xl:pb-28
          xl:pt-14

          2xl:px-0
        "
      >
        {/* =====================================================
            INTRO
        ====================================================== */}

        <Reveal>
          <div
            className="
              grid

              gap-8

              border-b
              border-white/10

              pb-9

              sm:gap-10
              sm:pb-11

              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
              lg:gap-14
              lg:pb-12

              xl:gap-20
            "
          >
            {/* LEFT */}

            <div>
              <SectionLabel>
                About KUnnected FM
              </SectionLabel>

              <h2
                className="
                  mt-5

                  max-w-[650px]

                  font-display

                  text-[2rem]
                  font-medium

                  leading-[1.05]

                  tracking-[-0.035em]

                  text-white

                  min-[380px]:text-[2.15rem]

                  sm:text-[2.55rem]

                  md:text-[2.9rem]

                  lg:text-[3.25rem]

                  xl:text-[3.55rem]
                "
              >
                Who We Are
              </h2>

              <SectionUnderline />
            </div>

            {/* RIGHT */}

            <div
              className="
                border-t
                border-white/10

                pt-6

                lg:border-l
                lg:border-t-0

                lg:pl-10
                lg:pt-0

                xl:pl-12
              "
            >
              <p
                className="
                  max-w-[760px]

                  font-display

                  text-[1.3rem]
                  font-normal

                  leading-[1.25]

                  tracking-[-0.02em]

                  text-white

                  sm:text-[1.55rem]

                  md:text-[1.7rem]

                  lg:text-[1.85rem]

                  xl:text-[2rem]
                "
              >
                We don&apos;t just maintain facilities.
                We enable better everyday experiences.
              </p>

              <p
                className="
                  mt-4

                  max-w-[680px]

                  font-sans

                  text-[14px]

                  leading-7

                  text-white/65

                  sm:text-[15px]

                  lg:text-[16px]
                  lg:leading-8
                "
              >
                Creating reliable, comfortable and
                well-managed environments that support
                student life, wellbeing and everyday
                campus experiences.
              </p>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            IMAGE + STORY
        ====================================================== */}

        <div
          className="
            mt-8

            grid

            gap-8

            sm:mt-10
            sm:gap-9

            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-stretch
            lg:gap-10

            xl:gap-14
          "
        >
          {/* =================================================
              IMAGE
          ================================================== */}

          <motion.div
            initial={
              reduced
                ? false
                : {
                    opacity: 0,
                    x: -32,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: easePremium,
            }}
            className="
              h-full
              min-w-0
            "
          >
            <div
              className="
                relative

                h-[280px]

                overflow-hidden

                rounded-[18px]

                border
                border-white/10

                bg-white/[0.03]

                min-[420px]:h-[320px]

                sm:h-[380px]
                sm:rounded-[20px]

                md:h-[430px]

                lg:h-full
                lg:min-h-[510px]

                xl:min-h-[540px]
                xl:rounded-[22px]
              "
            >
              <Parallax
                distance={20}
                className="
                  h-full
                  w-full
                "
              >
                <motion.img
                  src={engineerAsset}
                  alt="Modern student accommodation campus environment"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  initial={
                    reduced
                      ? false
                      : {
                          scale: 1.04,
                        }
                  }
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: easePremium,
                  }}
                  className="
                    h-full
                    w-full

                    object-cover
                  "
                />
              </Parallax>

              {/* FLAT BRAND OVERLAY */}

              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  bg-[#201A57]/20
                "
              />

              <motion.div
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        y: 10,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.6,
                  ease: easePremium,
                }}
                className="
                  absolute

                  bottom-4
                  left-4

                  rounded-full

                  border
                  border-white/20

                  bg-[#201A57]/90

                  px-3
                  py-1.5

                  font-sans

                  text-[9px]
                  font-medium

                  uppercase

                  tracking-[0.14em]

                  text-white

                  sm:bottom-5
                  sm:left-5
                  sm:px-3.5
                  sm:text-[10px]
                "
              >
                Student-Centred Facilities
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT STORY
          ================================================== */}

          <div
            className="
              flex
              min-w-0

              flex-col

              lg:justify-center
            "
          >
            <Reveal delay={0.08}>
              <p
                className="
                  max-w-3xl

                  font-sans

                  text-[14px]

                  leading-7

                  text-white/65

                  sm:text-[15px]

                  lg:text-[16px]
                  lg:leading-8
                "
              >
                {company.purposeBody}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p
                className="
                  mt-4

                  max-w-3xl

                  font-sans

                  text-[14px]

                  leading-7

                  text-white/65

                  sm:text-[15px]

                  lg:text-[16px]
                  lg:leading-8
                "
              >
                {company.purposeExtended}
              </p>
            </Reveal>

            {/* =================================================
                VISION / PROMISE
            ================================================== */}

            <div
              className="
                mt-6

                grid

                gap-4

                sm:mt-7
                sm:grid-cols-2
                sm:gap-5

                lg:mt-8
              "
            >
              <DarkInfoCard
                label="Vision"
                title="Our Vision"
                items={vision}
                delay={0.15}
              />

              <DarkInfoCard
                label="Promise"
                title="Our Promise"
                items={promise}
                delay={0.25}
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            FOUNDATION
        ====================================================== */}

        <div
          className="
            mt-12

            border-t
            border-white/10

            pt-10

            sm:mt-14
            sm:pt-12

            lg:mt-16
            lg:pt-14

            xl:mt-20
            xl:pt-16
          "
        >
          {/* =================================================
              FOUNDATION INTRO
          ================================================== */}

          <Reveal>
            <div
              className="
                grid

                gap-7

                lg:grid-cols-[1fr_0.7fr]
                lg:items-end
                lg:gap-12
              "
            >
              <div>
                <SectionLabel>
                  Our Foundation
                </SectionLabel>

                <h3
                  className="
                    mt-5

                    max-w-[720px]

                    font-display

                    text-[1.8rem]
                    font-medium

                    leading-[1.1]

                    tracking-[-0.03em]

                    text-white

                    sm:text-[2.15rem]

                    md:text-[2.4rem]

                    lg:text-[2.65rem]
                  "
                >
                  The principles behind
                  how we work.
                </h3>

                <SectionUnderline />
              </div>

              <p
                className="
                  max-w-[500px]

                  font-sans

                  text-[14px]

                  leading-7

                  text-white/60

                  sm:text-[15px]

                  lg:justify-self-end
                  lg:text-[16px]
                "
              >
                Consistent standards,
                responsible operations and
                a people-first approach guide
                every service we deliver.
              </p>
            </div>
          </Reveal>

          {/* =================================================
              FOUNDATION CARDS
          ================================================== */}

          <div
            className="
              mt-8

              grid
              grid-cols-1

              gap-4

              sm:mt-10
              sm:grid-cols-2
              sm:gap-5

              lg:grid-cols-4
              lg:gap-5

              xl:gap-6
            "
          >
            {foundations.map(
              (foundation, index) => (
                <motion.div
                  key={foundation.n}
                  initial={
                    reduced
                      ? false
                      : {
                          opacity: 0,
                          y: 24,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay:
                      0.08 * index,

                    duration: 0.75,

                    ease:
                      easePremium,
                  }}
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          y: -4,

                          transition: {
                            duration:
                              0.3,

                            ease:
                              easePremium,
                          },
                        }
                  }
                  className="h-full"
                >
                  <div
                    className="
                      group

                      relative

                      flex
                      h-full

                      flex-col

                      overflow-hidden

                      rounded-[18px]

                      border
                      border-white/10

                      bg-white/[0.035]

                      p-5
                      pt-6

                      transition-colors
                      duration-300

                      hover:border-[#3F80CF]/40
                      hover:bg-white/[0.05]

                      sm:p-6
                      sm:pt-7
                    "
                  >
                    {/* BRAND TOP LINE */}

                    <span
                      className="
                        absolute

                        left-0
                        top-0

                        h-[3px]
                        w-full

                        bg-[#3F80CF]
                      "
                    />

                    {/* TITLE */}

                    <h4
                      className="
                        font-display

                        text-[18px]
                        font-medium

                        leading-[1.25]

                        tracking-[-0.02em]

                        text-white

                        sm:text-[19px]

                        lg:text-[20px]
                      "
                    >
                      {
                        foundation.title
                      }
                    </h4>

                    {/* BODY */}

                    <p
                      className="
                        mt-3

                        flex-1

                        font-sans

                        text-[13px]

                        leading-6

                        text-white/60

                        sm:text-[14px]
                        sm:leading-7
                      "
                    >
                      {
                        foundation.body
                      }
                    </p>

                    <span
                      className="
                        mt-5

                        block

                        h-px
                        w-full

                        bg-white/10
                      "
                    />
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WHY CHOOSE US
========================================================= */

export function WhyChooseUs() {
  const reduced = useReducedMotion();

  return (
    <section
      className="
        relative

        overflow-hidden

        border-y
        border-[#201A57]/10

        bg-white
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
        {/* =================================================
            HEADING
        ================================================== */}

        <Reveal>
          <div className="max-w-4xl">
            <SectionLabel light>
              Why Choose Us
            </SectionLabel>

            <h2
              className="
                mt-5

                max-w-[760px]

                font-display

                text-[1.9rem]
                font-medium

                leading-[1.08]

                tracking-[-0.035em]

                text-[#201A57]

                min-[380px]:text-[2rem]

                sm:text-[2.4rem]

                md:text-[2.7rem]

                lg:text-[3rem]

                xl:text-[3.15rem]
              "
            >
              Our Standards & Commitment
            </h2>

            <SectionUnderline />
          </div>
        </Reveal>

        {/* USP */}

        <Reveal delay={0.08}>
          <p
            className="
              mt-5

              max-w-3xl

              font-sans

              text-[14px]

              leading-7

              text-[#565656]

              sm:text-[15px]
              sm:leading-8

              md:text-[16px]

              lg:text-[17px]
            "
          >
            {company.usp}
          </p>
        </Reveal>

        {/* =================================================
            STRENGTH CARDS
        ================================================== */}

        <div
          className="
            mt-8

            grid
            grid-cols-1

            gap-4

            min-[520px]:grid-cols-2

            sm:mt-10
            sm:gap-5

            lg:grid-cols-3

            xl:grid-cols-5
          "
        >
          {keyStrengths.map(
            (strength, index) => (
              <motion.div
                key={strength.title}
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        y: 24,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay:
                    0.08 * index,

                  duration: 0.75,

                  ease:
                    easePremium,
                }}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -4,

                        transition: {
                          duration:
                            0.3,

                          ease:
                            easePremium,
                        },
                      }
                }
                className="h-full"
              >
                <div
                  className="
                    group

                    relative

                    flex
                    h-full

                    flex-col

                    overflow-hidden

                    rounded-[18px]

                    border
                    border-[#201A57]/10

                    bg-white

                    p-5
                    pt-6

                    transition-colors
                    duration-300

                    hover:border-[#3F80CF]/45

                    sm:p-6
                    sm:pt-7
                  "
                >
                  {/* BRAND TOP LINE */}

                  <span
                    className="
                      absolute

                      left-0
                      top-0

                      h-[3px]
                      w-full

                      bg-[#3F80CF]
                    "
                  />

                  {/* TITLE */}

                  <h3
                    className="
                      font-display

                      text-[17px]
                      font-medium

                      leading-snug

                      tracking-[-0.02em]

                      text-[#201A57]

                      sm:text-[18px]

                      lg:text-[19px]
                    "
                  >
                    {
                      strength.title
                    }
                  </h3>

                  {/* BODY */}

                  <p
                    className="
                      mt-3

                      flex-1

                      font-sans

                      text-[13px]

                      leading-6

                      text-[#565656]

                      sm:text-[14px]
                      sm:leading-7
                    "
                  >
                    {
                      strength.body
                    }
                  </p>

                  <span
                    className="
                      mt-5

                      block

                      h-px
                      w-full

                      bg-[#201A57]/10
                    "
                  />
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}