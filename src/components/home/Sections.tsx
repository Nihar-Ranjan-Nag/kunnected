import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  Globe,
  MapPin,
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
        border-[#3F80CF]/30

        bg-[#3F80CF]/[0.08]

        px-3.5
        py-2

        sm:px-4
        sm:py-2.5
      "
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
        className="
          font-sans

          text-[12px]
          font-medium

          tracking-[0.02em]

          text-white

          sm:text-[13px]

          lg:text-[14px]
        "
      >
        {children}
      </span>
    </div>
  );
}

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
        duration: 0.7,
        ease: easePremium,
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
   CASE STUDY / PROJECT
========================================================= */

export function CaseStudy() {
  const reduced = useReducedMotion();

  return (
    <section
      id="projects"
      className="
        relative

        overflow-hidden

        bg-[#201A57]

        py-12

        sm:py-14

        md:py-16

        lg:py-20

        xl:py-24
      "
    >
      <div
        className="
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
            PROJECT INTRO
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
          {/* LEFT */}

          <div className="min-w-0">
            <Reveal>
              <SectionLabel>
                Our Projects & Operations
              </SectionLabel>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                className="
                  mt-5

                  max-w-[760px]

                  font-display

                  text-[2rem]
                  font-medium

                  leading-[1.05]

                  tracking-[-0.035em]

                  text-white

                  min-[380px]:text-[2.15rem]

                  sm:text-[2.6rem]

                  md:text-[3rem]

                  lg:text-[3.35rem]

                  xl:text-[3.6rem]
                "
              >
                Thoughtfully Managed

                <span
                  className="
                    block

                    text-[#3F80CF]
                  "
                >
                  Student Accommodation
                </span>
              </h2>
            </Reveal>

            <SectionUnderline />

            <Reveal delay={0.12}>
              <p
                className="
                  mt-5

                  max-w-2xl

                  font-sans

                  text-[14px]
                  font-normal

                  leading-7

                  text-white/65

                  sm:text-[15px]

                  lg:text-[16px]
                  lg:leading-8
                "
              >
                {project.body}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div
                className="
                  mt-5

                  border-l-[3px]
                  border-[#3F80CF]

                  pl-4

                  sm:mt-6
                  sm:pl-5
                "
              >
                <p
                  className="
                    font-sans

                    text-[11px]
                    font-medium

                    uppercase

                    tracking-[0.17em]

                    text-[#3F80CF]
                  "
                >
                  {project.subtitle}
                </p>

                <p
                  className="
                    mt-2

                    max-w-2xl

                    font-sans

                    text-[14px]
                    font-normal

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
              PROJECT IMAGES
          ================================================== */}

          <div
            className="
              flex
              min-w-0
              flex-col

              gap-4

              sm:gap-5

              lg:mt-[60px]
            "
          >
            {/* MAIN IMAGE */}

            <Reveal>
              <motion.div
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        y: 18,
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
                  duration: 0.8,
                  ease: easePremium,
                }}
                className="
                  relative

                  h-[270px]
                  w-full

                  overflow-hidden

                  rounded-[18px]

                  border
                  border-white/10

                  bg-[#201A57]

                  sm:h-[340px]
                  sm:rounded-[20px]

                  lg:h-[310px]

                  xl:h-[330px]
                "
              >
                <img
                  src={caseAsset}
                  alt="Khalifa University student accommodation buildings"
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="
                    h-full
                    w-full

                    object-cover
                  "
                />

                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-[#201A57]/20
                  "
                />

                <div
                  className="
                    absolute

                    bottom-4
                    left-4

                    rounded-full

                    border
                    border-white/20

                    bg-[#201A57]/90

                    px-3.5
                    py-1.5

                    font-sans

                    text-[9px]
                    font-medium

                    uppercase

                    tracking-[0.15em]

                    text-white

                    sm:bottom-5
                    sm:left-5

                    sm:text-[10px]
                  "
                >
                  Khalifa University
                </div>
              </motion.div>
            </Reveal>

            {/* SMALL IMAGES */}

            <div
              className="
                grid
                grid-cols-1

                gap-4

                min-[480px]:grid-cols-2

                sm:gap-5
              "
            >
              <Reveal
                delay={0.1}
                className="h-full"
              >
                <div
                  className="
                    relative

                    h-[210px]

                    overflow-hidden

                    rounded-[18px]

                    border
                    border-white/10

                    bg-[#201A57]

                    sm:h-[220px]

                    lg:h-[185px]

                    xl:h-[200px]
                  "
                >
                  <img
                    src={studentAsset}
                    alt="Student living space"
                    width={1408}
                    height={1008}
                    loading="lazy"
                    className="
                      h-full
                      w-full

                      object-cover
                    "
                  />

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      bg-[#201A57]/20
                    "
                  />

                  <div
                    className="
                      absolute

                      bottom-3
                      left-3

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

                      sm:bottom-4
                      sm:left-4

                      xl:text-[10px]
                    "
                  >
                    Student Living
                  </div>
                </div>
              </Reveal>

              <Reveal
                delay={0.16}
                className="h-full"
              >
                <div
                  className="
                    relative

                    h-[210px]

                    overflow-hidden

                    rounded-[18px]

                    border
                    border-white/10

                    bg-[#201A57]

                    sm:h-[220px]

                    lg:h-[185px]

                    xl:h-[200px]
                  "
                >
                  <img
                    src={campusAsset}
                    alt="Campus architecture"
                    width={1920}
                    height={1088}
                    loading="lazy"
                    className="
                      h-full
                      w-full

                      object-cover
                    "
                  />

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      bg-[#201A57]/20
                    "
                  />

                  <div
                    className="
                      absolute

                      bottom-3
                      left-3

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

                      sm:bottom-4
                      sm:left-4

                      xl:text-[10px]
                    "
                  >
                    Campus Environment
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* =================================================
            OPERATIONAL SCOPE
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
              <SectionLabel>
                Operational Scope
              </SectionLabel>

              <h3
                className="
                  mt-5

                  max-w-[700px]

                  font-display

                  text-[1.8rem]
                  font-medium

                  leading-[1.08]

                  tracking-[-0.03em]

                  text-white

                  sm:text-[2.2rem]

                  lg:text-[2.55rem]
                "
              >
                Complete support across

                <span
                  className="
                    text-[#3F80CF]
                  "
                >
                  {" "}
                  every aspect of student living.
                </span>
              </h3>

              <SectionUnderline />
            </div>

            <p
              className="
                max-w-[480px]

                font-sans

                text-[14px]
                font-normal

                leading-7

                text-white/60

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

        {/* SCOPE CARDS */}

        <div
          className="
            mt-8

            grid
            grid-cols-1

            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-3
          "
        >
          <Reveal
            delay={0.08}
            className="h-full"
          >
            <ScopeCard
              delay={0.08}
              title="Hard Services"
              items={
                projectScope.hardServices
              }
            />
          </Reveal>

          <Reveal
            delay={0.12}
            className="h-full"
          >
            <ScopeCard
              delay={0.14}
              title="Soft Services"
              items={
                projectScope.softServices
              }
            />
          </Reveal>

          <Reveal
            delay={0.16}
            className="
              h-full
              sm:col-span-2
              lg:col-span-1
            "
          >
            <ScopeCard
              delay={0.2}
              title="Value-Added"
              items={
                projectScope.valueAdded
              }
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
  title: string;
  items: string[];
  delay?: number;
};

function ScopeCard({
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
              y: 20,
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
        delay: reduced
          ? 0
          : delay,

        duration: 0.65,

        ease: easePremium,
      }}
      whileHover={
        reduced
          ? undefined
          : {
              y: -3,
            }
      }
      className="
        relative

        flex
        h-full

        min-h-[230px]

        flex-col

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

      <h3
        className="
          mt-1

          font-display

          text-[19px]
          font-medium

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

              font-sans

              text-[13px]
              font-normal

              leading-6

              text-white/60

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

      <span
        className="
          mt-auto

          block

          pt-5
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
      </span>
    </motion.div>
  );
}

/* =========================================================
   TESTIMONIALS
========================================================= */

/*
 * No testimonial quotes are included in the approved
 * Brand Book, so this component intentionally renders
 * nothing instead of displaying unsupported content.
 *
 * Keeping the export prevents existing page imports
 * from breaking.
 */

export function Testimonials() {
  return null;
}

/* =========================================================
   CONTACT / CTA
========================================================= */

export function CtaBand() {
  return (
    <section
      id="contact"
      className="
        relative

        overflow-hidden

        border-t
        border-white/10

        bg-[#201A57]

        text-white
      "
    >
      {/* =================================================
          APPROVED BRAND PATTERN
      ================================================== */}

      <ArcPattern
        className="
          absolute
          inset-0

          h-full
          w-full

          text-[#3F80CF]
        "
        opacity={0.04}
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
        <Reveal>
          <SectionLabel>
            Contact KUnnected FM
          </SectionLabel>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="
              mt-5

              max-w-[750px]

              font-display

              text-[2rem]
              font-medium

              leading-[1.05]

              tracking-[-0.035em]

              text-white

              min-[380px]:text-[2.15rem]

              sm:text-[2.6rem]

              md:text-[3rem]

              lg:text-[3.35rem]
            "
          >
            Get in

            <span
              className="
                text-[#3F80CF]
              "
            >
              {" "}
              Touch
            </span>
          </h2>
        </Reveal>

        <SectionUnderline />

        {/* =================================================
            CONTACT CARDS
        ================================================== */}

        <div
          className="
            mt-8

            grid
            grid-cols-1

            gap-5

            border-t
            border-white/10

            pt-8

            sm:mt-10
            sm:gap-6

            md:grid-cols-2

            lg:gap-8
          "
        >
          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          <Reveal
            delay={0.14}
            className="h-full"
          >
            <div
              className="
                h-full

                rounded-[18px]

                border
                border-white/10

                bg-white/[0.035]

                p-5

                sm:p-6

                lg:p-8
              "
            >
              <span
                className="
                  block

                  h-[3px]
                  w-[48px]

                  bg-[#3F80CF]
                "
              />

              <h3
                className="
                  mt-5

                  font-display

                  text-[18px]
                  font-medium

                  text-white

                  sm:text-[20px]
                "
              >
                Contact Info
              </h3>

              {/* ADDRESS */}

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

                    border
                    border-[#3F80CF]/25

                    text-[#3F80CF]
                  "
                >
                  <MapPin
                    className="
                      h-5
                      w-5
                    "
                  />
                </div>

                <div className="min-w-0">
                  <h4
                    className="
                      font-sans

                      text-[14px]
                      font-medium

                      text-white

                      sm:text-[15px]
                    "
                  >
                    {company.name}
                  </h4>

                  <p
                    className="
                      mt-1

                      font-sans

                      text-[13px]

                      leading-6

                      text-white/60

                      sm:text-[14px]
                    "
                  >
                    {
                      company.address.line1
                    }

                    <br />

                    {
                      company.address.line2
                    }
                  </p>
                </div>
              </div>

              {/* WEBSITE */}

              <div
                className="
                  mt-7

                  border-t
                  border-white/10

                  pt-6
                "
              >
                <a
                  href={`https://${company.web}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex

                    items-center

                    gap-3

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

                      border
                      border-white/10

                      text-[#3F80CF]
                    "
                  >
                    <Globe
                      className="
                        h-4
                        w-4
                      "
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        font-sans

                        text-[10px]
                        font-medium

                        uppercase

                        tracking-[0.15em]

                        text-white/50
                      "
                    >
                      Website
                    </p>

                    <p
                      className="
                        mt-0.5

                        break-all

                        font-sans

                        text-[13px]
                        font-medium

                        text-white

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

          {/* =================================================
              OFFICE HOURS
          ================================================== */}

          <Reveal
            delay={0.18}
            className="h-full"
          >
            <div
              className="
                flex
                h-full

                flex-col

                rounded-[18px]

                border
                border-white/10

                bg-white/[0.035]

                p-5

                sm:p-6

                lg:p-8
              "
            >
              <span
                className="
                  block

                  h-[3px]
                  w-[48px]

                  bg-[#3F80CF]
                "
              />

              <h3
                className="
                  mt-5

                  font-display

                  text-[18px]
                  font-medium

                  text-white

                  sm:text-[20px]
                "
              >
                Office Hours & Support
              </h3>

              <div
                className="
                  mt-6

                  border-t
                  border-white/10

                  pt-6
                "
              >
                <h4
                  className="
                    font-sans

                    text-[10px]
                    font-medium

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

                    font-sans

                    text-[14px]

                    leading-6

                    text-white/80
                  "
                >
                  {company.hours}
                </p>
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

                      border
                      border-[#3F80CF]/25

                      px-3
                      py-1.5

                      font-sans

                      text-[11px]
                      font-medium

                      text-[#3F80CF]

                      sm:text-xs
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5

                        shrink-0

                        rounded-full

                        bg-[#3F80CF]
                      "
                    />

                    24/7 Operations Helpdesk
                  </span>

                  <p
                    className="
                      mt-3

                      font-sans

                      text-[12px]

                      leading-6

                      text-white/60

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