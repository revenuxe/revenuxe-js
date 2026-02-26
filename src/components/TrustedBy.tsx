const partners = [
  { name: "Lovable", logo: "https://asset.brandfetch.io/id20mQyGeY/idafl09fJz.png" },
  { name: "Bolt.new", logo: "https://asset.brandfetch.io/idW382nFcT/idgrCrOGDa.svg" },
  { name: "n8n", logo: "https://asset.brandfetch.io/idg9bYMXt2/idD-83csfT.svg" },
  { name: "Cursor", logo: "https://asset.brandfetch.io/idxEHMvGRF/idjjpN8jHE.svg" },
  { name: "Supabase", logo: "https://asset.brandfetch.io/idm2jnRNqn/id0mnxrjeD.svg" },
  { name: "Vercel", logo: "https://asset.brandfetch.io/idMk1oMGKS/id4fovt_AK.svg" },
];

const TrustedBy = () => {
  return (
    <section className="py-10 border-t border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest whitespace-nowrap">
            Platforms We Use
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {partners.map((partner) => (
              <img
                key={partner.name}
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-5 md:h-7 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
