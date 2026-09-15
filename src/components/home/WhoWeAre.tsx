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
   WHO WE ARE
========================================================= */

export function WhoWeAre() {
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
                About Kunnected FM
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

  <Reveal delay={0.08}>
    <div
      className="
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
    >
      <Parallax
        distance={24}
        className="
          h-full
          w-full
        "
      >
        <img
          src={studentAsset}
          alt="A bright student accommodation lounge with natural light"
          width={1408}
          height={1008}
          loading="lazy"
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

      <div
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
      </div>
    </div>
  </Reveal>

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

      <Reveal delay={0.1}>
        <div
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

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-[#4E94E5]/35
            hover:bg-white/[0.06]

            sm:p-5
          "
        >
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

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
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

            <span
              className="
                text-[9px]

                font-semibold

                tracking-[0.14em]

                text-white/25
              "
            >
              01
            </span>
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
        </div>
      </Reveal>

      {/* =============================================
          PROMISE
      ============================================== */}

      <Reveal delay={0.14}>
        <div
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

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-[#4E94E5]/35
            hover:bg-white/[0.06]

            sm:p-5
          "
        >
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

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
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

            <span
              className="
                text-[9px]

                font-semibold

                tracking-[0.14em]

                text-white/25
              "
            >
              02
            </span>
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
        </div>
      </Reveal>
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
                <Reveal
                  key={
                    foundation.n
                  }
                  delay={
                    0.06 * index
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

                      transition-all
                      duration-300

                      hover:-translate-y-1

                      hover:border-[#4E94E5]/35

                      hover:bg-white/[0.055]

                      hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]

                      sm:p-6
                    "
                  >
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
                        duration-500

                        group-hover:w-full
                      "
                    />

                    {/* NUMBER */}

                    <div
                      className="
                        flex

                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          text-[11px]

                          font-semibold

                          tracking-[0.18em]

                          text-active
                        "
                      >
                        {foundation.n}
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

                          text-[10px]

                          font-semibold

                          text-white/35
                        "
                      >
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h4
                      className="
                        mt-6

                        text-[19px]

                        font-bold

                        leading-[1.25]

                        tracking-[-0.02em]

                        text-white

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
                </Reveal>
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

                bg-[#3F80CF]/[0.06]

                px-4
                py-2
              "
            >
              <span
                className="
                  h-[6px]
                  w-[6px]

                  rounded-full

                  bg-active

                  shadow-[0_0_10px_rgba(63,128,207,0.45)]
                "
              />

              <p
                className="
                  text-[14px]

                  font-bold

                  tracking-[-0.01em]

                  text-[#201A57]

                  sm:text-[15px]

                  lg:text-[16px]
                "
              >
                Why Choose Us
              </p>
            </div>

            <h2
              className="
                mt-5

                text-[2rem]

                font-bold

                leading-[1.08]

                tracking-[-0.035em]

                text-[#201A57]

                sm:text-[2.4rem]

                md:text-[2.7rem]

                lg:text-[3rem]
              "
            >
              Our Standards &amp;
              Commitment
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

              text-[15px]

              leading-7

              text-slate-700

              sm:text-[16px]
              sm:leading-8

              lg:text-[17px]
            "
          >
            {company.usp}
          </p>
        </Reveal>

        {/* =============================================
            STRENGTH CARDS
        ============================================== */}

        <div
          className="
            mt-8

            grid

            gap-5

            sm:mt-10
            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-5
          "
        >
          {keyStrengths.map(
            (
              strength,
              index,
            ) => (
              <Reveal
                key={
                  strength.title
                }
                delay={
                  0.08 * index
                }
                className="
                  h-full
                "
              >
                <div
                  className="
                    group

                    relative

                    h-full

                    overflow-hidden

                    rounded-[20px]

                    border
                    border-slate-200/70

                    bg-white/75

                    p-5

                    shadow-[0_10px_30px_rgba(32,26,87,0.06)]

                    backdrop-blur-md

                    transition-all
                    duration-300

                    hover:-translate-y-1

                    hover:border-[#3F80CF]/25

                    hover:shadow-[0_18px_40px_rgba(32,26,87,0.10)]

                    sm:p-6
                  "
                >
                  <span
                    className="
                      absolute

                      left-0
                      top-0

                      h-[3px]
                      w-0

                      bg-active

                      transition-all
                      duration-500

                      group-hover:w-full
                    "
                  />

                  <span
                    className="
                      font-display

                      text-[11px]

                      font-semibold

                      tracking-[0.18em]

                      text-active
                    "
                  >
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <h3
                    className="
                      mt-4

                      text-[18px]

                      font-bold

                      leading-snug

                      tracking-[-0.02em]

                      text-[#201A57]

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
                </div>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}