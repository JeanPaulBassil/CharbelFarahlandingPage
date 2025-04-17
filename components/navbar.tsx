"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  // Add state to track if menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleSmoothScroll = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    // Only apply to anchor links
    if (id.startsWith("#")) {
      e.preventDefault?.();
      // Close the menu when a link is clicked
      setIsMenuOpen(false);
      const element = document.getElementById(id.substring(1));
      if (element) {
        // Add a small delay to allow for any UI updates
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 10);
      }
    }
  };

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-black/95 border-b border-red-900/30 backdrop-blur-md z-50"
      classNames={{
        wrapper: "px-4 sm:px-6",
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NextLink
              className="flex justify-start items-center gap-2"
              href="/"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image
                  src="/images/CFLogo.svg"
                  alt="Charbel Farah Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-inherit text-white leading-tight">
                  CHARBEL FARAH
                </p>
                <p className="text-xs text-red-500 leading-tight tracking-wider">
                  MMA CHAMPION & COACH
                </p>
              </div>
            </NextLink>
          </motion.div>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-6 justify-start ml-8">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={item.href}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-red-500 data-[active=true]:font-medium hover:text-red-500 tracking-wider text-sm relative after:absolute after:content-[''] after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 after:bg-red-500 after:transition-all hover:after:w-full"
                  )}
                  color="foreground"
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </NextLink>
              </motion.div>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex ml-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as={Link}
              className="text-sm font-bold bg-gradient-to-br from-red-600 to-red-800 text-white hover:shadow-red-900/30 hover:shadow-lg transition-shadow flex items-center gap-2"
              href="https://wa.me/96171789664"
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              radius="sm"
            >
              <Icon icon="mdi:whatsapp" className="text-white text-sm" />
              BOOK A SESSION
            </Button>
          </motion.div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-white" />
      </NavbarContent>

      <NavbarMenu className="bg-black/95 pt-8 backdrop-blur-md">
        <div className="mx-4 mt-4 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <motion.div
              key={`${item}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <NavbarMenuItem>
                <Link
                  color="foreground"
                  href={item.href}
                  size="lg"
                  className="text-white hover:text-red-500 tracking-wider"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            </motion.div>
          ))}
        </div>
        <div className="mx-4 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Link
              href="https://wa.me/96171789664"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-900/20 transition-all"
            >
              <Icon icon="mdi:whatsapp" className="text-white text-xl" />
              BOOK A SESSION
            </Link>
          </motion.div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
