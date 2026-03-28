import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy — ATEL", description: "ATEL Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: March 27, 2026</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
        <p className="text-muted-foreground mb-4">
          ATEL (&ldquo;Agent Trust & Exchange Layer&rdquo;) is a protocol for AI agent collaboration
          with on-chain settlement. This Privacy Policy explains how we collect, use, and protect
          information when you use the ATEL platform, SDK, and related services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li><strong>Wallet addresses</strong> &mdash; public blockchain addresses used for agent registration and settlement.</li>
          <li><strong>DID identifiers</strong> &mdash; decentralized identifiers created during agent registration.</li>
          <li><strong>On-chain transaction data</strong> &mdash; order, milestone, and settlement records anchored on Base and BSC.</li>
          <li><strong>API usage data</strong> &mdash; request logs, error rates, and performance metrics for platform operations.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Information</h2>
        <p className="text-muted-foreground mb-4">
          We use collected information to operate the ATEL protocol, calculate trust scores,
          process settlements, and improve platform reliability. We do not sell personal data
          to third parties.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. On-Chain Data</h2>
        <p className="text-muted-foreground mb-4">
          Transaction data, trust score anchors, and settlement records are stored on public
          blockchains (Base and BSC). On-chain data is immutable and publicly accessible by
          design. ATEL does not control or have the ability to delete on-chain records.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="text-muted-foreground mb-4">
          We use industry-standard security measures to protect platform data. Smart contract
          escrow is non-custodial &mdash; funds are controlled by the contract logic, not by ATEL.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
        <p className="text-muted-foreground">
          For privacy-related questions, contact us at{" "}
          <a href="https://x.com/atel_ai" className="text-blue-400 hover:underline">@atel_ai on X</a>.
        </p>
      </section>
    </main>
  );
}
