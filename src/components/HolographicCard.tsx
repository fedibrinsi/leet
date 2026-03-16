import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary' | 'accent';
  animated?: boolean;
  onClick?: () => void;
}

const HolographicCard = ({
  children,
  className,
  glowColor = 'primary',
  animated = false,
  onClick,
}: HolographicCardProps) => {
  const glowStyles = {
    primary: 'border-primary/30 hover:border-primary/60 hover:shadow-glow',
    secondary: 'border-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]',
    accent: 'border-accent/30 hover:border-accent/60 hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]',
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'relative rounded-xl border-2 bg-card/80 backdrop-blur-md',
        'transition-all duration-500 ease-out',
        glowStyles[glowColor],
        animated && 'animate-border-pulse',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {/* Holographic scanline effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px)',
          }}
        />
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/50 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/50 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/50 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/50 rounded-br-xl" />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default HolographicCard;
