import { ArrowUpRight } from "lucide-react";

interface ShowcaseCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const ShowcaseCard = ({ title, description, image, url }: ShowcaseCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-[2.5rem] overflow-hidden card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-[2.5rem]">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-accent/80 text-accent-foreground">
              Web Store
            </span>
          </div>

          <div className="flex items-end justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-white text-lg md:text-xl font-bold leading-snug tracking-tight">
                {title}
              </h3>
              <p className="text-white/60 text-xs mt-1.5 line-clamp-2 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 floating-button w-10 h-10">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
};

export default ShowcaseCard;
