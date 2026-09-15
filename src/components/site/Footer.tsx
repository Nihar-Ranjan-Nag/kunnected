import {
  ArrowUpRight,
  Linkedin,
} from "lucide-react";

import { Brandmark } from "@/components/brand/Brandmark";

import {
  company,
  navigation,
  services,
} from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative

        overflow-hidden

        border-t
        border-white/10

        bg-background
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          -right-[180px]
          top-[40px]

          h-[380px]
          w-[380px]

          rounded-full

          bg-[#3F80CF]/[0.05]

          blur-[110px]
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
          py-10

          sm:px-5
          sm:py-12

          md:px-7

          lg:px-8
          lg:py-14

          xl:px-10
          xl:py-16

          2xl:px-0
        "
      >
        {/* =================================================
            TOP BRAND AREA
        ================================================== */}

        <div
          className="
            grid

            gap-5

            border-b
            border-white/10

            pb-8

            sm:gap-6
            sm:pb-9

            md:grid-cols-[auto_1fr]
            md:items-center
            md:gap-10

            lg:gap-14
          "
        >
          {/* LOGO */}

          <div className="shrink-0">
            <Brandmark
              tone="invert"
              className="
                h-[48px]

                sm:h-[52px]

                lg:h-[56px]
              "
            />
          </div>

          {/* COMPANY INTRO */}

          <div
            className="
              min-w-0

              md:border-l
              md:border-white/10

              md:pl-8

              lg:pl-10
            "
          >
            <p
              className="
                max-w-xl

                text-[14px]

                font-semibold

                leading-6

                text-white/85

                sm:text-[15px]
              "
            >
              {company.legalName}
            </p>

            <p
              className="
                mt-2

                max-w-2xl

                text-[13px]

                leading-6

                text-white/50

                sm:text-[14px]
                sm:leading-7
              "
            >
              {company.tagline}
            </p>
          </div>
        </div>

        {/* =================================================
            FOOTER LINKS
        ================================================== */}

        <div
          className="
            grid

            gap-x-8
            gap-y-9

            py-9

            sm:grid-cols-2
            sm:py-10

            lg:grid-cols-[0.8fr_1.15fr_1.25fr_1fr]
            lg:gap-x-10

            xl:gap-x-14
          "
        >
          {/* =================================================
              COMPANY LINKS
          ================================================== */}

          <div>
            <FooterHeading>
              Company
            </FooterHeading>

            <ul
              className="
                mt-4

                space-y-2.5
              "
            >
              {navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      inline-flex

                      text-[14px]

                      leading-6

                      text-white/55

                      transition-all
                      duration-200

                      hover:translate-x-1

                      hover:text-[#69AEF7]

                      sm:text-[15px]
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div>
            <FooterHeading>
              Services
            </FooterHeading>

            <ul
              className="
                mt-4

                space-y-2.5
              "
            >
              {services
                .slice(0, 6)
                .map((service) => (
                  <li
                    key={
                      service.slug
                    }
                  >
                    <a
                      href="#services"
                      className="
                        inline-flex

                        text-[14px]

                        leading-6

                        text-white/55

                        transition-all
                        duration-200

                        hover:translate-x-1

                        hover:text-[#69AEF7]

                        sm:text-[15px]
                      "
                    >
                      {
                        service.title
                      }
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <FooterHeading>
              Get in Touch
            </FooterHeading>

            <address
              className="
                mt-4

                not-italic
              "
            >
              <p
                className="
                  max-w-[320px]

                  text-[14px]

                  leading-7

                  text-white/55

                  sm:text-[15px]
                "
              >
                {
                  company.address
                    .line1
                }

                <br />

                {
                  company.address
                    .line2
                }
              </p>

              <a
                href={`https://${company.web}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  mt-4

                  inline-flex
                  max-w-full

                  items-center

                  gap-2

                  text-[14px]

                  font-medium

                  text-white/70

                  transition-colors

                  hover:text-[#69AEF7]

                  sm:text-[15px]
                "
              >
                <span
                  className="
                    break-all
                  "
                >
                  {company.web}
                </span>

                <ArrowUpRight
                  className="
                    h-4
                    w-4

                    shrink-0

                    transition-transform
                    duration-200

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </address>
          </div>

          {/* =================================================
              CONNECT
          ================================================== */}

          <div>
            <FooterHeading>
              Connect
            </FooterHeading>

            <p
              className="
                mt-4

                max-w-[300px]

                text-[13px]

                leading-6

                text-white/50

                sm:text-[14px]
                sm:leading-7
              "
            >
              Follow Kunnected FM for
              student accommodation
              operations updates and
              industry insights.
            </p>

            {/* SOCIAL + CONTACT */}

            <div
              className="
                mt-5

                flex
                flex-wrap

                items-center

                gap-3
              "
            >
              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kunnected FM on LinkedIn"
                className="
                  inline-flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.03]

                  text-white/70

                  transition-all
                  duration-300

                  hover:-translate-y-0.5

                  hover:border-active/40

                  hover:bg-active/10

                  hover:text-active
                "
              >
                <Linkedin
                  className="
                    h-4
                    w-4
                  "
                />
              </a>

              {/* CONTACT */}

              <a
                href="#contact"
                className="
                  group

                  inline-flex

                  min-h-[40px]

                  items-center

                  gap-2

                  rounded-full

                  border
                  border-white/10

                  px-4

                  text-[13px]

                  font-semibold

                  text-white

                  transition-all
                  duration-300

                  hover:border-active/40

                  hover:bg-active/10

                  hover:text-[#69AEF7]

                  sm:text-[14px]
                "
              >
                Contact Us

                <ArrowUpRight
                  className="
                    h-4
                    w-4

                    transition-transform
                    duration-200

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================== */}

        <div
          className="
            flex
            flex-col

            gap-4

            border-t
            border-white/10

            pt-6

            text-[12px]

            leading-5

            text-white/40

            sm:text-[13px]

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* COPYRIGHT */}

          <p>
            © {currentYear}{" "}
            {company.legalName}. All
            rights reserved.
          </p>

          {/* LEGAL LINKS */}

          <div
            className="
              flex

              flex-wrap

              items-center

              gap-x-5
              gap-y-2
            "
          >
            <a
              href="#top"
              className="
                transition-colors

                hover:text-[#69AEF7]
              "
            >
              Privacy Policy
            </a>

            <a
              href="#top"
              className="
                transition-colors

                hover:text-[#69AEF7]
              "
            >
              Terms &amp;
              Conditions
            </a>

            <span
              className="
                hidden

                h-1
                w-1

                rounded-full

                bg-white/20

                sm:block
              "
            />

            <span>
              {company.web}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex

        items-center

        gap-2.5
      "
    >
      <span
        className="
          h-[6px]
          w-[6px]

          shrink-0

          rounded-full

          bg-[#63AEFF]

          shadow-[0_0_8px_rgba(99,174,255,0.65)]
        "
      />

      <p
        className="
          text-[12px]

          font-bold
          uppercase

          tracking-[0.14em]

          text-white/85

          sm:text-[13px]
        "
      >
        {children}
      </p>
    </div>
  );
}