'use client';
import Image from 'next/image';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '../modeToggle';

export const navigationItems = [
  {
    name: 'Features',
    href: '/#features',
  },
  {
    name: 'Testimonials',
    href: '/#testimonials',
  },
  {
    name: 'pricing',
    href: '/#pricing',
  },
  {
    name: 'FAQs',
    href: '/#faqs',
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 w-full py-2 border-b-2 shadow-lg dark:bg-[#0C0A09] z-50 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-12">
        <Link
          href="/"
          className="col-span-6 flex md:col-span-3 items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mr-2 w-6 h-6"
          >
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M3 9h18"></path>
            <path d="M9 21V9"></path>
          </svg>
          <p>ShadcnUI/React</p>
        </Link>
        <div className="hidden sm:flex justify-center items-center col-span-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      active={pathname === item.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center justify-end md:col-span-3 col-span-6">
          <div className="hidden sm:flex gap-2">
            <Button variant="secondary" asChild>
              <a href="mailto:a7mdmo74@gmail.com">Contact Me</a>
            </Button>
            <ModeToggle variant="ghost" />
          </div>
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
