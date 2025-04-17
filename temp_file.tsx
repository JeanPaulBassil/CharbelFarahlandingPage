"use client";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Input } from "@heroui/input";
import { Code } from "@heroui/code";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

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

  // Function to toggle video mute state
  const toggleMute = () => {
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
      
      // Force volume to a reasonable level when unmuting
      if (!newMuteState) {
        videoRef.current.volume = 0.7;
      }
    }
  };

  // Initialize video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  }, []);

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
                  class: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-900/30 flex items-center gap-2",
                })}
                href="https://wa.me/96171789664"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:whatsapp" className="text-white text-xl" />
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
          {/* Video with parallax effect */}
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
            <video 
              ref={videoRef}
              src="/WhatsApp Video Apr 17 2025.mp4"
              className="absolute inset-0 w-full h-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
            />

            <motion.button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-20 bg-black/50 backdrop-blur-sm p-3 rounded-full border border-red-600/30 hover:bg-black/70 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <Icon 
                icon={isMuted ? "mdi:volume-off" : "mdi:volume-high"} 
                className="text-white text-2xl" 
              />
            </motion.button>
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
