import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Search,
  X,
  Menu,
  ArrowUpRight,
} from "lucide-react";

import { Brandmark } from "@/components/brand/Brandmark";
import { navigation, services } from "@/lib/site";

export function Nav() {
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.body.style.overflow = mobile ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const closeMobileMenu = () => {
    setMobile(false);
  };

  return (
    <>
      <header
        className="
          fixed
          inset-x-0
          top-0
          z-50

          border-b
          border-white/10

          bg-[#18164b]

          shadow-[0_10px_36px_rgba(0,0,0,0.18)]

          transition-none
        "
        onMouseLeave={() => setMega(false)}
      >
        {/* NAVBAR */}
        <div
          className="
            mx-auto
            flex
            h-[102px]
            w-full
            max-w-[1440px]
            items-center

            px-6

            md:px-8

            lg:px-10

            xl:px-14
          "
        >
          {/* LOGO */}
          <a
            href="#top"
            aria-label="KUnnected FM home"
            className="
              flex
              shrink-0
              items-center
            "
          >
            <Brandmark
              tone="invert"
              className="
                h-[64px]
                w-auto

                sm:h-[66px]

                lg:h-[68px]

                xl:h-[70px]
              "
            />
          </a>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Primary"
            className="
              ml-[82px]
              hidden
              items-center
              gap-10

              lg:flex

              xl:ml-[105px]
              xl:gap-12
            "
          >
            {navigation.map((item) => {
              const hasMega =
                "mega" in item &&
                Boolean(item.mega);

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => {
                    setMega(hasMega);
                  }}
                  onFocus={() => {
                    setMega(hasMega);
                  }}
                  className="
                    relative
                    flex
                    h-[102px]
                    items-center

                    whitespace-nowrap

                    text-[20px]
                    font-extrabold
                    tracking-[-0.015em]

                    text-white/95

                    transition-colors
                    duration-300

                    hover:text-white

                    xl:text-[21px]
                  "
                >
                  {item.label}

                  {hasMega && mega && (
                    <motion.span
                      layoutId="nav-underline"
                      className="
                        absolute
                        inset-x-0
                        bottom-[17px]

                        h-[3px]

                        rounded-full
                        bg-[#5baaff]
                      "
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div
            className="
              ml-auto
              flex
              items-center
              gap-3
            "
          >
            {/* SEARCH */}
            <button
              type="button"
              aria-label="Search the site"
              className="
                hidden
                h-12
                w-12
                items-center
                justify-center

                rounded-full

                text-white

                transition-colors

                hover:bg-white/10

                sm:inline-flex
              "
            >
              <Search className="h-[23px] w-[23px]" />
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobile(true)}
              className="
                inline-flex
                h-12
                w-12
                items-center
                justify-center

                rounded-full

                text-white

                transition-colors

                hover:bg-white/10

                lg:hidden
              "
            >
              <Menu className="h-[26px] w-[26px]" />
            </button>
          </div>
        </div>

        {/* MEGA MENU */}
        <AnimatePresence>
          {mega && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.28,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                hidden

                border-t
                border-white/10

                bg-[#121032]

                shadow-2xl

                lg:block
              "
            >
              <div
                className="
                  mx-auto
                  grid
                  max-w-[1440px]
                  grid-cols-[1.55fr_0.75fr]
                  gap-12

                  px-10
                  py-10

                  xl:px-14
                "
              >
                {/* SERVICES */}
                <div>
                  <p
                    className="
                      text-[13px]
                      font-extrabold
                      uppercase
                      tracking-[0.2em]
                      text-white/50
                    "
                  >
                    Service lines
                  </p>

                  <ul
                    className="
                      mt-6
                      grid
                      grid-cols-3
                      gap-x-11
                    "
                  >
                    {services.map((service) => (
                      <li key={service.slug}>
                        <a
                          href="#services"
                          className="
                            group
                            flex
                            items-center
                            justify-between

                            gap-3

                            border-b
                            border-white/10

                            py-4

                            text-[16px]
                            font-semibold
                            text-white/82

                            transition-colors

                            hover:text-white
                          "
                        >
                          {service.title}

                          <ArrowUpRight
                            className="
                              h-4
                              w-4

                              opacity-0

                              transition-all

                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:opacity-100
                            "
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT CARD */}
                <div
                  className="
                    rounded-[28px]

                    border
                    border-white/10

                    bg-white/[0.05]

                    p-7

                    text-white

                    shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                  "
                >
                  <p
                    className="
                      text-[12px]
                      font-extrabold
                      uppercase
                      tracking-[0.2em]
                      text-white/55
                    "
                  >
                    Always on
                  </p>

                  <p
                    className="
                      mt-4

                      font-display

                      text-[28px]
                      font-extrabold
                      leading-snug
                      tracking-[-0.02em]
                    "
                  >
                    A 24/7 operations desk sits behind every service line.
                  </p>

                  <p
                    className="
                      mt-4

                      text-[16px]
                      leading-relaxed
                      text-white/68
                    "
                  >
                    One helpdesk, one escalation path and one accountable team
                    across the entire student accommodation estate.
                  </p>

                  <a
                    href="#process"
                    className="
                      mt-7

                      inline-flex
                      items-center
                      gap-2

                      text-[16px]
                      font-bold
                      text-white

                      hover:text-[#65b0ff]
                    "
                  >
                    How we operate

                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MOBILE BACKDROP */}
      <AnimatePresence>
        {mobile && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={closeMobileMenu}
              className="
                fixed
                inset-0
                z-[60]

                bg-black/60

                backdrop-blur-[2px]

                lg:hidden
              "
            />

            {/* MOBILE SIDEBAR */}
            <motion.aside
              initial={{
                x: "-100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "-100%",
              }}
              transition={{
                duration: 0.38,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                fixed
                inset-y-0
                left-0
                z-[70]

                flex
                w-[88%]
                max-w-[410px]
                flex-col

                bg-[#18164b]

                text-white

                shadow-[20px_0_60px_rgba(0,0,0,0.4)]

                lg:hidden
              "
            >
              {/* MOBILE HEADER */}
              <div
                className="
                  flex
                  h-[96px]
                  items-center
                  justify-between

                  border-b
                  border-white/10

                  px-5
                "
              >
                <Brandmark
                  tone="invert"
                  className="
                    h-[60px]
                    max-w-[270px]
                  "
                />

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMobileMenu}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full

                    transition-colors

                    hover:bg-white/10
                  "
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* MOBILE LINKS */}
              <nav
                aria-label="Mobile"
                className="
                  flex
                  flex-col
                  overflow-y-auto

                  px-6
                  py-6
                "
              >
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="
                      flex
                      min-h-[72px]
                      items-center
                      justify-between

                      border-b
                      border-white/10

                      font-display

                      text-[25px]
                      font-extrabold
                      tracking-[-0.02em]

                      text-white/92

                      transition-colors

                      hover:text-[#65b0ff]
                    "
                  >
                    {item.label}

                    <ArrowUpRight
                      className="
                        h-5
                        w-5
                        text-white/40
                      "
                    />
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}