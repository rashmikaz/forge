"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiMenu, FiZap, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Updated navLinks with href paths
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Solutions", href: "/solutions", hasDropdown: true },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  // Updated dropdown items with paths
  const dropdownItems = [
    { label: "IT", href: "/solutions/it" },
    { label: "HR", href: "/solutions/hr" },
    { label: "Procurement", href: "/solutions/procurement" },
  ];

  // Function to check if link is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  // Handle CTA button click
  const handleStartProject = () => {
    router.push("/contact");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo with Link */}
        <Link href="/" className="cursor-pointer">
          <motion.div
            className="text-2xl font-semibold tracking-tight text-neutral-900 select-none"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            FORGE
          </motion.div>
        </Link>

        {/* Center Wrapped Navigation */}
        <div className="hidden md:flex items-center relative">
          <div className="bg-neutral-100/70 backdrop-blur-md border border-neutral-200 rounded-full px-6 py-2 flex items-center space-x-8 shadow-sm">
            {navLinks.map((link, index) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link href={link.href}>
                    <motion.button
                      className={`text-neutral-800 font-medium hover:text-neutral-950 transition relative ${
                        isActive(link.href) ? "text-neutral-950" : ""
                      }`}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-neutral-900"
                        initial={{ width: isActive(link.href) ? "100%" : 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </Link>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-10 left-0 bg-white/90 border border-neutral-200/70 rounded-2xl shadow-lg backdrop-blur-md w-44 py-2 overflow-hidden"
                      >
                        {dropdownItems.map((item, idx) => (
                          <Link key={item.label} href={item.href}>
                            <motion.div
                              className={`block px-4 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 rounded-md transition relative group cursor-pointer ${
                                isActive(item.href)
                                  ? "bg-neutral-100 text-neutral-950"
                                  : ""
                              }`}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ x: 4 }}
                            >
                              <span className="relative z-10">
                                {item.label}
                              </span>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity"
                                layoutId="dropdown-hover"
                              />
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.label} href={link.href}>
                  <motion.div
                    className={`text-neutral-800 font-medium hover:text-neutral-950 transition relative cursor-pointer ${
                      isActive(link.href) ? "text-neutral-950" : ""
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-neutral-900"
                      initial={{ width: isActive(link.href) ? "100%" : 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              )
            )}
          </div>
        </div>

        {/* Right Side Button - Futuristic Magnetic Design */}
        <motion.button
          className="hidden md:flex items-center gap-0 relative group"
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleStartProject}
        >
          {/* Main text container */}
          <motion.div
            className="relative bg-neutral-900 text-white pl-5 pr-4 py-2.5 rounded-l-full flex items-center gap-2.5 overflow-hidden"
            animate={{
              paddingRight: isHovered ? "3rem" : "1rem",
              borderTopRightRadius: isHovered ? "0.5rem" : "9999px",
              borderBottomRightRadius: isHovered ? "0.5rem" : "9999px",
            }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Liquid morphing background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-700"
              animate={{
                x: isHovered ? [0, 10, -10, 0] : 0,
                scale: isHovered ? [1, 1.02, 0.98, 1] : 1,
              }}
              transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            />

            {/* Scanning line effect */}
            {isHovered && (
              <motion.div
                className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent"
                animate={{
                  x: [0, 200],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}

            {/* Icon container with magnetic pull */}
            <motion.div
              className="relative z-10"
              animate={{
                x: isHovered ? -3 : 0,
                rotate: isHovered ? [0, -10, 10, 0] : 0,
                scale: isHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{
                x: { duration: 0.3 },
                rotate: { duration: 1.5, repeat: isHovered ? Infinity : 0 },
                scale: { duration: 0.8, repeat: isHovered ? Infinity : 0 },
              }}
            >
              <FiZap className="text-base" />
            </motion.div>

            {/* Text with character split animation */}
            <div className="relative z-10 text-sm font-semibold flex overflow-hidden">
              {"Start a Project".split("").map((char, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: isHovered ? [0, -3, 0] : 0,
                    opacity: isHovered ? [1, 0.7, 1] : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.03,
                    repeat: isHovered ? Infinity : 0,
                    repeatDelay: 1,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Floating particles with trails */}
            {isHovered && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full"
                    initial={{ x: 20, y: 10 + i * 4, opacity: 0 }}
                    animate={{
                      x: [20, -30],
                      y: [10 + i * 4, 10 + i * 4 + (Math.random() * 10 - 5)],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.15,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </>
            )}

            {/* Energy waves emanating */}
            {isHovered && (
              <>
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={`wave-${i}`}
                    className="absolute left-0 top-1/2 w-full h-px bg-white/20"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                      scaleX: [0, 1],
                      opacity: [0.5, 0],
                      y: [-10, -20],
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                ))}
              </>
            )}
          </motion.div>

          {/* Magnetic arrow ball - detaches on hover */}
          <motion.div
            className="relative bg-white rounded-full p-2.5 shadow-lg"
            animate={{
              x: isHovered ? 15 : 0,
              y: isHovered ? [0, -3, 3, 0] : 0,
              scale: isHovered ? 1.15 : 1,
              boxShadow: isHovered
                ? "0 0 25px rgba(0,0,0,0.2), 0 0 60px rgba(0,0,0,0.1)"
                : "0 10px 15px rgba(0,0,0,0.1)",
            }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 20 },
              y: {
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              },
              scale: { duration: 0.3 },
            }}
          >
            {/* Spinning inner circle */}
            <motion.div
              className="absolute inset-1 border border-neutral-200 rounded-full"
              animate={{
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? [1, 0.8, 1] : 1,
                opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
              }}
              transition={{
                rotate: {
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "linear",
                },
                scale: { duration: 1, repeat: isHovered ? Infinity : 0 },
                opacity: { duration: 1.5, repeat: isHovered ? Infinity : 0 },
              }}
            />

            {/* Secondary spinning ring */}
            {isHovered && (
              <motion.div
                className="absolute inset-0.5 border-2 border-neutral-300 rounded-full"
                animate={{
                  rotate: -360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity },
                }}
              />
            )}

            {/* Arrow with elastic movement */}
            <motion.div
              className="relative z-10 text-neutral-900"
              animate={{
                x: isHovered ? [0, 3, 0] : 0,
                rotate: isHovered ? [0, 10, -10, 0] : 0,
                scale: isHovered ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            >
              <FiArrowRight className="text-sm" />
            </motion.div>

            {/* Connection line - magnetic tether with pulse */}
            {isHovered && (
              <motion.div
                className="absolute top-1/2 right-full h-px bg-gradient-to-l from-neutral-400 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: [0, 15, 15],
                  opacity: [0, 0.3, 0.6, 0.3],
                  scaleY: [1, 1.5, 1],
                }}
                transition={{
                  width: { duration: 0.3 },
                  opacity: { duration: 1.5, repeat: Infinity },
                  scaleY: { duration: 1, repeat: Infinity },
                }}
                style={{ transformOrigin: "right center" }}
              />
            )}

            {/* Energy sparks along the tether */}
            {isHovered && (
              <motion.div
                className="absolute top-1/2 right-full w-1.5 h-1.5 bg-white rounded-full"
                animate={{
                  x: [0, -15],
                  opacity: [1, 0],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}

            {/* Orbiting dot */}
            {isHovered && (
              <motion.div
                className="absolute w-1.5 h-1.5 bg-neutral-900 rounded-full"
                animate={{
                  x: [0, 20, 20, 0, 0],
                  y: [0, 0, 20, 20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  marginTop: -3,
                  marginLeft: -3,
                }}
              />
            )}

            {/* Counter-orbiting dot */}
            {isHovered && (
              <motion.div
                className="absolute w-1 h-1 bg-neutral-600 rounded-full"
                animate={{
                  x: [0, 0, -15, -15, 0],
                  y: [0, -15, -15, 0, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  marginTop: -2,
                  marginLeft: -2,
                }}
              />
            )}

            {/* Expanding rings on hover */}
            {isHovered && (
              <>
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={`ring-${i}`}
                    className="absolute inset-0 border border-neutral-300 rounded-full"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{
                      scale: [1, 2],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.75,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>

          {/* Glow effect behind button with color shift */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-neutral-900/20 blur-xl rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ zIndex: -1 }}
            />
          )}

          {/* Additional ambient particles around the whole button */}
          {isHovered && (
            <>
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`ambient-${i}`}
                  className="absolute w-0.5 h-0.5 bg-neutral-400 rounded-full"
                  initial={{
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 40 - 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: [Math.random() * 40 - 20, Math.random() * 40 - 60],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  style={{ left: "50%", top: "50%" }}
                />
              ))}
            </>
          )}
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-2xl text-neutral-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-neutral-200/40 shadow-lg px-6 py-4 space-y-4"
          >
            {navLinks.map((link, index) =>
              link.hasDropdown ? (
                <motion.div
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center justify-between w-full text-neutral-900 font-medium ${
                      isActive(link.href) ? "text-neutral-950" : ""
                    }`}
                  >
                    {link.label} <span>{dropdownOpen ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-3 mt-2 space-y-1"
                      >
                        {dropdownItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setDropdownOpen(false);
                            }}
                            className={`block text-neutral-700 hover:text-neutral-950 transition ${
                              isActive(item.href)
                                ? "text-neutral-950 font-medium"
                                : ""
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  <motion.div
                    className={`block text-neutral-800 hover:text-neutral-950 font-medium ${
                      isActive(link.href) ? "text-neutral-950" : ""
                    }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              )
            )}

            <motion.button
              className="w-full flex items-center justify-between bg-neutral-900 text-white py-3 px-5 rounded-full font-semibold relative overflow-hidden group"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navLinks.length * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setMobileOpen(false);
                handleStartProject();
              }}
            >
              <div className="flex items-center gap-2 relative z-10">
                <FiZap className="text-lg" />
                <span>Start a Project</span>
              </div>
              <FiArrowRight className="text-lg relative z-10" />

              <motion.div
                className="absolute inset-0 bg-neutral-800"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 2, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
