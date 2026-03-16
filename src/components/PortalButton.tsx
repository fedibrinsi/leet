import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PortalButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const PortalButton = ({
  children,
  onClick,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
}: PortalButtonProps) => {
  const baseStyles = `
    relative font-orbitron font-semibold uppercase tracking-wider
    transition-all duration-300 ease-out
    border-2 rounded-lg
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-primary/20 to-primary/10
      border-primary/50 text-primary
      hover:border-primary hover:shadow-glow hover:bg-primary/20
      active:scale-95
    `,
    secondary: `
      bg-gradient-to-r from-secondary/20 to-secondary/10
      border-secondary/50 text-secondary
      hover:border-secondary hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]
      active:scale-95
    `,
    ghost: `
      bg-transparent border-muted-foreground/30 text-muted-foreground
      hover:border-primary/50 hover:text-primary
      active:scale-95
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
    </button>
  );
};

export default PortalButton;
