import { useState } from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ArrowUpRight,
  Check,
} from "lucide-react";

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
import energyUtilitiesManagementAsset from
  "@/assets/services/01_energy_utilities_management.png";
import cleaningServicesAsset from
  "@/assets/services/02_cleaning_services.png";
import wasteManagementAsset from
  "@/assets/services/03_waste_management.png";
import pestControlAsset from
  "@/assets/services/04_pest_control.png";
import laundryEquipmentServiceAsset from
  "@/assets/services/05_laundry_equipment_service.png";
import securityEquipmentMaintenanceAsset from
  "@/assets/services/06_security_equipment_maintenance.png";
import vendingEquipmentServicesAsset from
  "@/assets/services/07_vending_equipment_services.png";
import additionalServicesAsset from
  "@/assets/services/08_additional_services.png";
import buildingInstallationsAsset from
  "@/assets/services/Building Installations & Asset Maintenance.png";
import groundsMaintenanceAsset from
  "@/assets/services/Grounds Maintenance & Indoor Plant Services.png";

/* =========================================================
   SERVICE IMAGES
========================================================= */

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

  "energy-utilities-management":
    energyUtilitiesManagementAsset,
  "cleaning-services": cleaningServicesAsset,
  "waste-management-services": wasteManagementAsset,
  "pest-control-services": pestControlAsset,
  "laundry-equipment-service":
    laundryEquipmentServiceAsset,
  "security-equipment-maintenance":
    securityEquipmentMaintenanceAsset,
  "vending-equipment-services":
    vendingEquipmentServicesAsset,
  "additional-services": additionalServicesAsset,
  "building-installations-asset-maintenance":
    buildingInstallationsAsset,
  "grounds-maintenance-indoor-plants":
    groundsMaintenanceAsset,
} as const;

/* =========================================================
   FILTER CATEGORIES
========================================================= */

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

/* =========================================================
   SERVICE CATEGORY MAP
========================================================= */

const serviceCategories: Record<
  string,
  "hard" | "soft" | "mgmt"
> = {
  "management-services": "mgmt",

  "health-safety-management":
    "mgmt",

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

  "waste-management-services":
    "soft",

  "pest-control-services": "soft",

  "laundry-equipment-service":
    "soft",

  "security-equipment-maintenance":
    "hard",

  "vending-equipment-services":
    "hard",

  "additional-services": "soft",
};

const categoryNames = {
  hard: "Hard Services",
  soft: "Soft Services",
  mgmt: "Operations & Management",
};

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
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   PREMIUM CARD LIGHT SWEEP
========================================================= */

function CardLightSweep() {
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
        via-white/[0.09]
        to-transparent

        opacity-0

        transition-[transform,opacity]
        duration-[1200ms]
        ease-out

        group-hover:translate-x-[520%]
        group-hover:opacity-100
      "
    />
  );
}

/* =========================================================
   SERVICES
========================================================= */

export function Services() {
  const reduced =
    useReducedMotion();

  const [
    activeTab,
    setActiveTab,
  ] = useState<string>("all");

  const filteredServices =
    services.filter((service) => {
      if (activeTab === "all") {
        return true;
      }

      return (
        serviceCategories[
          service.slug
        ] === activeTab
      );
    });

  return (
    <section
      id="services"
      className="
        relative

        scroll-mt-[110px]

        overflow-hidden

        border-t
        border-white/10

        bg-background

        py-12

        sm:py-14

        md:py-16

        lg:py-20

        xl:py-24
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div
        className="
          pointer-events-none

          absolute

          -right-[220px]
          top-[60px]

          h-[460px]
          w-[460px]

          rounded-full

          bg-[#3F80CF]/[0.06]

          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          -left-[250px]
          top-[650px]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#6257C5]/[0.045]

          blur-[130px]
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

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
        {/* =========================================
            COMPACT INTRO
        ========================================== */}

        <div
          className="
            grid

            gap-8

            border-b
            border-white/10

            pb-8

            sm:pb-10

            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-center
            lg:gap-14

            xl:gap-20
          "
        >
          {/* =====================================
              LEFT INTRO
          ====================================== */}

          <div>
            <Reveal>
              <SectionLabel>
                Our Services
              </SectionLabel>
            </Reveal>

            {/* MAIN HEADING */}

            <Reveal delay={0.06}>
              <h2
                className="
                  mt-5

                  max-w-[760px]

                  text-[2.1rem]

                  font-bold

                  leading-[1.03]

                  tracking-[-0.04em]

                  text-white

                  sm:text-[2.6rem]

                  md:text-[3rem]

                  lg:text-[3.35rem]

                  xl:text-[3.65rem]
                "
              >
                Complete Integrated

                <span
                  className="
                    block

                    text-[#69AEF7]
                  "
                >
                  Facilities Management
                </span>
              </h2>
            </Reveal>

            {/* SUPPORTING TITLE */}

            <Reveal delay={0.1}>
              <p
                className="
                  mt-4

                  max-w-[700px]

                  text-[15px]

                  font-medium

                  leading-7

                  text-white/72

                  sm:text-[16px]

                  md:text-[17px]

                  lg:text-[18px]
                "
              >
                for Khalifa University
                Student Accommodation
              </p>
            </Reveal>
          </div>

          {/* =====================================
              RIGHT DESCRIPTION
          ====================================== */}

          <Reveal delay={0.12}>
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
                  max-w-xl

                  text-[14px]

                  leading-7

                  text-white/60

                  sm:text-[15px]

                  lg:text-[16px]
                  lg:leading-8
                "
              >
                We deliver complete
                facilities management
                solutions for Khalifa
                University student
                accommodation, combining
                reliability, functionality
                and quality service to
                create safe and practical
                student living
                environments.
              </p>

              {/* BENEFITS */}

              <div
                className="
                  mt-5

                  flex
                  flex-wrap

                  gap-x-5
                  gap-y-3
                "
              >
                {[
                  "Reliable",
                  "Safe",
                  "Student-focused",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex

                      items-center

                      gap-2

                      text-[13px]

                      font-semibold

                      text-white/70

                      sm:text-[14px]
                    "
                  >
                    <span
                      className="
                        flex

                        h-5
                        w-5

                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        bg-[#3F80CF]/15

                        text-[#69AEF7]
                      "
                    >
                      <Check
                        className="
                          h-3
                          w-3

                          stroke-[2.5]
                        "
                      />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* =========================================
            FILTER SECTION
        ========================================== */}

        <div
          className="
            mt-7

            flex
            flex-col

            gap-5

            sm:mt-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* FILTER TITLE */}

          <Reveal>
            <div>
              <p
                className="
                  text-[11px]

                  font-bold
                  uppercase

                  tracking-[0.18em]

                  text-white/40
                "
              >
                Explore by category
              </p>

              <p
                className="
                  mt-1

                  text-[13px]

                  text-white/50

                  sm:text-[14px]
                "
              >
                Choose a category to
                quickly find the right
                service.
              </p>
            </div>
          </Reveal>

          {/* FILTER BUTTONS */}

          <div
            className="
              -mx-1

              flex

              gap-2

              overflow-x-auto

              px-1
              pb-2

              [scrollbar-width:none]

              [&::-webkit-scrollbar]:hidden

              sm:mx-0
              sm:flex-wrap
              sm:px-0

              lg:justify-end
            "
          >
            {categories.map(
              (category) => {
                const isActive =
                  activeTab ===
                  category.id;

                return (
                  <button
                    key={
                      category.id
                    }
                    type="button"
                    onClick={() =>
                      setActiveTab(
                        category.id,
                      )
                    }
                    className={`
                      shrink-0

                      rounded-full

                      border

                      px-4
                      py-2.5

                      text-[12px]

                      font-semibold

                      transition-all
                      duration-300

                      sm:px-5
                      sm:text-[13px]

                      ${
                        isActive
                          ? `
                            border-active

                            bg-active

                            text-white

                            shadow-[0_8px_24px_rgba(63,128,207,0.20)]
                          `
                          : `
                            border-white/10

                            bg-white/[0.03]

                            text-white/60

                            hover:border-white/20

                            hover:bg-white/[0.06]

                            hover:text-white
                          `
                      }
                    `}
                  >
                    {
                      category.label
                    }
                  </button>
                );
              },
            )}
          </div>
        </div>

        {/* =========================================
            SERVICE COUNT
        ========================================== */}

        <Reveal>
          <div
            className="
              mt-5

              flex
              items-center

              gap-3
            "
          >
            <span
              className="
                h-px
                w-8

                bg-active
              "
            />

            <p
              className="
                text-[11px]

                font-semibold
                uppercase

                tracking-[0.14em]

                text-white/40
              "
            >
              {
                filteredServices.length
              }{" "}
              services available
            </p>
          </div>
        </Reveal>

        {/* =========================================
            SERVICES GRID
        ========================================== */}

        <motion.ul
          layout
          className="
            mt-7

            grid

            grid-cols-1

            gap-5

            sm:mt-9
            sm:grid-cols-2

            lg:grid-cols-3

            xl:gap-6
          "
        >
          <AnimatePresence
            mode="popLayout"
          >
            {filteredServices.map(
              (service, index) => {
                const category =
                  serviceCategories[
                    service.slug
                  ];

                return (
                  <motion.li
                    layout
                    key={
                      service.slug
                    }
                    initial={
                      reduced
                        ? false
                        : {
                            opacity: 0,
                            x:
                              index % 2 === 0
                                ? -28
                                : 28,
                            y: 24,
                            scale: 0.985,
                            rotate:
                              index % 2 === 0
                                ? -0.8
                                : 0.8,
                          }
                    }
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      y: 0,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 12,
                      scale: 0.985,
                      y: 12,
                    }}
                    transition={{
                      delay: reduced
                        ? 0
                        : index * 0.06,
                      duration: 0.85,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      h-full
                    "
                  >
                    <motion.a
                      href="#contact"
                      whileHover={
                        reduced
                          ? undefined
                          : {
                              y: -8,
                              scale: 1.008,
                              transition: {
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            }
                      }
                      whileTap={
                        reduced
                          ? undefined
                          : {
                              scale: 0.995,
                            }
                      }
                      transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        group

                        flex
                        h-full
                        flex-col

                        overflow-hidden

                        rounded-[22px]

                        border
                        border-white/10

                        bg-white/[0.035]

                        shadow-[0_12px_35px_rgba(0,0,0,0.10)]

                        transform-gpu

                        transition-[border-color,background-color,box-shadow]
                        duration-700

                        hover:border-[#4B94E8]/30

                        hover:bg-white/[0.055]

                        hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]
                    "
                  >
                      <CardLightSweep />

                      {/* =============================
                          IMAGE
                      ============================== */}

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
                              service
                                .imageKey
                            ]
                          }
                          alt={
                            service.title
                          }
                          width={800}
                          height={600}
                          loading="lazy"
                          whileHover={
                            reduced
                              ? undefined
                              : {
                                  scale:
                                    1.065,
                                }
                          }
                          transition={{
                            duration: 1.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="
                            h-full
                            w-full

                            object-cover

                            opacity-85

                            transition-opacity
                            duration-700

                            group-hover:opacity-100
                          "
                        />

                        {/* IMAGE OVERLAY */}

                        <div
                          className="
                            absolute
                            inset-0

                            bg-gradient-to-t

                            from-[#10101a]/95
                            via-[#10101a]/15
                            to-transparent
                          "
                        />

                        {/* CATEGORY LABEL */}

                        {category && (
                          <span
                            className="
                              absolute

                              left-4
                              top-4

                              rounded-full

                              border
                              border-white/15

                              bg-[#16143e]/75

                              px-3
                              py-1.5

                              text-[10px]

                              font-bold
                              uppercase

                              tracking-[0.12em]

                              text-white/80

                              backdrop-blur-md

                              sm:left-5
                              sm:top-5
                            "
                          >
                            {
                              categoryNames[
                                category
                              ]
                            }
                          </span>
                        )}

                        {/* IMAGE ACCENT */}

                        <div
                          className="
                            absolute

                            inset-x-0
                            bottom-0

                            h-[2px]

                            bg-gradient-to-r

                            from-transparent
                            via-active/60
                            to-transparent

                            opacity-60
                          "
                        />
                      </div>

                      {/* =============================
                          CARD CONTENT
                      ============================== */}

                      <div
                        className="
                          flex

                          flex-1
                          flex-col

                          p-5

                          sm:p-6
                        "
                      >
                        {/* TITLE ROW */}

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

                              text-[20px]

                              font-bold

                              leading-[1.25]

                              tracking-[-0.02em]

                              text-white

                              transition-colors
                              duration-700

                              group-hover:text-[#74B8FF]
                              group-hover:translate-x-1

                              sm:text-[21px]

                              xl:text-[22px]
                            "
                          >
                            {
                              service.title
                            }
                          </h3>

                          <span
                            className="
                              flex

                              h-9
                              w-9

                              shrink-0

                              items-center
                              justify-center

                              rounded-full

                              border
                              border-white/10

                              bg-white/[0.03]

                              transition-all
                              duration-600

                              group-hover:border-active/30

                              group-hover:bg-active/10
                            "
                          >
                            <ArrowUpRight
                              className="
                                h-[18px]
                                w-[18px]

                                text-white/40

                                transition-all
                                duration-600

                                group-hover:-translate-y-0.5

                                group-hover:translate-x-0.5

                                group-hover:text-active
                              "
                            />
                          </span>
                        </div>

                        {/* SUMMARY */}

                        <p
                          className="
                            mt-4

                            text-[14px]

                            leading-7

                            text-white/55

                            sm:text-[15px]
                          "
                        >
                          {
                            service.summary
                          }
                        </p>

                        {/* VIEW SERVICE */}

                        <div
                          className="
                            mt-auto

                            pt-6
                          "
                        >
                          <div
                            className="
                              flex
                              items-center

                              gap-2

                              border-t
                              border-white/10

                              pt-4

                              text-[11px]

                              font-bold
                              uppercase

                              tracking-[0.12em]

                              text-white/40

                              transition-colors

                              group-hover:text-active

                              sm:text-[12px]
                            "
                          >
                            View Service

                            <ArrowUpRight
                              className="
                                h-3.5
                                w-3.5
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  </motion.li>
                );
              },
            )}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

/* =========================================================
   INDUSTRIES / ACCOMMODATION OPERATIONS
========================================================= */

export function Industries() {
  const reduced = useReducedMotion();

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
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}

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

          opacity-[0.08]
        "
      />

      {/* =========================================
          OVERLAY
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-[#0b0b10]/82
          via-[#0b0b10]/92
          to-[#0b0b10]
        "
      />

      {/* =========================================
          DECORATIVE GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none

          absolute

          -right-[220px]
          top-[120px]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#3F80CF]/[0.07]

          blur-[130px]
        "
      />

      {/* =========================================
          CONTAINER
      ========================================== */}

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
        {/* =========================================
            INDUSTRIES INTRO
        ========================================== */}

        <div
          className="
            grid

            gap-8

            border-b
            border-white/10

            pb-8

            sm:pb-10

            lg:grid-cols-[1.08fr_0.92fr]
            lg:items-center
            lg:gap-14

            xl:gap-20
          "
        >
          {/* LEFT */}

          <div>
            <Reveal>
              <SectionLabel>
                Accommodation Operations
              </SectionLabel>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                className="
                  mt-5

                  max-w-[900px]

                  text-[2.1rem]

                  font-bold

                  leading-[1.02]

                  tracking-[-0.04em]

                  text-white

                  sm:text-[2.65rem]

                  md:text-[3rem]

                  lg:text-[3.4rem]

                  xl:text-[3.7rem]
                "
              >
                Dedicated to

                <span
                  className="
                    block

                    text-[#69AEF7]
                  "
                >
                  Khalifa University
                </span>

                <span className="block">
                  Student Accommodation
                </span>
              </h2>
            </Reveal>
          </div>

          {/* RIGHT */}

          <Reveal delay={0.12}>
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
                  max-w-xl

                  text-[16px]

                  font-medium

                  leading-8

                  text-white/72

                  sm:text-[17px]

                  lg:text-[18px]
                "
              >
                Supporting students
                with safe, reliable and
                well-managed spaces
                every day.
              </p>

              <p
                className="
                  mt-4

                  max-w-xl

                  text-[14px]

                  leading-7

                  text-white/50

                  sm:text-[15px]
                "
              >
                Every operational area
                is designed around
                comfort, functionality,
                service continuity and
                student wellbeing.
              </p>
            </div>
          </Reveal>
        </div>

        {/* =========================================
            OPERATION CARDS
        ========================================== */}

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
          "
        >
          {industries.map(
            (
              industry,
              index,
            ) => (
              <motion.div
                key={
                  industry.title
                }
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        x:
                          index % 2 === 0
                            ? -24
                            : 24,
                        y: 28,
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
                    delay: reduced
                      ? 0
                      : index * 0.11,
                    duration: 1.05,
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
                        y: -8,
                        scale: 1.015,
                        transition: {
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
                    min-h-[280px]

                    flex-col

                    overflow-hidden

                    rounded-[22px]

                    border
                    border-white/10

                    bg-white/[0.035]

                    p-6

                    backdrop-blur-sm

                    shadow-[0_12px_32px_rgba(0,0,0,0.10)]

                    transform-gpu

                    transition-[border-color,background-color,box-shadow]
                    duration-700

                    hover:border-active/30

                    hover:bg-white/[0.055]

                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]

                    sm:p-7

                    xl:p-8
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
                        text-[12px]

                        font-bold

                        tracking-[0.2em]

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

                    <span
                      className="
                        flex

                        h-9
                        w-9

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-white/10

                        bg-white/[0.025]

                        transition-all
                        duration-700

                        group-hover:border-active/30

                        group-hover:bg-active/10
                      "
                    >
                      <span
                        className="
                          h-[7px]
                          w-[7px]

                          rounded-full

                          bg-active/60

                          transition-all
                          duration-700

                          group-hover:scale-150

                          group-hover:bg-active

                          group-hover:shadow-[0_0_12px_rgba(63,128,207,0.7)]
                        "
                      />
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-7

                      text-[21px]

                      font-bold

                      leading-[1.2]

                      tracking-[-0.025em]

                      text-white

                      transition-colors
                      duration-700

                      group-hover:text-[#72B7FF]
                      group-hover:translate-x-1

                      sm:text-[22px]

                      xl:text-[23px]
                    "
                  >
                    {
                      industry.title
                    }
                  </h3>

                  {/* BODY */}

                  <p
                    className="
                      mt-4

                      text-[14px]

                      leading-7

                      text-white/55

                      sm:text-[15px]
                    "
                  >
                    {
                      industry.body
                    }
                  </p>

                  {/* BOTTOM LINE */}

                  <div
                    className="
                      mt-auto
                      pt-7
                    "
                  >
                    <span
                      className="
                        block

                        h-px
                        w-full

                        bg-gradient-to-r

                        from-active/40

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