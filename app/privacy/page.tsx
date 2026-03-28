"use client";

import { useI18n } from "@/lib/i18n/context";

export default function PrivacyPage() {
  const { t } = useI18n();

  const sections: { title: string; content?: string; items?: string[] }[] = t("privacy.sections");

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t("privacy.title")}</h1>
      <p className="text-sm text-muted-foreground mb-12">{t("privacy.lastUpdated")}</p>

      {sections.map((section, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          {section.items ? (
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              {section.items.map((item, j) => (
                <li key={j}><span>{item}</span></li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground mb-4">
              {section.content}
              {i === sections.length - 1 && (
                <>{" "}<a href="https://x.com/atel_ai" className="text-blue-400 hover:underline">@atel_ai on X</a>.</>
              )}
            </p>
          )}
        </section>
      ))}
    </main>
  );
}
