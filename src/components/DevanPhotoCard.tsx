import React, { useState } from 'react';
import { Camera, Music, Sliders } from 'lucide-react';

interface DevanPhotoCardProps {
  type: 'piano' | 'studio';
  title: string;
  subtitle: string;
  badge: string;
  description: string;
}

export const DevanPhotoCard: React.FC<DevanPhotoCardProps> = ({
  type,
  title,
  subtitle,
  badge,
  description,
}) => {
  const [imgError, setImgError] = useState(false);

  const baseUrl = import.meta.env.BASE_URL;
  const customPhotoPath = `${baseUrl}assets/images/devan-${type}.jpg`;
  const illustrationPath = `${baseUrl}assets/images/${type}-illustration.svg`;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-2 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10">
      {/* Visual Image / Illustration Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-950">
        <img
          src={imgError ? illustrationPath : customPhotoPath}
          alt={title}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md border border-cyan-500/30">
          {type === 'piano' ? <Music className="h-3.5 w-3.5" /> : <Sliders className="h-3.5 w-3.5" />}
          <span>{badge}</span>
        </div>

        {/* Info hint on hover */}
        <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-lg bg-slate-900/90 px-3 py-1.5 text-xs text-slate-300 border border-slate-700/80 backdrop-blur-md">
            <Camera className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">Ready for your photo: <code className="text-cyan-300 font-mono">devan-{type}.jpg</code></span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {subtitle}
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
