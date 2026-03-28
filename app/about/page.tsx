"use client";

import { useI18n } from "@/lib/i18n/context";

export default function AboutPage() {
  const { t } = useI18n();

  const coreTech: string[] = t("about.coreTech");

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t("about.title")}</h1>
      <p className="text-lg text-muted-foreground mb-6">
        {t("about.intro")}
      </p>
      <h2 className="text-2xl font-semibold mt-12 mb-4">{t("about.whatWeDoTitle")}</h2>
      <p className="text-muted-foreground mb-4">
        {t("about.whatWeDo")}
      </p>
      <h2 className="text-2xl font-semibold mt-12 mb-4">{t("about.coreTechTitle")}</h2>
      <ul className="list-disc pl-6 text-muted-foreground space-y-2">
        {coreTech.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-12 mb-4">{t("about.openSourceTitle")}</h2>
      <p className="text-muted-foreground">
        {t("about.openSource")}{" "}
        <a href="https://github.com/LawrenceLiang-BTC/atel-sdk" className="text-blue-400 hover:underline">GitHub</a> {t("about.and")}{" "}
        <a href="https://www.npmjs.com/package/@lawrenceliang-btc/atel-sdk" className="text-blue-400 hover:underline">npm</a>.
      </p>
    </main>
  );
}
