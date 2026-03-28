"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import { useI18n } from "@/lib/i18n/context";

export function FooterSection() {
  const { t } = useI18n();

  const footerLinks: Record<string, { name: string; href: string }[]> = {
    [t("footer.product")]: [
      { name: t("footer.links.features"), href: "#features" },
      { name: t("footer.links.howItWorks"), href: "#how-it-works" },
      { name: t("footer.links.pricing"), href: "#pricing" },
      { name: t("footer.links.agents"), href: "#integrations" },
    ],
    [t("footer.developersTitle")]: [
      { name: t("footer.links.documentation"), href: "https://atel-docs.vercel.app" },
      { name: t("footer.links.apiReference"), href: "https://atel-docs.vercel.app" },
      { name: t("footer.links.sdk"), href: "https://www.npmjs.com/package/@lawrenceliang-btc/atel-sdk" },
      { name: t("footer.links.status"), href: "https://atel-dashboard.vercel.app/dashboard" },
    ],
    [t("footer.company")]: [
      { name: t("footer.links.about"), href: "/about" },
      { name: t("footer.links.blog"), href: "https://x.com/atel_ai" },
      { name: t("footer.links.github"), href: "https://github.com/LawrenceLiang-BTC/atel-sdk" },
      { name: t("footer.links.contact"), href: "https://x.com/atel_ai" },
    ],
    [t("footer.legal")]: [
      { name: t("footer.links.privacy"), href: "/privacy" },
      { name: t("footer.links.terms"), href: "/terms" },
      { name: t("footer.links.security"), href: "#security" },
    ],
  };

  const socialLinks = [
    { name: t("footer.social.twitter"), href: "https://x.com/atel_ai" },
    { name: t("footer.social.github"), href: "https://github.com/LawrenceLiang-BTC/atel-sdk" },
    { name: t("footer.social.linkedin"), href: "#" },
  ];

  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">ATEL</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                {t("footer.brand")}
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              {t("footer.allSystems")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
