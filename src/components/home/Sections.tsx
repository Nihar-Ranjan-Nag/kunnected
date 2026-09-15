import { useState } from "react";

import {
  AnimatePresence,
  motion,
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
import { SectionUnderline } from "@/components/home/Stats";

import {
  company,
  project,
  projectScope,
} from "@/lib/site";

import caseAsset from "@/assets/case-study.jpg";
import studentAsset from "@/assets/student-living.jpg";
import campusAsset from "@/assets/hero-campus.jpg";

/* =========================================================
   CASE STUDY
========================================================= */

export function CaseStudy() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-background

        py-14
        sm:py-18
        md:py-20
        lg:py-28
        xl:py-32
      "
    >
      {/* BACKGROUND WATERMARK */}
      <div
        aria-hidden="true"
        className="
          watermark-bg
          pointer-events-none
          select-none

          left-4
          top-8

          opacity-[0.012]

          sm:left-8
          sm:top-10

          lg:left-10
          lg:top-12
        "
      >
        Khalifa University
      </div>

      <div
        className="
          shell
          relative
          z-10
        "
      >
        {/* =================================================
            TOP TWO-COLUMN AREA
        ================================================== */}

        <div
          className="
            grid
            gap-12

            lg:grid-cols-[1fr_0.92fr]
            lg:items-start
            lg:gap-14

            xl:gap-20
          "
        >
          {/* LEFT SIDE */}
          <div className="min-w-0">
            <Reveal>
              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-muted-foreground

                    sm:text-[12px]
                  "
                >
                  Our Projects & Operations
                </p>

                <SectionUnderline />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                className="
                  mt-6
                  max-w-[780px]

                  text-[2.25rem]
                  font-extrabold
                  leading-[1]
                  tracking-[-0.04em]
                  text-white

                  sm:mt-7
                  sm:text-[2.8rem]

                  md:text-[3.25rem]

                  lg:text-[3.6rem]

                  xl:text-[4rem]
                "
              >
                Discover our thoughtfully managed student accommodation estates
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p
                className="
                  mt-5
                  max-w-2xl

                  text-[15px]
                  leading-7
                  text-muted-foreground

                  sm:mt-6
                  sm:text-[16px]

                  lg:text-[17px]
                "
              >
                {project.body}
              </p>
            </Reveal>

            <Reveal
              delay={0.16}
              className="
                mt-7
                sm:mt-8
              "
            >
              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-active

                    sm:text-[12px]
                  "
                >
                  {project.subtitle}
                </p>

                <p
                  className="
                    mt-3
                    max-w-2xl

                    text-[15px]
                    leading-7
                    text-white/75

                    sm:mt-4
                    sm:text-[16px]
                  "
                >
                  {project.scope}
                </p>
              </div>
            </Reveal>
          </div>

          {/* =================================================
              RIGHT SIDE / IMAGE GALLERY
          ================================================== */}

          <div
            className="
              flex
              min-w-0
              flex-col
              gap-4

              sm:gap-5

              lg:sticky
              lg:top-[126px]
            "
          >
            {/* LARGE IMAGE */}
            <Reveal>
              <div
                className="
                  group

                  aspect-[16/10]
                  w-full

                  overflow-hidden

                  rounded-[22px]

                  border
                  border-white/10

                  bg-[#121217]

                  sm:rounded-[26px]
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

                    transition-transform
                    duration-700

                    group-hover:scale-[1.035]
                  "
                />
              </div>
            </Reveal>

            {/* SECONDARY IMAGES */}
            <div
              className="
                grid
                grid-cols-1
                gap-4

                sm:grid-cols-2
                sm:gap-5
              "
            >
              <Reveal delay={0.1}>
                <div
                  className="
                    group

                    aspect-[16/10]
                    w-full

                    overflow-hidden

                    rounded-[20px]

                    border
                    border-white/10

                    bg-[#121217]

                    sm:aspect-[4/3]
                    sm:rounded-bl-[36px]
                    sm:rounded-tr-[36px]
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

                      transition-transform
                      duration-700

                      group-hover:scale-[1.05]
                    "
                  />
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div
                  className="
                    group

                    aspect-[16/10]
                    w-full

                    overflow-hidden

                    rounded-[20px]

                    border
                    border-white/10

                    bg-[#121217]

                    sm:aspect-[4/3]
                    sm:rounded-br-[36px]
                    sm:rounded-tl-[36px]
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

                      transition-transform
                      duration-700

                      group-hover:scale-[1.05]
                    "
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* =================================================
            FULL WIDTH OPERATIONAL CARDS
        ================================================== */}

        <div
          className="
            mt-12

            grid
            grid-cols-1
            gap-4

            sm:mt-14
            sm:grid-cols-2
            sm:gap-5

            lg:mt-16
            lg:grid-cols-4
            lg:gap-5

            xl:gap-6
          "
        >
          <Reveal
            delay={0.2}
            className="h-full"
          >
            <ScopeCard
              number="01"
              title="Hard Services"
              items={projectScope.hardServices}
            />
          </Reveal>

          <Reveal
            delay={0.24}
            className="h-full"
          >
            <ScopeCard
              number="02"
              title="Soft Services"
              items={projectScope.softServices}
            />
          </Reveal>

          <Reveal
            delay={0.28}
            className="h-full"
          >
            <ScopeCard
              number="03"
              title="Value-Added"
              items={projectScope.valueAdded}
            />
          </Reveal>

          <Reveal
            delay={0.32}
            className="h-full"
          >
            <ScopeCard
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
};

function ScopeCard({
  number,
  title,
  items,
}: ScopeCardProps) {
  return (
    <div
      className="
        group
        h-full

        rounded-[20px]

        border
        border-white/10

        bg-white/[0.045]

        p-6

        shadow-[0_14px_42px_rgba(0,0,0,0.12)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-active/30
        hover:bg-white/[0.06]
        hover:shadow-[0_20px_55px_rgba(0,0,0,0.18)]

        xl:p-7
      "
    >
      {/* NUMBER */}
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
            text-[12px]
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
            h-2
            w-2

            rounded-full

            bg-active/50

            transition-transform
            duration-300

            group-hover:scale-150
          "
        />
      </div>

      {/* TITLE */}
      <h3
        className="
          mt-4

          text-[18px]
          font-bold
          leading-snug
          text-white

          lg:text-[19px]

          xl:text-[21px]
        "
      >
        {title}
      </h3>

      {/* ITEMS */}
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

              text-[13px]
              leading-5
              text-white/58

              xl:text-[14px]
              xl:leading-6
            "
          >
            <span
              className="
                mt-[7px]

                h-1.5
                w-1.5

                shrink-0

                rounded-full

                bg-active
              "
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
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
          shell

          py-14

          sm:py-18

          md:py-20

          lg:py-28

          xl:py-32
        "
      >
        {/* HEADER */}
        <Reveal>
          <div>
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-muted-foreground

                sm:text-[12px]
              "
            >
              What the University Teams Say
            </p>

            <SectionUnderline />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p
            className="
              mt-6
              max-w-3xl

              text-[18px]
              leading-8
              text-white/75

              sm:mt-7
              sm:text-[21px]

              lg:text-[24px]
              lg:leading-9
            "
          >
            Feedback from the housing administrators, estates directors, and
            student accommodation teams who experience our operations daily
            across campuses.
          </p>
        </Reveal>

        {/* TESTIMONIAL CARD */}
        <div
          className="
            mt-10

            sm:mt-12

            lg:mt-14
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

              sm:rounded-[26px]
              sm:p-8

              md:p-10

              lg:p-12
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
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* STARS */}
                <div
                  className="
                    mb-5

                    flex
                    items-center
                    gap-1.5

                    text-[#3F80CF]

                    sm:mb-6
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

                {/* QUOTE */}
                <p
                  className="
                    max-w-[36ch]

                    text-[1.85rem]
                    font-bold
                    leading-[1.15]
                    tracking-[-0.03em]
                    text-white

                    sm:text-[2.35rem]

                    lg:text-[3rem]
                  "
                >
                  &ldquo;{quotes[i].quote}&rdquo;
                </p>

                {/* AUTHOR */}
                <footer
                  className="
                    mt-7

                    text-[14px]
                    leading-6
                    text-muted-foreground

                    sm:mt-8
                    sm:text-[15px]
                  "
                >
                  <span className="font-semibold text-white/85">
                    {quotes[i].name}
                  </span>

                  <span className="mx-2 text-white/25">
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

                sm:pt-7
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
                  duration-300

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
                  duration-300

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
          shell
          relative
          z-10

          py-14

          sm:py-18

          md:py-20

          lg:py-28

          xl:py-32
        "
      >
        {/* HEADING */}
        <Reveal>
          <p
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#3F80CF]

              sm:text-[12px]
            "
          >
            {company.purpose}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="
              mt-5
              max-w-[12ch]

              text-[2.75rem]
              font-extrabold
              leading-[0.98]
              tracking-[-0.045em]
              text-white

              sm:mt-6
              sm:text-[3.5rem]

              md:text-[4.25rem]

              lg:text-[5rem]
            "
          >
            Get in Touch
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p
            className="
              mt-5
              max-w-2xl

              text-[16px]
              leading-7
              text-muted-foreground

              sm:mt-6
              sm:text-[18px]
              sm:leading-8
            "
          >
            {company.tagline}
          </p>
        </Reveal>

        {/* CONTACT GRID */}
        <div
          className="
            mt-9

            grid
            grid-cols-1
            gap-5

            border-t
            border-hairline

            pt-8

            sm:mt-12
            sm:gap-6
            sm:pt-10

            md:grid-cols-2

            lg:mt-14
            lg:gap-8
          "
        >
          {/* CONTACT CARD */}
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

              {/* WEBSITE */}
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

          {/* OFFICE / SUPPORT CARD */}
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
                  Our administrative and management teams are available during
                  standard working hours for support, meetings, and planned
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
                    A staffed helpdesk and emergency response team remains
                    active 24/7/365 to handle any immediate residential or
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