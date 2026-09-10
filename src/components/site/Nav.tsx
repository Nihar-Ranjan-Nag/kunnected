import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, X, Menu, ArrowUpRight } from "lucide-react";

import { Brandmark } from "@/components/brand/Brandmark";
import { navigation, services } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const solid = scrolled || mega;

  return (
    <>
      <header
        className={cn(
          `
            fixed
            inset-x-0
            z-50
            transition-all
            duration-500
          `,
          solid
            ? `
                top-0
                bg-[#18164b]/95
                border-b
                border-white/10
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(0,0,0,0.15)]
              `
            : `
                top-[28px]
                bg-transparent
              `,
        )}
        onMouseLeave={() => setMega(false)}
      >
        {/* NAVBAR */}
        <div
          className="
            mx-auto
            flex
            h-[72px]
            w-full
            max-w-[1360px]
            items-center
            px-6

            md:px-8
            lg:px-10
            xl:px-12
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
                h-[46px]
                w-auto

                sm:h-[48px]
                lg:h-[50px]
              "
            />
          </a>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Primary"
            className="
              ml-[70px]
              hidden
              items-center
              gap-8

              lg:flex

              xl:ml-[90px]
              xl:gap-10
            "
          >
            {navigation.map((item) => {
              const hasMega = "mega" in item && item.mega;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setMega(Boolean(hasMega))}
                  onFocus={() => setMega(Boolean(hasMega))}
                  className="
                    relative
                    flex
                    h-[72px]
                    items-center
                    whitespace-nowrap

                    text-[17px]
                    font-medium
                    tracking-[-0.01em]

                    text-white/90

                    transition-colors
                    duration-300

                    hover:text-white

                    xl:text-[18px]
                  "
                >
                  {item.label}

                  {hasMega && mega && (
                    <motion.span
                      layoutId="nav-underline"
                      className="
                        absolute
                        inset-x-0
                        bottom-[10px]
                        h-[2px]
                        bg-[#5baaff]
                      "
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* SEARCH */}
          <div
            className="
              ml-auto
              flex
              items-center
              gap-2
            "
          >
            <button
              type="button"
              aria-label="Search the site"
              className="
                hidden
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-white

                transition-colors

                hover:bg-white/10

                sm:inline-flex
              "
            >
              <Search className="h-[19px] w-[19px]" />
            </button>

            {/* MOBILE MENU */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobile(true)}
              className="
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-white

                transition-colors
                hover:bg-white/10

                lg:hidden
              "
            >
              <Menu className="h-[22px] w-[22px]" />
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
                bg-[#121032]/98
                shadow-2xl
                backdrop-blur-xl

                lg:block
              "
            >
              <div
                className="
                  mx-auto
                  grid
                  max-w-[1360px]
                  grid-cols-[1.55fr_0.75fr]
                  gap-12
                  px-10
                  py-9

                  xl:px-12
                "
              >
                <div>
                  <p
                    className="
                      text-[12px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/45
                    "
                  >
                    Service lines
                  </p>

                  <ul
                    className="
                      mt-5
                      grid
                      grid-cols-3
                      gap-x-10
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
                            py-3.5

                            text-[15px]
                            text-white/80

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
                              group-hover:opacity-100
                            "
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-6
                    text-white
                  "
                >
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/50
                    "
                  >
                    Always on
                  </p>

                  <p
                    className="
                      mt-4
                      font-display
                      text-2xl
                      font-semibold
                      leading-snug
                    "
                  >
                    A 24/7 operations desk sits behind every service line.
                  </p>

                  <p
                    className="
                      mt-4
                      text-[15px]
                      leading-relaxed
                      text-white/65
                    "
                  >
                    One helpdesk, one escalation path and one accountable
                    team across the entire student accommodation estate.
                  </p>

                  <a
                    href="#process"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-[15px]
                      font-medium
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

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {mobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobile(false)}
              className="
                fixed
                inset-0
                z-[60]
                bg-black/60
                backdrop-blur-[2px]
                lg:hidden
              "
            />

            {/* MOBILE DRAWER */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
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
                w-[86%]
                max-w-[370px]
                flex-col

                bg-[#15123f]
                text-white

                shadow-[20px_0_60px_rgba(0,0,0,0.4)]

                lg:hidden
              "
            >
              <div
                className="
                  flex
                  h-[76px]
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-5
                "
              >
                <Brandmark
                  tone="invert"
                  className="h-[44px]"
                />

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobile(false)}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    hover:bg-white/10
                  "
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav
                aria-label="Mobile"
                className="
                  flex
                  flex-col
                  overflow-y-auto
                  px-5
                  py-5
                "
              >
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobile(false)}
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
                      min-h-[64px]
                      items-center
                      justify-between

                      border-b
                      border-white/10

                      font-display
                      text-[22px]
                      font-medium

                      text-white/90

                      transition-colors

                      hover:text-[#65b0ff]
                    "
                  >
                    {item.label}

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
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