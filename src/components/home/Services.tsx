import { useState } from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

import {
  industries,
  services,
} from "@/lib/site";

import engineerAsset from "@/assets/engineer.jpg";
import controlRoomAsset from "@/assets/control-room.jpg";
import studentAsset from "@/assets/student-living.jpg";
import hvacAsset from "@/assets/hvac.jpg";
import electricalAsset from "@/assets/electrical.jpg";
import caseStudyAsset from "@/assets/case-study.jpg";
import fireSafetyAsset from "@/assets/fire-safety.png";
import preventiveMaintenanceAsset from "@/assets/preventive-maintenance.png";
import assetManagementAsset from "@/assets/asset-management.png";
import operationsManagementAsset from "@/assets/operations-management.png";
import emergencyMaintenanceAsset from "@/assets/emergency-maintenance.png";

const serviceImages = {
  "control-room": controlRoomAsset,
  "student-living": studentAsset,
  hvac: hvacAsset,
  electrical: electricalAsset,
  engineer: engineerAsset,
  "case-study": caseStudyAsset,
  "fire-safety": fireSafetyAsset,
  "preventive-maintenance": preventiveMaintenanceAsset,
  "asset-management": assetManagementAsset,
  "operations-management": operationsManagementAsset,
  "emergency-maintenance": emergencyMaintenanceAsset,
} as const;

const categories = [
  {
    id: "all",
    label: "All Services",
  },
  {
    id: "hard",
    label: "Hard Services",
  },
  {
    id: "soft",
    label: "Soft Services",
  },
  {
    id: "mgmt",
    label: "Operations & Management",
  },
] as const;

const serviceCategories: Record<
  string,
  "hard" | "soft" | "mgmt"
> = {
  "management-services": "mgmt",
  "health-safety-management": "mgmt",
  "helpdesk-service": "mgmt",

  "building-installations-asset-maintenance":
    "hard",

  "grounds-maintenance-indoor-plants":
    "soft",

  "programmed-replacement-lifecycle":
    "mgmt",

  "energy-utilities-management":
    "mgmt",

  "cleaning-services": "soft",
  "waste-management-services": "soft",
  "pest-control-services": "soft",
  "laundry-equipment-service": "soft",

  "security-equipment-maintenance":
    "hard",

  "vending-equipment-services":
    "hard",

  "additional-services": "soft",
};

/* =========================================================
   SERVICES
========================================================= */

export function Services() {
  const reduced = useReducedMotion();

  const [activeTab, setActiveTab] =
    useState<string>("all");

  const filteredServices = services.filter(
    (service) => {
      if (activeTab === "all") {
        return true;
      }

      return (
        serviceCategories[service.slug] ===
        activeTab
      );
    },
  );

  return (
    <section
      id="services"
      className="
        scroll-mt-[102px]

        border-t
        border-white/10

        bg-background

        py-14

        sm:py-18

        md:py-20

        lg:py-28

        xl:py-32
      "
    >
      <div className="shell">
        {/* SECTION LABEL */}
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
              Our Services
            </p>

            <span
              className="
                mt-3
                block
                h-[2px]
                w-14

                rounded-full

                bg-active
              "
            />
          </div>
        </Reveal>

        {/* INTRO */}
        <div
          className="
            mt-7

            grid
            gap-6

            lg:grid-cols-[1.15fr_0.85fr]
            lg:items-end
            lg:gap-14
          "
        >
          <Reveal delay={0.06}>
            <h2
              className="
                max-w-[18ch]

                text-[2.35rem]
                font-extrabold
                leading-[1]
                tracking-[-0.04em]
                text-white

                sm:text-[3rem]

                md:text-[3.5rem]

                lg:text-[4rem]
              "
            >
              Complete integrated facilities management for Khalifa University Student Accommodation
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="
                max-w-xl

                text-[15px]
                leading-7
                text-white/60

                sm:text-[16px]
                sm:leading-8
              "
            >
              We deliver complete facilities management solutions for Khalifa University student accommodation. Our team combines reliability, functionality, and quality craftsmanship to create environments that are safe, practical, and tailored to student living.
            </p>
          </Reveal>
        </div>

        {/* =================================================
            FILTER TABS
        ================================================== */}

        <div
          className="
            -mx-1

            mt-8

            flex
            gap-2

            overflow-x-auto

            px-1
            pb-3

            [scrollbar-width:none]

            [&::-webkit-scrollbar]:hidden

            sm:mx-0
            sm:mt-10
            sm:flex-wrap
            sm:overflow-visible
            sm:px-0
          "
        >
          {categories.map((cat) => {
            const isActive =
              activeTab === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() =>
                  setActiveTab(cat.id)
                }
                className={`
                  relative
                  shrink-0

                  rounded-full

                  border

                  px-4
                  py-2.5

                  text-[12px]
                  font-semibold
                  tracking-[0.02em]

                  transition-all
                  duration-300

                  sm:px-5
                  sm:py-3
                  sm:text-[13px]

                  ${
                    isActive
                      ? `
                        border-active
                        bg-active
                        text-white
                        shadow-[0_8px_24px_rgba(63,128,207,0.18)]
                      `
                      : `
                        border-white/10
                        bg-white/[0.025]
                        text-white/60

                        hover:border-white/20
                        hover:bg-white/[0.05]
                        hover:text-white
                      `
                  }
                `}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* =================================================
            SERVICES GRID
        ================================================== */}

        <motion.ul
          layout
          className="
            mt-7

            grid
            grid-cols-1
            gap-5

            sm:mt-10
            sm:grid-cols-2

            lg:grid-cols-3

            xl:gap-6
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.li
                layout
                key={service.slug}
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.96,
                        y: 12,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: 10,
                }}
                transition={{
                  duration: 0.4,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}
                className="h-full"
              >
                <motion.a
                  href="#contact"
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          y: -5,
                        }
                  }
                  transition={{
                    duration: 0.3,
                    ease: [
                      0.16,
                      1,
                      0.3,
                      1,
                    ],
                  }}
                  className="
                    group

                    block
                    h-full

                    overflow-hidden

                    rounded-[20px]

                    border
                    border-white/10

                    bg-white/[0.035]

                    shadow-[0_12px_35px_rgba(0,0,0,0.10)]

                    transition-all
                    duration-300

                    hover:border-active/25
                    hover:bg-white/[0.05]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.16)]
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative

                      aspect-[16/10]

                      overflow-hidden

                      bg-[#16161c]
                    "
                  >
                    <motion.img
                      src={
                        serviceImages[
                          service.imageKey
                        ]
                      }
                      alt={service.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      whileHover={
                        reduced
                          ? undefined
                          : {
                              scale: 1.05,
                            }
                      }
                      transition={{
                        duration: 0.6,
                        ease: [
                          0.16,
                          1,
                          0.3,
                          1,
                        ],
                      }}
                      className="
                        h-full
                        w-full

                        object-cover

                        opacity-80

                        transition-opacity
                        duration-300

                        group-hover:opacity-100
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-t

                        from-[#111118]/90
                        via-[#111118]/10
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0

                        h-px

                        bg-gradient-to-r

                        from-transparent
                        via-active/40
                        to-transparent
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      p-5

                      sm:p-6

                      lg:p-6
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >
                      <h3
                        className="
                          max-w-[90%]

                          text-[19px]
                          font-bold
                          leading-snug
                          text-white

                          transition-colors

                          group-hover:text-active

                          sm:text-[20px]
                        "
                      >
                        {service.title}
                      </h3>

                      <ArrowUpRight
                        className="
                          mt-1

                          h-5
                          w-5

                          shrink-0

                          text-white/35

                          transition-all
                          duration-300

                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-active
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-3

                        text-[14px]
                        leading-6
                        text-white/55

                        sm:text-[15px]
                        sm:leading-7
                      "
                    >
                      {service.summary}
                    </p>
                  </div>
                </motion.a>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

/* =========================================================
   INDUSTRIES
========================================================= */

export function Industries() {
  return (
    <section
      id="industries"
      className="
        relative
        overflow-hidden

        border-t
        border-white/10

        bg-[#0b0b10]
      "
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={engineerAsset}
        alt=""
        aria-hidden="true"
        width={1400}
        height={1100}
        loading="lazy"
        className="
          pointer-events-none

          absolute
          inset-0

          h-full
          w-full

          object-cover

          opacity-[0.07]
        "
      />

      {/* SOFT OVERLAY */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-[#0b0b10]/80
          via-[#0b0b10]/90
          to-[#0b0b10]
        "
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
        {/* SECTION LABEL */}
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
              Areas of Accommodation Operations
            </p>

            <span
              className="
                mt-3
                block
                h-[2px]
                w-14

                rounded-full

                bg-active
              "
            />
          </div>
        </Reveal>

        {/* HEADING */}
        <Reveal delay={0.08}>
          <h2
            className="
              mt-6
              max-w-[19ch]

              text-[2.2rem]
              font-extrabold
              leading-[1.02]
              tracking-[-0.035em]
              text-white

              sm:mt-7
              sm:text-[2.8rem]

              md:text-[3.2rem]

              lg:text-[3.7rem]
            "
          >
            Dedicated to Khalifa University Student Accommodation and the students who live here
          </h2>
        </Reveal>

        {/* INDUSTRY CARDS */}
        <div
          className="
            mt-9

            grid
            grid-cols-1
            gap-4

            sm:mt-12
            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-4
          "
        >
          {industries.map((ind, i) => (
            <Reveal
              key={ind.title}
              delay={0.06 * i}
              className="h-full"
            >
              <div
                className="
                  group
                  h-full

                  rounded-[20px]

                  border
                  border-white/10

                  bg-white/[0.035]

                  p-6

                  backdrop-blur-sm

                  shadow-[0_12px_32px_rgba(0,0,0,0.10)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-active/25
                  hover:bg-white/[0.05]
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]

                  sm:p-7

                  lg:p-7

                  xl:p-8
                "
              >
                <div
                  className="
                    mb-5

                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[11px]
                      font-bold
                      tracking-[0.18em]
                      text-active
                    "
                  >
                    {String(i + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <span
                    className="
                      h-2
                      w-2

                      rounded-full

                      bg-active/50

                      transition-transform

                      group-hover:scale-150
                    "
                  />
                </div>

                <h3
                  className="
                    text-[20px]
                    font-bold
                    leading-snug
                    text-white

                    sm:text-[21px]

                    lg:text-[22px]
                  "
                >
                  {ind.title}
                </h3>

                <p
                  className="
                    mt-4

                    text-[14px]
                    leading-6
                    text-white/55

                    sm:text-[15px]
                    sm:leading-7
                  "
                >
                  {ind.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}