import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'full' | 'compact';
}

export function Logo({ className, variant = 'full', ...props }: LogoProps) {
  const isCompact = variant === 'compact';

  return (
    <div className={className} {...props}>
      <Image
        src={isCompact ? '/compactLogo.png' : '/fullLogo.png'}
        alt="Veil-it Logo"
        width={isCompact ? 40 : 115}
        height={isCompact ? 40 : 38}
        priority
      />
    </div>
  );
}
