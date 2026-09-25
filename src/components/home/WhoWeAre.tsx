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

import studentAsset from "@/assets/student-living.jpg";

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
        w-[72px]

        origin-left

        rounded-full

        bg-active

        sm:w-[84px]
      "
    />
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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

        sm:px-4
        sm:py-2.5
      "
    >
      <span
        className="
          relative

          flex

          h-[10px]
          w-[10px]

          shrink-0

          items-center
          justify-center
        "
      >
        <span
          className="
            absolute
            inset-0

            rounded-full

            bg-[#63AEFF]/30

            blur-[4px]
          "
        />

        <span
          className="
            relative

            h-[6px]
            w-[6px]

            rounded-full

            bg-[#63AEFF]

            shadow-[0_0_12px_rgba(99,174,255,0.9)]
          "
        />
      </span>

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
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   PREMIUM CARD LIGHT SWEEP
========================================================= */

function CardLightSweep({
  light = false,
}: {
  light?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`
        pointer-events-none

        absolute
        inset-y-0
        -left-1/2

        w-1/3

        -translate-x-full
        -skew-x-12

        bg-gradient-to-r
        from-transparent
        ${
          light
            ? "via-[#3F80CF]/10"
            : "via-white/[0.08]"
        }
        to-transparent

        opacity-0

        transition-[transform,opacity]
        duration-[1200ms]
        ease-out

        group-hover:translate-x-[520%]
        group-hover:opacity-100
      `}
    />
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

        bg-core
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none

          absolute

          -right-[220px]
          top-[50px]

          h-[480px]
          w-[480px]

          rounded-full

          bg-[#3F80CF]/[0.06]

          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          -left-[220px]
          bottom-[100px]

          h-[450px]
          w-[450px]

          rounded-full

          bg-[#6859D1]/[0.045]

          blur-[130px]
        "
      />

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
          pt-4

          sm:px-5
          sm:pb-16
          sm:pt-5

          md:px-7
          md:pb-18
          md:pt-6

          lg:px-8
          lg:pb-20
          lg:pt-7

          xl:px-10
          xl:pb-24
          xl:pt-8

          2xl:px-0
        "
      >
        {/* =====================================================
            COMPACT INTRO
        ====================================================== */}

        <Reveal>
          <div
            className="
              grid

              gap-8

              border-b
              border-white/10

              pb-8

              sm:pb-10

              lg:grid-cols-[0.95fr_1.05fr]
              lg:items-center
              lg:gap-14

              xl:gap-20
            "
          >
            {/* =============================================
                LEFT
            ============================================== */}

            <div>
              <SectionLabel>
                About KUnnected FM
              </SectionLabel>

              <h2
                className="
                  mt-5

                  text-[2.1rem]

                  font-bold

                  leading-[1]

                  tracking-[-0.045em]

                  text-white

                  sm:text-[2.6rem]

                  md:text-[3rem]

                  lg:text-[3.35rem]

                  xl:text-[3.65rem]
                "
              >
                Who We Are
              </h2>

              <SectionUnderline />
            </div>

            {/* =============================================
                RIGHT
            ============================================== */}

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

                  text-[1.4rem]

                  font-normal

                  leading-[1.2]

                  tracking-[-0.025em]

                  text-white/95

                  sm:text-[1.6rem]

                  md:text-[1.75rem]

                  lg:text-[1.9rem]

                  xl:text-[2.05rem]
                "
              >
                We don&apos;t just maintain facilities.
                We enable better everyday experiences.
              </p>

              <p
                className="
                  mt-4

                  max-w-[680px]

                  text-[14px]

                  leading-7

                  text-white/55

                  sm:text-[15px]

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
            mt-7

            grid

            gap-7

            sm:mt-8
            sm:gap-8

            lg:grid-cols-[0.88fr_1.12fr]
            lg:items-start
            lg:gap-10

            xl:gap-12
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
                    x: -42,
                    scale: 0.975,
                    clipPath:
                      "inset(0 10% 0 0 round 24px)",
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              clipPath:
                "inset(0 0% 0 0 round 24px)",
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.45,
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
            className="h-full"
          >
            <motion.div
              className="
                group

                relative

                min-h-[280px]

                overflow-hidden

                rounded-[22px]

                border
                border-white/10

                bg-white/[0.03]

                shadow-[0_24px_65px_rgba(0,0,0,0.20)]

                sm:min-h-[340px]

                lg:h-[450px]
                lg:min-h-0

                xl:h-[460px]
                xl:rounded-[24px]
              "
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Parallax
                distance={24}
                className="
                  h-full
                  w-full
                "
              >
                <motion.img
                  src={studentAsset}
                  alt="A bright student accommodation lounge with natural light"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  initial={
                    reduced
                      ? false
                      : {
                          scale: 1.08,
                        }
                  }
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          scale: 1.035,
                        }
                  }
                  transition={{
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    h-full
                    w-full

                    object-cover
                  "
                />
              </Parallax>

              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  bg-gradient-to-t

                  from-[#15113f]/60
                  via-transparent
                  to-transparent
                "
              />

              {!reduced && (
                <motion.span
                  aria-hidden="true"
                  initial={{
                    x: "-150%",
                    opacity: 0,
                  }}
                  whileInView={{
                    x: "340%",
                    opacity: [0, 0.28, 0],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    delay: 0.65,
                    duration: 1.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    pointer-events-none

                    absolute
                    inset-y-0
                    left-0

                    w-1/3

                    -skew-x-12

                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent

                    blur-sm
                  "
                />
              )}

              <motion.div
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
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
                  delay: 0.9,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute

                  bottom-4
                  left-4

                  rounded-full

                  border
                  border-white/15

                  bg-[#201A57]/70

                  px-3.5
                  py-1.5

                  text-[9px]

                  font-semibold
                  uppercase

                  tracking-[0.15em]

                  text-white/80

                  backdrop-blur-lg

                  sm:bottom-5
                  sm:left-5
                  sm:text-[10px]
                "
              >
                Student-Centred Facilities
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT STORY
          ================================================== */}

          <div
            className="
              flex
              min-w-0
              flex-col
            "
          >
            <Reveal delay={0.08}>
              <p
                className="
                  max-w-3xl

                  text-[15px]
                  leading-7

                  text-white/82

                  sm:text-[16px]

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
                  mt-3

                  max-w-3xl

                  text-[13px]
                  leading-6

                  text-white/58

                  sm:text-[14px]
                  sm:leading-7

                  lg:text-[14px]
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
                mt-5

                grid

                gap-4

                sm:mt-6
                sm:grid-cols-2
                sm:gap-4

                lg:pt-4
              "
            >
              {/* =============================================
                  VISION
              ============================================== */}

              <motion.div
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        y: 28,
                        rotate: -1,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: {
                    delay: 0.25,
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -6,
                        rotate: -0.25,
                        transition: {
                          delay: 0,
                          duration: 0.65,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                }
                className="h-full"
              >
                <motion.div
                  className="
                    group

                    relative

                    h-full

                    overflow-hidden

                    rounded-[18px]

                    border
                    border-white/10

                    bg-white/[0.04]

                    p-4

                    backdrop-blur-sm

                    transition-[border-color,background-color,box-shadow]
                    duration-700

                    hover:border-[#4E94E5]/35
                    hover:bg-white/[0.06]
                    hover:shadow-[0_22px_55px_rgba(7,5,35,0.28)]

                    sm:p-5
                  "
                >
                  <CardLightSweep />

                  <span
                    className="
                      absolute

                      left-0
                      top-0

                      h-full
                      w-[3px]

                      bg-active
                    "
                  />
 <div>
  <p
    className="
      text-[9px]
      font-bold
      uppercase
      tracking-[0.17em]
      text-[#6FA9EF]
    "
  >
    Vision
  </p>
</div>

                  <h3
                    className="
                      mt-2

                      text-[19px]

                      font-bold

                      tracking-[-0.025em]

                      text-white

                      sm:text-[20px]
                    "
                  >
                    Our Vision
                  </h3>

                  <ul
                    className="
                      mt-3
                      space-y-2.5
                    "
                  >
                    {vision.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          items-start

                          gap-2.5

                          text-[12px]
                          leading-5

                          text-white/68

                          sm:text-[13px]
                          sm:leading-6
                        "
                      >
                        <span
                          className="
                            mt-[8px]

                            h-[4px]
                            w-[4px]

                            shrink-0

                            rounded-full

                            bg-active
                          "
                        />

                        <span>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* =============================================
                  PROMISE
              ============================================== */}

              <motion.div
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        x: 32,
                        rotate: 1,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  transition: {
                    delay: 0.42,
                    duration: 1.15,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -6,
                        rotate: 0.25,
                        transition: {
                          delay: 0,
                          duration: 0.65,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                }
                className="h-full"
              >
                <motion.div
                  className="
                    group

                    relative

                    h-full

                    overflow-hidden

                    rounded-[18px]

                    border
                    border-white/10

                    bg-white/[0.04]

                    p-4

                    backdrop-blur-sm

                    transition-[border-color,background-color,box-shadow]
                    duration-700

                    hover:border-[#4E94E5]/35
                    hover:bg-white/[0.06]
                    hover:shadow-[0_22px_55px_rgba(7,5,35,0.28)]

                    sm:p-5
                  "
                >
                  <CardLightSweep />

                  <span
                    className="
                      absolute

                      left-0
                      top-0

                      h-full
                      w-[3px]

                      bg-active
                    "
                  />

                   <div>
  <p
    className="
      text-[9px]
      font-bold
      uppercase
      tracking-[0.17em]
      text-[#6FA9EF]
    "
  >
    Promise
  </p>
</div>

                  <h3
                    className="
                      mt-2

                      text-[19px]

                      font-bold

                      tracking-[-0.025em]

                      text-white

                      sm:text-[20px]
                    "
                  >
                    Our Promise
                  </h3>

                  <ul
                    className="
                      mt-3
                      space-y-2.5
                    "
                  >
                    {promise.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          items-start

                          gap-2.5

                          text-[12px]
                          leading-5

                          text-white/68

                          sm:text-[13px]
                          sm:leading-6
                        "
                      >
                        <span
                          className="
                            mt-[8px]

                            h-[4px]
                            w-[4px]

                            shrink-0

                            rounded-full

                            bg-active
                          "
                        />

                        <span>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
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

            pt-9

            sm:mt-14
            sm:pt-10

            lg:mt-16
            lg:pt-12
          "
        >
          {/* =============================================
              FOUNDATION INTRO
          ============================================== */}

          <Reveal>
            <div
              className="
                grid

                gap-6

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

                    text-[1.9rem]

                    font-bold

                    leading-[1.08]

                    tracking-[-0.035em]

                    text-white

                    sm:text-[2.25rem]

                    md:text-[2.45rem]

                    lg:text-[2.7rem]
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

                  text-[14px]

                  leading-7

                  text-white/55

                  sm:text-[15px]

                  lg:justify-self-end
                "
              >
                Consistent standards,
                responsible operations and
                a people-first approach
                guide every service we
                deliver.
              </p>
            </div>
          </Reveal>

          {/* =============================================
              FOUR FOUNDATION CARDS
          ============================================== */}

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
            {foundations.map(
              (
                foundation,
                index,
              ) => (
                <motion.div
                  key={foundation.n}
                  initial={
                    reduced
                      ? false
                      : {
                          opacity: 0,
                          x:
                            index % 2 === 0
                              ? -20
                              : 20,
                          y: 26,
                          rotate:
                            index % 2 === 0
                              ? -1
                              : 1,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    transition: {
                      delay: 0.12 * index,
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          y: -7,
                          scale: 1.015,
                          transition: {
                            delay: 0,
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }
                  }
                  className="
                    h-full
                  "
                >
                  <div
                    className="
                      group

                      relative

                      flex

                      h-full
                      min-h-[240px]

                      flex-col

                      overflow-hidden

                      rounded-[20px]

                      border
                      border-white/10

                      bg-white/[0.035]

                      p-5

                      transition-[border-color,background-color,box-shadow]
                      duration-700

                      hover:border-[#4E94E5]/35

                      hover:bg-white/[0.055]

                      hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]

                      sm:p-6
                    "
                  >
                    <CardLightSweep />

                    {/* TOP LINE */}

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

                    {/* TITLE - NUMBERS REMOVED */}

                    <h4
                      className="
                        mt-1

                        text-[19px]

                        font-bold

                        leading-[1.25]

                        tracking-[-0.02em]

                        text-white

                        transition-transform
                        duration-700

                        group-hover:translate-x-1

                        xl:text-[20px]
                      "
                    >
                      {foundation.title}
                    </h4>

                    {/* BODY */}

                    <p
                      className="
                        mt-3

                        text-[13px]

                        leading-6

                        text-white/58

                        sm:text-[14px]
                        sm:leading-7
                      "
                    >
                      {foundation.body}
                    </p>

                    <div
                      className="
                        mt-auto
                        pt-6
                      "
                    >
                      <span
                        className="
                          block

                          h-px
                          w-full

                          bg-white/10
                        "
                      />
                    </div>
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
        border-slate-200/70

        bg-light-mesh
      "
    >
      <div
        className="
          blur-circle-1

          pointer-events-none

          -left-20
          -top-20
        "
      />

      <div
        className="
          blur-circle-2

          pointer-events-none

          -bottom-40
          -right-40
        "
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
        {/* =============================================
            HEADING
        ============================================== */}

        <Reveal>
          <div
            className="
              max-w-4xl
            "
          >
            <div
              className="
                inline-flex

                items-center

                gap-2.5

                rounded-full

                border
                border-[#3F80CF]/15

                bg-white

                px-4
                py-2

                shadow-sm
              "
            >
              <span
                className="
                  h-[6px]
                  w-[6px]

                  rounded-full

                  bg-[#3F80CF]
                "
              />

              <span
                className="
                  text-[13px]

                  font-bold

                  tracking-[-0.01em]

                  text-[#181B37]

                  sm:text-[14px]
                "
              >
                Why KUnnected FM
              </span>
            </div>

            <h2
              className="
                mt-5

                max-w-[900px]

                text-[2rem]

                font-bold

                leading-[1.05]

                tracking-[-0.04em]

                text-[#161932]

                sm:text-[2.5rem]

                md:text-[2.8rem]

                lg:text-[3.15rem]

                xl:text-[3.4rem]
              "
            >
              Facilities management built around
              <span className="text-[#3F80CF]">
                {" "}
                people, performance and reliability.
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

              text-slate-600

              sm:text-[15px]

              lg:text-[16px]
              lg:leading-8
            "
          >
            We combine technical expertise,
            operational discipline and a
            student-focused approach to deliver
            facilities that perform reliably every
            day.
          </p>
        </Reveal>

        {/* =============================================
            STRENGTHS
        ============================================== */}

        <div
          className="
            mt-9

            grid

            grid-cols-1

            gap-4

            sm:mt-10

            sm:grid-cols-2

            sm:gap-5

            lg:grid-cols-3

            xl:mt-12
          "
        >
          {keyStrengths.map(
            (
              strength,
              index,
            ) => (
              <motion.div
                key={strength.title}
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
                  delay:
                    reduced
                      ? 0
                      : index * 0.08,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -5,
                        transition: {
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
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

                    min-h-[190px]

                    flex-col

                    overflow-hidden

                    rounded-[20px]

                    border
                    border-slate-200/80

                    bg-white

                    p-5

                    shadow-[0_12px_35px_rgba(35,43,74,0.06)]

                    transition-[border-color,box-shadow,transform]
                    duration-700

                    hover:border-[#3F80CF]/25

                    hover:shadow-[0_24px_60px_rgba(35,43,74,0.12)]

                    sm:p-6
                  "
                >
                  <CardLightSweep light />

                  <span
                    className="
                      absolute
                      left-0
                      top-0

                      h-[3px]
                      w-0

                      bg-[#3F80CF]

                      transition-all
                      duration-700

                      group-hover:w-full
                    "
                  />

                  <span
                    className="
                      text-[10px]

                      font-bold

                      tracking-[0.16em]

                      text-[#3F80CF]/75
                    "
                  >
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <h3
                    className="
                      mt-4

                      text-[18px]

                      font-bold

                      leading-[1.25]

                      tracking-[-0.02em]

                      text-[#171A35]

                      transition-transform
                      duration-500

                      group-hover:translate-x-1

                      sm:text-[19px]
                    "
                  >
                    {strength.title}
                  </h3>

                  <p
                    className="
                      mt-3

                      text-[13px]

                      leading-6

                      text-slate-600

                      sm:text-[14px]
                      sm:leading-7
                    "
                  >
                    {strength.body}
                  </p>

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

                        from-[#3F80CF]/25
                        to-transparent
                      "
                    />
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}