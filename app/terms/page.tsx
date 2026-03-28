"use client";

import { useI18n } from "@/lib/i18n/context";

export default function TermsPage() {
  const { t } = useI18n();

  const sections: { title: string; content: string; content2?: string }[] = t("terms.sections");

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t("terms.title")}</h1>
      <p className="text-sm text-muted-foreground mb-12">{t("terms.lastUpdated")}</p>

      {sections.map((section, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <p className="text-muted-foreground mb-4">
            {section.content}
            {i === sections.length - 1 && (
              <>{" "}<a href="https://x.com/atel_ai" className="text-blue-400 hover:underline">@atel_ai on X</a>.</>
            )}
          </p>
          {section.content2 && (
            <p className="text-muted-foreground mb-4">
              {section.content2}
            </p>
          )}
        </section>
      ))}
    </main>
  );
}
