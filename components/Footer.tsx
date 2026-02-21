import { siteData } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-300/80 bg-[rgba(246,246,244,0.8)]">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <p className="text-sm leading-relaxed text-neutral-600">{siteData.footer.note}</p>
        <a href={`mailto:${siteData.footer.contactEmail}`} className="mt-4 block text-sm text-neutral-600 underline underline-offset-4">
          {siteData.footer.contactEmail}
        </a>
        <p className="mt-6 text-xs text-neutral-500">{siteData.footer.copyright}</p>
      </div>
    </footer>
  );
}
