import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  Search,
  X,
  Menu,
  ArrowUpRight,
} from "lucide-react";

import { Brandmark } from "@/components/brand/Brandmark";
import {
  navigation,
  services,
} from "@/lib/site";

export function Nav() {
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef =
    useRef<HTMLInputElement>(null);

  /* =========================================
     MOBILE BODY LOCK
  ========================================== */

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.body.style.overflow =
      mobile ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  /* =========================================
     AUTO FOCUS SEARCH
  ========================================== */

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    const timer = window.setTimeout(() => {
      searchInputRef.current?.focus();
    }, 180);

    return () => {
      window.clearTimeout(timer);
    };
  }, [searchOpen]);

  const closeMobileMenu = () => {
    setMobile(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  /* =========================================
     SIMPLE NAV SEARCH
  ========================================== */

  const handleSearch = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const query = searchQuery
      .trim()
      .toLowerCase();

    if (!query) {
      return;
    }

    const navMatch = navigation.find((item) =>
      item.label
        .toLowerCase()
        .includes(query),
    );

    if (navMatch) {
      const element =
        document.querySelector(
          navMatch.href,
        );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        closeSearch();

        return;
      }
    }

    const serviceMatch = services.find(
      (service) =>
        service.title
          .toLowerCase()
          .includes(query),
    );

    if (serviceMatch) {
      const servicesSection =
        document.querySelector(
          "#services",
        );

      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        closeSearch();
      }
    }
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
        "
        onMouseLeave={() => setMega(false)}
      >
        {/* =========================================
            NAVBAR
        ========================================== */}

        <div
          className="
            mx-auto
            flex
            h-[102px]
            w-full
            max-w-[1440px]
            items-center

            px-5
            sm:px-6
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
                h-[58px]
                w-auto

                sm:h-[64px]

                lg:h-[68px]

                xl:h-[70px]
              "
            />
          </a>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================== */}

          <nav
            aria-label="Primary"
            className="
              ml-[70px]
              hidden
              items-center
              gap-9

              lg:flex

              xl:ml-[100px]
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

                    text-[19px]
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

          {/* =========================================
              RIGHT SIDE
          ========================================== */}

          <div
            className="
              ml-auto
              flex
              items-center
              gap-2
            "
          >
            {/* =========================================
                DESKTOP SEARCH
            ========================================== */}

            <div
              className="
                hidden
                items-center

                sm:flex
              "
            >
              <AnimatePresence
                initial={false}
              >
                {searchOpen && (
                  <motion.form
                    key="search-form"
                    initial={{
                      width: 0,
                      opacity: 0,
                      marginRight: 0,
                    }}
                    animate={{
                      width: 250,
                      opacity: 1,
                      marginRight: 8,
                    }}
                    exit={{
                      width: 0,
                      opacity: 0,
                      marginRight: 0,
                    }}
                    transition={{
                      duration: 0.28,
                      ease: [
                        0.16,
                        1,
                        0.3,
                        1,
                      ],
                    }}
                    onSubmit={handleSearch}
                    className="
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        items-center

                        rounded-full

                        border
                        border-white/15

                        bg-white/[0.08]

                        px-4

                        backdrop-blur-md

                        transition-colors

                        focus-within:border-[#5baaff]/70
                        focus-within:bg-white/[0.10]
                      "
                    >
                      <Search
                        className="
                          mr-2.5
                          h-4
                          w-4
                          shrink-0
                          text-white/45
                        "
                      />

                      <input
                        ref={searchInputRef}
                        type="search"
                        value={searchQuery}
                        onChange={(event) => {
                          setSearchQuery(
                            event.target.value,
                          );
                        }}
                        placeholder="Search..."
                        aria-label="Search website"
                        className="
                          min-w-0
                          flex-1

                          border-0
                          bg-transparent

                          text-[14px]
                          text-white

                          outline-none

                          placeholder:text-white/40
                        "
                      />

                      <button
                        type="button"
                        aria-label="Close search"
                        onClick={closeSearch}
                        className="
                          ml-2

                          flex
                          h-7
                          w-7

                          shrink-0

                          items-center
                          justify-center

                          rounded-full

                          text-white/50

                          transition-colors

                          hover:bg-white/10
                          hover:text-white
                        "
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {!searchOpen && (
                <motion.button
                  type="button"
                  aria-label="Search the site"
                  onClick={() => {
                    setSearchOpen(true);
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
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
                  "
                >
                  <Search
                    className="
                      h-[23px]
                      w-[23px]
                    "
                  />
                </motion.button>
              )}
            </div>

            {/* =========================================
                MOBILE MENU BUTTON
            ========================================== */}

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => {
                setMobile(true);
              }}
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
              <Menu
                className="
                  h-[26px]
                  w-[26px]
                "
              />
            </button>
          </div>
        </div>

        {/* =========================================
            SERVICES MEGA MENU
        ========================================== */}

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
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
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
                    {services.map(
                      (service) => (
                        <li
                          key={
                            service.slug
                          }
                        >
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
                            {
                              service.title
                            }

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
                      ),
                    )}
                  </ul>
                </div>

                {/* OPERATIONS CARD */}

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
                    A 24/7 operations
                    desk sits behind
                    every service line.
                  </p>

                  <p
                    className="
                      mt-4

                      text-[16px]
                      leading-relaxed
                      text-white/68
                    "
                  >
                    One helpdesk, one
                    escalation path and
                    one accountable team
                    across the entire
                    student accommodation
                    estate.
                  </p>

                  <a
                    href="#contact"
                    className="
                      mt-7

                      inline-flex
                      items-center
                      gap-2

                      text-[16px]
                      font-bold
                      text-white

                      transition-colors

                      hover:text-[#65b0ff]
                    "
                  >
                    Contact our team

                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =========================================
          MOBILE OVERLAY
      ========================================== */}

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
              onClick={
                closeMobileMenu
              }
              className="
                fixed
                inset-0
                z-[60]

                bg-black/60

                backdrop-blur-[2px]

                lg:hidden
              "
            />

            {/* =====================================
                MOBILE DRAWER
            ====================================== */}

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
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
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
              {/* MOBILE DRAWER HEADER */}

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
                  onClick={
                    closeMobileMenu
                  }
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

              {/* =====================================
                  MOBILE SEARCH
              ====================================== */}

              <form
                onSubmit={handleSearch}
                className="
                  border-b
                  border-white/10

                  px-5
                  py-5
                "
              >
                <div
                  className="
                    flex
                    h-12
                    items-center

                    rounded-full

                    border
                    border-white/15

                    bg-white/[0.06]

                    px-4
                  "
                >
                  <Search
                    className="
                      mr-3
                      h-5
                      w-5
                      shrink-0
                      text-white/45
                    "
                  />

                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => {
                      setSearchQuery(
                        event.target.value,
                      );
                    }}
                    placeholder="Search..."
                    aria-label="Search website"
                    className="
                      min-w-0
                      flex-1

                      bg-transparent

                      text-[15px]
                      text-white

                      outline-none

                      placeholder:text-white/40
                    "
                  />
                </div>
              </form>

              {/* MOBILE NAVIGATION */}

              <nav
                aria-label="Mobile"
                className="
                  flex
                  flex-col

                  overflow-y-auto

                  px-6
                  py-4
                "
              >
                {navigation.map(
                  (item, index) => (
                    <motion.a
                      key={
                        item.label
                      }
                      href={
                        item.href
                      }
                      onClick={
                        closeMobileMenu
                      }
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index *
                          0.05,
                      }}
                      className="
                        flex

                        min-h-[68px]

                        items-center
                        justify-between

                        border-b
                        border-white/10

                        font-display

                        text-[23px]
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
                  ),
                )}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}