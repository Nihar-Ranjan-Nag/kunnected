import {
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";

import { Brandmark } from "@/components/brand/Brandmark";

import {
  navigation,
  services,
} from "@/lib/site";

export function Nav() {
  const [mega, setMega] = useState(false);

  const [mobile, setMobile] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");

  const [scrolled, setScrolled] =
    useState(false);

  const searchInputRef =
    useRef<HTMLInputElement>(null);

  /* =========================================
     ADD HOME NAV ITEM
  ========================================== */

  const navItems = navigation.some(
    (item) =>
      item.label.toLowerCase() === "home",
  )
    ? navigation
    : [
        {
          label: "Home",
          href: "#top",
        },
        ...navigation,
      ];

  /* =========================================
     NAVBAR SCROLL
  ========================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  /* =========================================
     MOBILE BODY LOCK
  ========================================== */

  useEffect(() => {
    if (
      typeof document === "undefined"
    ) {
      return;
    }

    document.body.style.overflow =
      mobile ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  /* =========================================
     SEARCH AUTO FOCUS
  ========================================== */

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    const timer =
      window.setTimeout(() => {
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
     SEARCH
  ========================================== */

  const handleSearch = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const query = searchQuery
      .trim()
      .toLowerCase();

    if (!query) {
      return;
    }

    const navMatch = navItems.find(
      (item) =>
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

    const serviceMatch =
      services.find(
        (service) =>
          service.title
            .toLowerCase()
            .includes(query),
      );

    if (serviceMatch) {
      const section =
        document.querySelector(
          "#services",
        );

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        closeSearch();
      }
    }
  };

  return (
    <>
      {/* =========================================
          HEADER
          TRANSPARENT INITIALLY
          GLASS AFTER SCROLL
      ========================================== */}

      <header
        className={`
          fixed

          inset-x-0
          top-0

          z-50

          border-b

          transition-[background-color,border-color,box-shadow,backdrop-filter]
          duration-300
          ease-out

          ${
            scrolled
              ? `
                border-white/[0.07]

                bg-[#18164b]/[0.18]

                backdrop-blur-[12px]
                backdrop-saturate-150

                shadow-[0_8px_30px_rgba(0,0,0,0.11)]

                supports-[backdrop-filter]:bg-[#18164b]/[0.14]
              `
              : `
                border-transparent

                bg-transparent

                backdrop-blur-none

                shadow-none
              `
          }
        `}
        onMouseLeave={() => {
          setMega(false);
        }}
      >
        {/* =========================================
            NAVBAR INNER
        ========================================== */}

        <div
          className={`
            mx-auto

            flex

            w-full
            max-w-[1380px]

            items-center

            px-4

            sm:px-5

            md:px-7

            lg:px-8

            xl:pl-[80px]
            xl:pr-10

            2xl:pl-[90px]
            2xl:pr-0

            transition-[height,padding]
            duration-300
            ease-out

            ${
              scrolled
                ? `
                  h-[72px]

                  xl:h-[96px]

                  xl:items-start

                  xl:pt-[22px]
                `
                : `
                  h-[82px]

                  xl:h-[150px]

                  xl:items-start

                  xl:pt-[58px]
                `
            }
          `}
        >
          {/* =====================================
              LOGO
          ====================================== */}

          <a
            href="#top"
            aria-label="KUnnected FM home"
            className="
              flex
              shrink-0
              items-center
            "
          >
            <Brandmark tone="invert" />
          </a>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================== */}

          <nav
            aria-label="Primary"
            className="
              hidden
              items-center

              xl:ml-[65px]
              xl:flex
              xl:gap-[38px]

              2xl:ml-[70px]
              2xl:gap-[48px]
            "
          >
            {navItems.map((item) => {
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
                    h-[56px]

                    items-center

                    whitespace-nowrap

                    text-[20px]
                    font-normal

                    tracking-[-0.012em]

                    text-white/95

                    transition-colors
                    duration-300

                    hover:text-white

                    2xl:text-[22px]
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      gap-[8px]
                    "
                  >
                    {item.label}

                    {hasMega && (
                      <ChevronDown
                        className={`
                          h-[20px]
                          w-[20px]

                          shrink-0

                          stroke-[2]

                          transition-transform
                          duration-300
                          ease-out

                          ${
                            mega
                              ? "rotate-180"
                              : "rotate-0"
                          }
                        `}
                      />
                    )}
                  </span>

                  {hasMega && mega && (
                    <motion.span
                      layoutId="nav-underline"
                      className="
                        absolute

                        inset-x-0
                        bottom-0

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
              RIGHT AREA
          ========================================== */}

          <div
            className="
              ml-auto

              flex
              items-center
              gap-1

              xl:h-[56px]
            "
          >
            {/* =====================================
                DESKTOP SEARCH
            ====================================== */}

            <div
              className="
                hidden
                items-center

                xl:flex
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
                      width: 230,
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
                    onSubmit={
                      handleSearch
                    }
                    className="
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        flex
                        h-[46px]

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

                          h-[18px]
                          w-[18px]

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

                          text-[15px]
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

                          h-8
                          w-8

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
                        <X
                          className="
                            h-[18px]
                            w-[18px]
                          "
                        />
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

                    h-[50px]
                    w-[50px]

                    items-center
                    justify-center

                    rounded-full

                    text-white

                    transition-colors
                    duration-300

                    hover:bg-white/10
                  "
                >
                  <Search
                    className="
                      h-[26px]
                      w-[26px]

                      stroke-[1.8]
                    "
                  />
                </motion.button>
              )}
            </div>

            {/* =====================================
                MOBILE / TABLET MENU
            ====================================== */}

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => {
                setMobile(true);
              }}
              className="
                inline-flex

                h-11
                w-11

                items-center
                justify-center

                rounded-full

                text-white

                transition-colors
                duration-300

                hover:bg-white/10

                sm:h-12
                sm:w-12

                xl:hidden
              "
            >
              <Menu
                className="
                  h-[27px]
                  w-[27px]

                  sm:h-[29px]
                  sm:w-[29px]
                "
              />
            </button>
          </div>
        </div>

        {/* =========================================
            SERVICES DROPDOWN
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
                duration: 0.24,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="
                absolute

                left-1/2
                top-full

                hidden

                w-[calc(100%-80px)]
                max-w-[1040px]

                -translate-x-1/2

                overflow-hidden

                rounded-b-[18px]

                border
                border-t-0
                border-white/10

                bg-[#121032]/95

                backdrop-blur-xl

                shadow-[0_20px_50px_rgba(0,0,0,0.30)]

                xl:block
              "
            >
              <div
                className="
                  px-8
                  py-5

                  2xl:px-9
                  2xl:py-6
                "
              >
                <p
                  className="
                    text-[12px]

                    font-bold
                    uppercase

                    tracking-[0.22em]

                    text-white/45
                  "
                >
                  Service Lines
                </p>

                <ul
                  className="
                    mt-3

                    grid
                    grid-cols-3

                    gap-x-9
                  "
                >
                  {services.map(
                    (service) => (
                      <li
                        key={service.slug}
                        className="
                          border-b
                          border-white/10
                        "
                      >
                        <a
                          href="#services"
                          onClick={() => {
                            setMega(false);
                          }}
                          className="
                            group

                            flex
                            min-h-[56px]

                            items-center
                            justify-between

                            gap-3

                            py-2.5

                            text-[15px]

                            font-semibold

                            leading-[1.45]

                            text-white/80

                            transition-colors
                            duration-200

                            hover:text-white

                            2xl:text-[16px]
                          "
                        >
                          <span>
                            {service.title}
                          </span>

                          <ArrowUpRight
                            className="
                              h-[19px]
                              w-[19px]

                              shrink-0

                              opacity-0

                              transition-all
                              duration-200

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
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =========================================
          MOBILE / TABLET OVERLAY
      ========================================== */}

      <AnimatePresence>
        {mobile && (
          <>
            {/* BACKDROP */}

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

                xl:hidden
              "
            />

            {/* =====================================
                DRAWER
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

                w-[86%]
                max-w-[420px]

                flex-col

                bg-[#18164b]/95

                backdrop-blur-xl

                text-white

                shadow-[20px_0_60px_rgba(0,0,0,0.4)]

                xl:hidden
              "
            >
              {/* =====================================
                  DRAWER HEADER
              ====================================== */}

              <div
                className="
                  flex

                  h-[86px]

                  items-center
                  justify-between

                  border-b
                  border-white/10

                  px-5

                  sm:h-[94px]
                  sm:px-6
                "
              >
                <Brandmark
                  tone="invert"
                  className="
                    h-[46px]
                    max-w-[220px]

                    sm:h-[52px]
                    sm:max-w-[250px]
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

                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-full

                    transition-colors

                    hover:bg-white/10
                  "
                >
                  <X
                    className="
                      h-[25px]
                      w-[25px]
                    "
                  />
                </button>
              </div>

              {/* =====================================
                  MOBILE SEARCH
              ====================================== */}

              <form
                onSubmit={
                  handleSearch
                }
                className="
                  border-b
                  border-white/10

                  px-5
                  py-4

                  sm:px-6
                  sm:py-5
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

                      h-[21px]
                      w-[21px]

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

                      text-[16px]
                      text-white

                      outline-none

                      placeholder:text-white/40
                    "
                  />
                </div>
              </form>

              {/* =====================================
                  MOBILE NAVIGATION
              ====================================== */}

              <nav
                aria-label="Mobile"
                className="
                  flex

                  flex-1
                  flex-col

                  overflow-y-auto

                  px-5
                  py-3

                  sm:px-6
                  sm:py-4
                "
              >
                {navItems.map(
                  (
                    item,
                    index,
                  ) => {
                    const hasMega =
                      "mega" in item &&
                      Boolean(item.mega);

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
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
                            index * 0.05,
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
                          font-bold

                          tracking-[-0.02em]

                          text-white/92

                          transition-colors

                          hover:text-[#65b0ff]

                          sm:min-h-[70px]
                          sm:text-[24px]
                        "
                      >
                        <span
                          className="
                            flex

                            items-center

                            gap-2.5
                          "
                        >
                          {item.label}

                          {hasMega && (
                            <ChevronDown
                              className="
                                h-[22px]
                                w-[22px]

                                shrink-0

                                stroke-[2]

                                text-white/60
                              "
                            />
                          )}
                        </span>

                        {!hasMega && (
                          <ArrowUpRight
                            className="
                              h-[22px]
                              w-[22px]

                              shrink-0

                              text-white/40
                            "
                          />
                        )}
                      </motion.a>
                    );
                  },
                )}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}