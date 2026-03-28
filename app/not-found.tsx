import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold font-mono text-foreground/20">404</h1>
        <p className="mt-4 text-xl text-muted-foreground">Page not found</p>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
