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

import energyUtilitiesManagementAsset from "@/assets/services/01_energy_utilities_management.png";
import cleaningServicesAsset from "@/assets/services/02_cleaning_services.png";
import wasteManagementAsset from "@/assets/services/03_waste_management.png";
import pestControlAsset from "@/assets/services/04_pest_control.png";
import laundryEquipmentServiceAsset from "@/assets/services/05_laundry_equipment_service.png";
import securityEquipmentMaintenanceAsset from "@/assets/services/06_security_equipment_maintenance.png";
import vendingEquipmentServicesAsset from "@/assets/services/07_vending_equipment_services.png";
import additionalServicesAsset from "@/assets/services/08_additional_services.png";
import buildingInstallationsAsset from "@/assets/services/Building Installations & Asset Maintenance.png";
import groundsMaintenanceAsset from "@/assets/services/Grounds Maintenance & Indoor Plant Services.png";

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

  "preventive-maintenance":
    preventiveMaintenanceAsset,

  "asset-management":
    assetManagementAsset,

  "operations-management":
    operationsManagementAsset,

  "emergency-maintenance":
    emergencyMaintenanceAsset,

  "energy-utilities-management":
    energyUtilitiesManagementAsset,

  "cleaning-services":
    cleaningServicesAsset,

  "waste-management-services":
    wasteManagementAsset,

  "pest-control-services":
    pestControlAsset,

  "laundry-equipment-service":
    laundryEquipmentServiceAsset,

  "security-equipment-maintenance":
    securityEquipmentMaintenanceAsset,

  "vending-equipment-services":
    vendingEquipmentServicesAsset,

  "additional-services":
    additionalServicesAsset,

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

        bg-[#201A57]

        py-12

        sm:py-14

        md:py-16

        lg:py-20

        xl:py-24
      "
    >
      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

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
        {/* =========================================
            INTRO
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
          {/* LEFT */}

          <div>
            <Reveal>
              <SectionLabel>
                Our Services
              </SectionLabel>
            </Reveal>

            <Reveal delay={0.06}>
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
                Complete Integrated

                <span
                  className="
                    block

                    text-[#3F80CF]
                  "
                >
                  Facilities Management
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className="
                  mt-4

                  max-w-[700px]

                  font-sans

                  text-[14px]
                  font-normal

                  leading-7

                  text-white/70

                  sm:text-[15px]

                  md:text-[16px]

                  lg:text-[17px]
                "
              >
                for Khalifa University
                Student Accommodation
              </p>
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

                      font-sans

                      text-[13px]
                      font-medium

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

                        text-[#3F80CF]
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
          <Reveal>
            <p
              className="
                font-sans

                text-[11px]
                font-medium

                uppercase

                tracking-[0.18em]

                text-white/45
              "
            >
              Explore by category
            </p>
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
                    key={category.id}
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

                      font-sans

                      text-[12px]
                      font-medium

                      transition-colors
                      duration-300

                      sm:px-5
                      sm:text-[13px]

                      ${
                        isActive
                          ? `
                              border-[#3F80CF]
                              bg-[#3F80CF]
                              text-white
                            `
                          : `
                              border-white/15
                              bg-transparent
                              text-white/60

                              hover:border-[#3F80CF]/45
                              hover:text-white
                            `
                      }
                    `}
                  >
                    {category.label}
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

                bg-[#3F80CF]
              "
            />

            <p
              className="
                font-sans

                text-[11px]
                font-medium

                uppercase

                tracking-[0.14em]

                text-white/45
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

                const image =
                  serviceImages[
                    service.imageKey as keyof typeof serviceImages
                  ];

                return (
                  <motion.li
                    layout
                    key={service.slug}
                    initial={
                      reduced
                        ? false
                        : {
                            opacity: 0,
                            y: 20,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    transition={{
                      delay: reduced
                        ? 0
                        : index *
                          0.04,

                      duration:
                        0.55,

                      ease:
                        easePremium,
                    }}
                    className="
                      h-full
                      min-w-0
                    "
                  >
                    <motion.a
                      href="#contact"
                      whileHover={
                        reduced
                          ? undefined
                          : {
                              y: -3,
                            }
                      }
                      transition={{
                        duration:
                          0.3,

                        ease:
                          easePremium,
                      }}
                      className="
                        group

                        flex
                        h-full

                        flex-col

                        overflow-hidden

                        rounded-[18px]

                        border
                        border-white/10

                        bg-white/[0.035]

                        transition-colors
                        duration-300

                        hover:border-[#3F80CF]/40
                        hover:bg-white/[0.05]

                        sm:rounded-[20px]
                      "
                    >
                      {/* IMAGE */}

                      <div
                        className="
                          relative

                          aspect-[16/10]

                          overflow-hidden

                          bg-[#201A57]
                        "
                      >
                        {image && (
                          <motion.img
                            src={image}
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
                                      1.025,
                                  }
                            }
                            transition={{
                              duration:
                                0.6,

                              ease:
                                easePremium,
                            }}
                            className="
                              h-full
                              w-full

                              object-cover
                            "
                          />
                        )}

                        {/* FLAT BRAND OVERLAY */}

                        <div
                          className="
                            pointer-events-none

                            absolute
                            inset-0

                            bg-[#201A57]/20
                          "
                        />

                        {/* CATEGORY */}

                        {category && (
                          <span
                            className="
                              absolute

                              left-4
                              top-4

                              rounded-full

                              border
                              border-white/20

                              bg-[#201A57]/90

                              px-3
                              py-1.5

                              font-sans

                              text-[10px]
                              font-medium

                              uppercase

                              tracking-[0.12em]

                              text-white
                            "
                          >
                            {
                              categoryNames[
                                category
                              ]
                            }
                          </span>
                        )}

                        {/* ACTIVE BLUE ACCENT */}

                        <span
                          className="
                            absolute

                            inset-x-0
                            bottom-0

                            h-[3px]

                            bg-[#3F80CF]
                          "
                        />
                      </div>

                      {/* CARD CONTENT */}

                      <div
                        className="
                          flex
                          flex-1

                          flex-col

                          p-5

                          sm:p-6
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

                              font-display

                              text-[19px]
                              font-medium

                              leading-[1.25]

                              tracking-[-0.02em]

                              text-white

                              transition-colors
                              duration-300

                              group-hover:text-[#3F80CF]

                              sm:text-[20px]

                              xl:text-[21px]
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
                              border-white/15
                            "
                          >
                            <ArrowUpRight
                              className="
                                h-[17px]
                                w-[17px]

                                text-[#3F80CF]
                              "
                            />
                          </span>
                        </div>

                        <p
                          className="
                            mt-4

                            font-sans

                            text-[14px]
                            font-normal

                            leading-7

                            text-white/60
                          "
                        >
                          {
                            service.summary
                          }
                        </p>

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

                              font-sans

                              text-[11px]
                              font-medium

                              uppercase

                              tracking-[0.12em]

                              text-white/45

                              transition-colors
                              duration-300

                              group-hover:text-[#3F80CF]

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
  const reduced =
    useReducedMotion();

  return (
    <section
      id="industries"
      className="
        relative

        overflow-hidden

        border-t
        border-white/10

        bg-[#201A57]
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

          opacity-[0.06]
        "
      />

      {/* BRAND OVERLAY */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0

          bg-[#201A57]/95
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

                  font-display

                  text-[2rem]
                  font-medium

                  leading-[1.05]

                  tracking-[-0.035em]

                  text-white

                  min-[380px]:text-[2.15rem]

                  sm:text-[2.65rem]

                  md:text-[3rem]

                  lg:text-[3.4rem]

                  xl:text-[3.65rem]
                "
              >
                Dedicated to

                <span
                  className="
                    block

                    text-[#3F80CF]
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

                  font-display

                  text-[16px]
                  font-normal

                  leading-8

                  text-white/75

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

                  font-sans

                  text-[14px]
                  font-normal

                  leading-7

                  text-white/60

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
            (industry, index) => (
              <motion.div
                key={industry.title}
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
                    : index *
                      0.07,

                  duration:
                    0.6,

                  ease:
                    easePremium,
                }}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                className="
                  h-full
                "
              >
                <div
                  className="
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

                    transition-colors
                    duration-300

                    hover:border-[#3F80CF]/40
                    hover:bg-white/[0.05]

                    sm:p-6
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

                  <h3
                    className="
                      mt-1

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
                      industry.title
                    }
                  </h3>

                  <p
                    className="
                      mt-3

                      flex-1

                      font-sans

                      text-[13px]
                      font-normal

                      leading-6

                      text-white/60

                      sm:text-[14px]
                      sm:leading-7
                    "
                  >
                    {industry.body.replace(
                      /room allocations,?\s*/i,
                      "",
                    )}
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
    </section>
  );
}