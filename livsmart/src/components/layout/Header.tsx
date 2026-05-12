"use client";

import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, ShoppingCart, ChevronDown, X, ArrowRight } from "lucide-react";
import { utilityNav, accountNav } from "@/lib/navigation";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/commerce/CartProvider";
import { CartDrawer } from "@/components/commerce/CartDrawer";
import { cn } from "@/lib/utils";

const primaryNav = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services-shop" },
  { label: "LIVSupply", href: "/livsupply" },
  { label: "LIVWaste", href: "/livwaste" },
  { label: "Dashboards", href: "/app-dashboards" },
];

const moreNav = [
  { label: "LIVSmart platform", href: "/livsmart" },
  { label: "Providers", href: "/service-providers" },
  { label: "Affiliates", href: "/affiliate-network" },
  { label: "Technology", href: "/new-water-technology" },
  { label: "Water-as-a-Service", href: "/water-as-a-service" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const mobileNav = [...primaryNav, ...moreNav];

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { setOpen: setCartOpen, count } = useCart();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Slim utility bar */}
      <div className="relative z-30 border-b border-white/[0.06] bg-navy-900/70 backdrop-blur">
        <div className="container-wide flex h-9 items-center justify-between text-[11px]">
          <p className="text-white/45 tracking-wide">
            LIVSmart · the digital layer of LIVWater
          </p>
          <nav className="hidden items-center gap-5 md:flex">
            {accountNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/45 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main header — glassy, dark, sticky */}
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-200",
          scrolled
            ? "border-b border-white/[0.08] bg-navy-900/85 backdrop-blur-xl"
            : "border-b border-transparent bg-navy-900/40 backdrop-blur",
        )}
      >
        <div className="container-wide flex h-[68px] items-center justify-between gap-6">
          {/* Logo + primary nav */}
          <div className="flex items-center gap-10">
            <Logo />
            <nav className="hidden items-center gap-0.5 lg:flex">
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-[13px] font-medium text-white/65 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <MoreMenu />
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1.5">
            <Button
              href="/quote-request"
              variant="ghostLight"
              size="sm"
              className="hidden lg:inline-flex"
            >
              Request Quote
            </Button>
            <Button
              href="/solutions"
              size="sm"
              variant="accent"
              className="hidden sm:inline-flex"
            >
              Build My Solution
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
            <button
              onClick={() => setCartOpen(true)}
              aria-label="Cart"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            >
              <ShoppingCart className="h-4 w-4" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-500 px-1.5 text-[10px] font-semibold text-navy-900">
                  {count}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
              <Dialog.Trigger asChild>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white lg:hidden"
                  aria-label="Menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-900/80 backdrop-blur-sm" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-navy-900/95 backdrop-blur-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                    <Logo />
                    <Dialog.Close
                      className="rounded-full p-2 text-white/55 hover:bg-white/[0.06] hover:text-white"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </Dialog.Close>
                  </div>
                  <div className="flex-1 overflow-y-auto px-6 py-6">
                    <p className="eyebrow">Marketplace</p>
                    <nav className="mt-3 flex flex-col">
                      {mobileNav.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2.5 text-sm font-medium text-white/85 transition hover:text-accent-300"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <p className="eyebrow mt-8">Utility</p>
                    <nav className="mt-3 flex flex-col">
                      {utilityNav.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2.5 text-sm font-medium text-white/85 transition hover:text-accent-300"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <p className="eyebrow mt-8">Logins</p>
                    <nav className="mt-3 flex flex-col">
                      {accountNav.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2.5 text-sm font-medium text-white/85 transition hover:text-accent-300"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="border-t border-white/10 px-6 py-5">
                    <Button
                      href="/solutions"
                      block
                      variant="accent"
                      onClick={() => setMobileOpen(false)}
                    >
                      Build My Solution
                    </Button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  );
}

function MoreMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[13px] font-medium text-white/65 transition hover:bg-white/[0.06] hover:text-white"
      >
        More <ChevronDown className="h-3 w-3" />
      </button>
      <div
        className={cn(
          "absolute right-0 top-full z-40 mt-2 min-w-[220px] origin-top-right rounded-2xl border border-white/10 bg-navy-900/95 p-2 shadow-2xl backdrop-blur-xl transition",
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
        )}
      >
        {moreNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm text-white/75 transition hover:bg-white/[0.06] hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
