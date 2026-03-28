"use client";

import { ArrowRight, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const ctaHrefs = [
  "https://atel-dashboard.vercel.app",
  "https://atel-dashboard.vercel.app",
  "mailto:contact@atelai.org",
];

const commissionTiers = [
  { range: "$0 – $10", base: "5%", certified: "4.5%", enterprise: "4%" },
  { range: "$10 – $100", base: "3%", certified: "2.5%", enterprise: "2%" },
  { range: "$100+", base: "2%", certified: "1.5%", enterprise: "1%" },
];

export function PricingSection() {
  const { t } = useI18n();

  const plans: {
    name: string;
    description: string;
    priceLabel: string;
    priceSubtext: string;
    features: string[];
    cta: string;
    note: string | null;
  }[] = t("pricing.plans");

  const boosts: { name: string; price: string; desc: string }[] = t("pricing.promotion.tiers");

  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            {t("pricing.eyebrow")}
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            {t("pricing.headline")}
            <br />
            <span className="text-stroke">{t("pricing.headlineSub")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            {t("pricing.description")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => {
            const popular = idx === 1;
            return (
              <div
                key={plan.name}
                className={`relative p-8 lg:p-12 bg-background ${
                  popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
                }`}
              >
                {popular && (
                  <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                    {t("pricing.mostPopular")}
                  </span>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-foreground/10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl lg:text-6xl text-foreground">
                      {plan.priceLabel}
                    </span>
                    {plan.priceSubtext && (
                      <span className="text-muted-foreground">{plan.priceSubtext}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                {plan.note && (
                  <p className="text-xs text-muted-foreground mt-4 mb-2">{plan.note}</p>
                )}

                {/* CTA */}
                <a
                  href={ctaHrefs[idx]}
                  className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                    popular
                      ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                      : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Commission Table */}
        <div className="mt-24">
          <h3 className="font-display text-3xl text-foreground text-center mb-4">
            {t("pricing.commission.title")}
          </h3>
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-10">
            {t("pricing.commission.description")}
          </p>
          <div className="overflow-x-auto">
            <table className="mx-auto text-sm">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="px-8 py-4 text-left text-muted-foreground font-mono text-xs uppercase tracking-wider">{t("pricing.commission.orderAmount")}</th>
                  <th className="px-8 py-4 text-center text-muted-foreground font-mono text-xs uppercase tracking-wider">{t("pricing.commission.freeVerified")}</th>
                  <th className="px-8 py-4 text-center text-muted-foreground font-mono text-xs uppercase tracking-wider">{t("pricing.commission.certified")}</th>
                  <th className="px-8 py-4 text-center text-muted-foreground font-mono text-xs uppercase tracking-wider">{t("pricing.commission.enterprise")}</th>
                </tr>
              </thead>
              <tbody>
                {commissionTiers.map((row) => (
                  <tr key={row.range} className="border-b border-foreground/5">
                    <td className="px-8 py-4 font-mono text-muted-foreground">{row.range}</td>
                    <td className="px-8 py-4 text-center font-mono text-foreground">{row.base}</td>
                    <td className="px-8 py-4 text-center font-mono text-foreground">{row.certified}</td>
                    <td className="px-8 py-4 text-center font-mono text-foreground">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {t("pricing.commission.floor")}
          </p>
        </div>

        {/* Boost / Promotion */}
        <div className="mt-24">
          <h3 className="font-display text-3xl text-foreground text-center mb-4">
            {t("pricing.promotion.title")}
          </h3>
          <p className="text-center text-sm text-muted-foreground max-w-xl mx-auto mb-10">
            {t("pricing.promotion.description")}
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
            {boosts.map((b) => (
              <div key={b.name} className="bg-background p-8 text-center">
                <h4 className="font-display text-xl text-foreground">{b.name}</h4>
                <p className="mt-2 font-mono text-2xl text-foreground">{b.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {t("pricing.promotion.cliNote")} <code className="font-mono text-foreground/80">atel boost purchase &lt;tier&gt; &lt;weeks&gt;</code>.
            {" "}{t("pricing.promotion.cliWarning")}
          </p>
        </div>

        {/* Bottom Note */}
        <p className="mt-16 text-center text-sm text-muted-foreground">
          {t("pricing.bottomNote")}{" "}
          <a href="https://atel-docs.vercel.app" className="underline underline-offset-4 hover:text-foreground transition-colors">
            {t("pricing.viewDocs")}
          </a>
        </p>
      </div>
    </section>
  );
}
