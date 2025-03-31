"use client";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Input } from "@heroui/input";
import { Code } from "@heroui/code";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function Home() {
  // Create refs for each section
  const aboutRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Function to handle smooth scrolling
  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      elementRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 md:gap-20 relative px-2 md:px-8 lg:px-12"
    >
      {/* Background effects */}
      <div className="fixed inset-0 bg-black opacity-90 -z-10"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-red-900/10 to-black/10 -z-10"></div>

      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-2 md:gap-10 py-2 md:py-20 relative"
      >
        <div className="flex-1 space-y-2 md:space-y-6 w-full relative z-10">
          <motion.div
            className="inline-block px-6 py-2 bg-gradient-to-r from-red-950/50 to-red-900/30 rounded-full border border-red-800/30 mb-2 backdrop-blur-sm"
            variants={fadeIn}
            custom={0}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(185, 28, 28, 0.4)" }}
          >
            <p className="text-sm text-red-400 font-medium tracking-wider">
              WORLD-CLASS MMA TRAINING
            </p>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
            variants={fadeIn}
            custom={1}
          >
            Train With <br />
            <motion.span
              className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-transparent bg-clip-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              Charbel Farah
            </motion.span>
          </motion.h1>

          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full my-4"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />

          <motion.p
            className={subtitle({ class: "max-w-md text-white/80 text-lg md:text-xl" })}
            variants={fadeIn}
            custom={2}
          >
            Multi-disciplinary combat sports athlete and coach with
            championships in MMA, BJJ, Wrestling, and Kickboxing. Take your
            training to the next level with personalized coaching.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-6"
            variants={fadeIn}
            custom={3}
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className={buttonStyles({
                  color: "danger",
                  radius: "lg",
                  variant: "shadow",
                  size: "lg",
                  class: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-900/30",
                })}
                href="#contact"
                onClick={scrollToSection(contactRef)}
              >
                BOOK A SESSION
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className={buttonStyles({
                  variant: "bordered",
                  radius: "lg",
                  size: "lg",
                  class: "border-red-600/50 text-white hover:bg-red-900/20 backdrop-blur-sm",
                })}
                href="#achievements"
                onClick={scrollToSection(achievementsRef)}
              >
                VIEW ACHIEVEMENTS
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-6 md:gap-10 pt-6 md:pt-10"
            variants={fadeIn}
            custom={4}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {[
              {
                icon: "mdi:medal",
                count: "15+",
                label: "Championships",
                color: "text-yellow-400",
              },
              {
                icon: "mdi:account-group",
                count: "100+",
                label: "Athletes Trained",
                color: "text-blue-400",
              },
              {
                icon: "mdi:star",
                count: "5+",
                label: "Disciplines",
                color: "text-amber-400",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-3 bg-black/30 p-3 rounded-lg backdrop-blur-sm border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-red-900/50 to-red-800/30 flex items-center justify-center border border-red-700/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon icon={stat.icon} className={`text-2xl ${stat.color}`} />
                </motion.div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.count}</p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="w-full md:flex-1 relative h-[300px] md:h-[550px] bg-gradient-to-br from-red-950 to-black rounded-2xl overflow-hidden shadow-2xl border border-red-900/50 mt-1 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(185, 28, 28, 0.25)",
            scale: 1.02,
          }}
        >
          {/* Fighter image with parallax effect */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{
              scale: 1.0,
              y: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              y: {
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/images/charbelFarahHero.jpg"
              alt="Charbel Farah MMA Fighter"
              fill
              className="object-cover object-center"
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Red accent border */}
          <motion.div
            className="absolute inset-0 border-2 border-red-700/0"
            animate={{
              borderColor: [
                "rgba(185, 28, 28, 0)",
                "rgba(185, 28, 28, 0.3)",
                "rgba(185, 28, 28, 0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-transparent"></div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-8 left-8 right-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.div
              className="flex items-center gap-4 bg-black/40 p-4 rounded-lg backdrop-blur-sm border border-white/5"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(220, 38, 38, 0.3)",
                    "0px 0px 15px rgba(220, 38, 38, 0.5)",
                    "0px 0px 0px rgba(220, 38, 38, 0.3)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <Icon icon="mdi:fire" className="text-2xl text-white" />
              </motion.div>
              <div>
                <p className="text-sm text-red-400 font-medium">FEATURED ACHIEVEMENT</p>
                <p className="text-xl text-white font-semibold">
                  Asian MMA Champion 2022
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        id="about"
        className="py-8 md:py-20 bg-gradient-to-r from-black via-black/95 to-black rounded-2xl p-4 md:p-10 shadow-2xl border border-red-900/30 mx-0 md:mx-0 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="flex flex-col items-center mb-4 md:mb-10 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-gradient-to-r from-red-950/50 to-red-900/30 rounded-full border border-red-800/30 mb-3 backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(185, 28, 28, 0.4)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p className="text-sm text-red-400 font-medium tracking-wider">
              ABOUT CHARBEL
            </p>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            MMA CHAMPION & PROFESSIONAL COACH
          </motion.h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-14 items-center relative z-10">
          <motion.div
            className="flex-1 space-y-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              With over a decade of experience in combat sports, I&apos;ve
              earned championships across multiple disciplines and competed at
              the highest levels internationally. My approach combines technical
              excellence with mental fortitude, helping athletes reach their
              full potential.
            </p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              Whether you&apos;re a beginner looking to learn self-defense or an
              experienced fighter aiming for championship glory, my training
              methods are tailored to your specific goals and abilities.
            </p>

            <div className="pt-2 md:pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Personalized training programs",
                "Competition preparation",
                "Technical and tactical development",
                "Mental conditioning",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex gap-3 items-center p-3 bg-black/30 rounded-lg backdrop-blur-sm border border-white/5 hover:border-red-900/30 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon
                      icon="mdi:check-circle"
                      className="text-white text-lg"
                    />
                  </motion.div>
                  <p className="text-white text-sm md:text-base">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "15+", label: "Championships" },
                { number: "100+", label: "Students Trained" },
                { number: "5+", label: "Fight Disciplines" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gradient-to-br from-red-900/40 to-red-950/40 p-4 md:p-6 rounded-xl text-center border border-red-800/30 hover:border-red-600/50 transition-all backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(155, 28, 28, 0.2)",
                  }}
                >
                  <motion.p
                    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-white/70 text-sm md:text-base mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        ref={achievementsRef}
        id="achievements"
        className="py-8 md:py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="flex flex-col items-center mb-4 md:mb-10 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-gradient-to-r from-red-950/50 to-red-900/30 rounded-full border border-red-800/30 mb-3 backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(185, 28, 28, 0.4)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p className="text-sm text-red-400 font-medium tracking-wider">
              ACHIEVEMENTS
            </p>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            CHAMPIONSHIP RECORD
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {[
            {
              title: "MMA",
              icon: "mdi:sword-cross",
              achievements: [
                {
                  medal: "G",
                  title: "Asian MMA Champion 2016",
                  subtitle: "Gold Medal",
                },
                {
                  medal: "G",
                  title: "Asian MMA Champion 2022",
                  subtitle: "Gold Medal",
                },
                {
                  medal: "G",
                  title: "MMA National Champion",
                  subtitle: "Gold Medal",
                },
                {
                  medal: "B",
                  title: "MMA World Championship",
                  subtitle: "Bronze Medal",
                },
              ],
            },
            {
              title: "BJJ & WRESTLING",
              icon: "mdi:karate",
              achievements: [
                {
                  medal: "G",
                  title: "National Champion BJJ Gi",
                  subtitle: "Gold Medal",
                },
                {
                  medal: "G",
                  title: "European Champion BJJ 2024",
                  subtitle: "Gold Medal",
                },
                {
                  medal: "S",
                  title: "Mediterranean BJJ Competition",
                  subtitle: "Silver Medal (2022)",
                },
                {
                  medal: "G",
                  title: "Wrestling Nationals",
                  subtitle: "Freestyle & Greco-Roman Gold",
                },
              ],
            },
            {
              title: "KICKBOXING & SANDA",
              icon: "mdi:boxing-glove",
              achievements: [
                {
                  medal: "G",
                  title: "Lebanese Sanda Championship 2021",
                  subtitle: "Gold Medal",
                },
                {
                  medal: "B",
                  title: "Lebanese Sanda Cup 2021",
                  subtitle: "Bronze Medal",
                },
                {
                  medal: "G",
                  title: "Kick Boxing Championship 2025",
                  subtitle: "Gold Medal",
                },
              ],
            },
            {
              title: "EDUCATION & HONORS",
              icon: "mdi:school",
              achievements: [
                {
                  medal: "S",
                  title: "Second President Athletic Scholarship",
                  subtitle: "2023-2024 Awardee",
                },
                {
                  medal: "J",
                  title: "Judoka Experience",
                  subtitle: "2-3 years training",
                },
              ],
            },
          ].map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-6 bg-black/30 p-6 rounded-2xl backdrop-blur-sm border border-white/5 hover:border-red-900/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-red-900/50 to-red-800/30 flex items-center justify-center border border-red-700/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon icon={category.icon} className="text-2xl text-red-400" />
                </motion.div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </motion.div>
              <ul className="space-y-3">
                {category.achievements.map((achievement, index) => (
                  <motion.li
                    key={achievement.title}
                    className="bg-black/40 p-4 rounded-xl flex items-center gap-4 border border-white/5 hover:border-red-900/30 transition-all group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                    viewport={{ once: true, amount: 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.span
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform ${
                        achievement.medal === "G"
                          ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black"
                          : achievement.medal === "S"
                            ? "bg-gradient-to-br from-gray-300 to-gray-100 text-black"
                            : "bg-gradient-to-br from-amber-600 to-amber-400 text-white"
                      }`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        boxShadow:
                          achievement.medal === "G"
                            ? [
                                "0px 0px 0px rgba(234, 179, 8, 0.3)",
                                "0px 0px 10px rgba(234, 179, 8, 0.5)",
                                "0px 0px 0px rgba(234, 179, 8, 0.3)",
                              ]
                            : achievement.medal === "S"
                              ? [
                                  "0px 0px 0px rgba(156, 163, 175, 0.3)",
                                  "0px 0px 10px rgba(156, 163, 175, 0.5)",
                                  "0px 0px 0px rgba(156, 163, 175, 0.3)",
                                ]
                              : [
                                  "0px 0px 0px rgba(180, 83, 9, 0.3)",
                                  "0px 0px 10px rgba(180, 83, 9, 0.5)",
                                  "0px 0px 0px rgba(180, 83, 9, 0.3)",
                                ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        repeatType: "reverse",
                      }}
                    >
                      {achievement.medal}
                    </motion.span>
                    <div>
                      <p className="font-medium text-white text-base">
                        {achievement.title}
                      </p>
                      <p className="text-sm text-white/60">
                        {achievement.subtitle}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Training Services */}
      <motion.section
        ref={servicesRef}
        id="services"
        className="py-8 md:py-20 bg-gradient-to-r from-red-950 to-black rounded-2xl p-4 md:p-10 shadow-2xl mx-0 md:mx-0 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="flex flex-col items-center mb-4 md:mb-10 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-gradient-to-r from-red-950/50 to-red-900/30 rounded-full border border-red-800/30 mb-3 backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(185, 28, 28, 0.4)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p className="text-sm text-red-400 font-medium tracking-wider">
              SERVICES
            </p>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            TRAINING PROGRAMS
          </motion.h2>
          <motion.p
            className="text-center text-white/80 max-w-2xl mt-2 md:mt-4 px-2 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Personalized training programs designed to help you reach your
            goals, whether you&apos;re a beginner or a competitive fighter.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
          {[
            {
              icon: "mdi:sword-cross",
              title: "Mixed Martial Arts",
              description:
                "Comprehensive training combining striking, grappling, and ground techniques. Learn to seamlessly transition between different fighting styles and develop a complete skill set.",
            },
            {
              icon: "mdi:karate",
              title: "Brazilian Jiu-Jitsu",
              description:
                "Master the art of ground fighting, submissions, and positional control. Available for both Gi and No-Gi training styles for competitors and hobbyists alike.",
            },
            {
              icon: "mdi:boxing-glove",
              title: "Kickboxing",
              description:
                "Develop powerful striking techniques with hands and feet. Focus on speed, precision, and effective combinations that work in both competition and self-defense scenarios.",
            },
            {
              icon: "mdi:weight-lifter",
              title: "Wrestling",
              description:
                "Learn takedowns, control, and defensive techniques from freestyle and Greco-Roman wrestling. Build explosive strength and improve your balance and core stability.",
            },
            {
              icon: "mdi:dumbbell",
              title: "Conditioning",
              description:
                "Fighter-specific strength and conditioning programs designed to improve your cardio, power, and recovery. Train like a champion to perform like one.",
            },
            {
              icon: "mdi:human-handsup",
              title: "Private Coaching",
              description:
                "Personalized one-on-one sessions tailored to your specific goals, whether you&apos;re preparing for competition or focusing on personal development.",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gradient-to-br from-black/60 to-black/40 rounded-xl p-6 md:p-8 border border-red-900/20 hover:border-red-600/50 hover:shadow-red-900/5 hover:shadow-lg transition-all group backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(155, 28, 28, 0.15)",
              }}
            >
              <div className="flex flex-col items-center md:items-start">
                <motion.div
                  className="mb-4 md:mb-6 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    boxShadow: [
                      "0px 0px 0px rgba(220, 38, 38, 0.3)",
                      "0px 0px 15px rgba(220, 38, 38, 0.3)",
                      "0px 0px 0px rgba(220, 38, 38, 0.3)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    repeatType: "reverse",
                    delay: index * 0.2,
                  }}
                >
                  <Icon icon={service.icon} className="text-2xl md:text-3xl" />
                </motion.div>
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-red-400 transition-colors text-center md:text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-base text-white/70 text-center md:text-left leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action / Contact */}
      <motion.section
        ref={contactRef}
        id="contact"
        className="py-8 md:py-20 mb-4 md:mb-10 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="bg-gradient-to-br from-gray-950 to-black rounded-2xl p-4 md:p-10 shadow-2xl border border-red-900/20 mx-0 md:mx-0 relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col items-center mb-4 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block px-6 py-2 bg-gradient-to-r from-red-950/50 to-red-900/30 rounded-full border border-red-800/30 mb-3 backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(185, 28, 28, 0.4)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="text-sm text-red-400 font-medium tracking-wider">
                CONTACT
              </p>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              START YOUR JOURNEY
            </motion.h2>
            <motion.p
              className="text-center text-white/80 max-w-2xl mt-2 md:mt-4 px-2 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ready to transform your training and take your skills to the next
              level? Contact Charbel Farah for session rates and availability.
              Limited spots available for serious athletes.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <motion.div
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-br from-black/70 to-black/50 p-6 md:p-8 rounded-xl border border-red-900/20 flex flex-col items-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(155, 28, 28, 0.1)",
                }}
              >
                <div className="flex items-center justify-center mb-4 md:mb-6">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      boxShadow: [
                        "0px 0px 0px rgba(220, 38, 38, 0.3)",
                        "0px 0px 15px rgba(220, 38, 38, 0.5)",
                        "0px 0px 0px rgba(220, 38, 38, 0.3)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatType: "reverse",
                    }}
                  >
                    <Icon
                      icon="mdi:whatsapp"
                      className="text-white text-3xl md:text-4xl"
                    />
                  </motion.div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-3 md:mb-4">
                  Book a Session via WhatsApp
                </h3>
                <p className="text-white/80 text-center mb-6 md:mb-8 text-base">
                  Chat directly with Charbel to discuss your training goals, schedule a session, or ask any questions about the programs offered.
                </p>
                <motion.a
                  href="https://wa.me/96171789664"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-900/20 transition-all"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon icon="mdi:whatsapp" className="text-white text-2xl" />
                  <span>CONTACT ON WHATSAPP</span>
                </motion.a>
                <p className="text-white/50 text-sm mt-4 text-center">
                  Phone: +961 71 789 664
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-black/70 to-black/50 p-6 md:p-8 rounded-xl border border-red-900/20 flex flex-col items-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(155, 28, 28, 0.1)",
                }}
              >
                <div className="flex items-center justify-center mb-4 md:mb-6">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      boxShadow: [
                        "0px 0px 0px rgba(220, 38, 38, 0.3)",
                        "0px 0px 15px rgba(220, 38, 38, 0.5)",
                        "0px 0px 0px rgba(220, 38, 38, 0.3)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatType: "reverse",
                    }}
                  >
                    <Icon
                      icon="mdi:instagram"
                      className="text-white text-3xl md:text-4xl"
                    />
                  </motion.div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-3 md:mb-4">
                  Follow on Instagram
                </h3>
                <p className="text-white/80 text-center mb-6 md:mb-8 text-base">
                  Follow Charbel on Instagram for training tips, competition updates, and behind-the-scenes content from the gym.
                </p>
                <motion.a
                  href="https://instagram.com/charbelfarahmma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-900/20 transition-all"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon icon="mdi:instagram" className="text-white text-2xl" />
                  <span>VISIT INSTAGRAM</span>
                </motion.a>
                <p className="text-white/50 text-sm mt-4 text-center">
                  @charbelfarahmma
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-br from-black/80 to-black/60 p-6 md:p-8 rounded-xl border border-red-900/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(155, 28, 28, 0.1)",
                }}
              >
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-red-900/50 to-red-800/30 flex items-center justify-center border border-red-700/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      boxShadow: [
                        "0px 0px 0px rgba(220, 38, 38, 0.3)",
                        "0px 0px 10px rgba(220, 38, 38, 0.3)",
                        "0px 0px 0px rgba(220, 38, 38, 0.3)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                  >
                    <Icon
                      icon="mdi:map-marker"
                      className="text-xl text-red-400"
                    />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Training Location
                  </h3>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/80 mb-2">
                    Training Location
                  </p>
                  <p className="text-white/80 mb-2">Kesrouane Area, Lebanon</p>
                  <p className="text-white/80 mb-4 md:mb-6">Exact location will be discussed and confirmed with Charbel</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-black/80 to-black/60 p-6 md:p-8 rounded-xl border border-red-900/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(155, 28, 28, 0.1)",
                }}
              >
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-red-900/50 to-red-800/30 flex items-center justify-center border border-red-700/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      boxShadow: [
                        "0px 0px 0px rgba(220, 38, 38, 0.3)",
                        "0px 0px 10px rgba(220, 38, 38, 0.3)",
                        "0px 0px 0px rgba(220, 38, 38, 0.3)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                  >
                    <Icon
                      icon="mdi:clock"
                      className="text-xl text-red-400"
                    />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Training Schedule
                  </h3>
                </div>
                <motion.div
                  className="space-y-3 text-white/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <p className="text-base mb-4">
                    Training times will be discussed and agreed upon with Charbel based on your availability and goals. We offer flexible scheduling to accommodate your needs.
                  </p>
                  <p className="text-base">
                    Contact Charbel to discuss your preferred training schedule and availability.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-3 md:py-10 px-4 md:px-0 relative z-10">
        <div className="max-w-full border-t border-red-900/20 pt-4 md:pt-8">
          <p className="text-white/60 text-center text-sm">
            © 2024 Charbel Farah MMA Training. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
