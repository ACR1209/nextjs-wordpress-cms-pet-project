"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  BLOG_PAGE,
  CONTACT_PAGE,
  PRODUCTS_PAGE,
  ROOT_PAGE,
} from "@/lib/routes";

const NAVBAR_ITEMS = [
  {
    title: "Home",
    href: ROOT_PAGE,
  },
  {
    title: "Products",
    href: PRODUCTS_PAGE,
  },
  {
    title: "Blog",
    href: BLOG_PAGE,
  },
  {
    title: "Contact",
    href: CONTACT_PAGE,
  },
];

function Navbar() {
  return (
    <div>
      <NavigationMenu className="max-w-full w-full border-b py-3">
        <NavigationMenuList>
          {NAVBAR_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.title}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
