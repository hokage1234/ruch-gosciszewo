import React from 'react';

/**
 * =================================================================================
 * KOMPONENT LINKU ZEWNĘTRZNEGO
 * =================================================================================
 * Dlaczego używamy tego komponentu zamiast zwykłego <a>?
 * 1. Automatycznie dodaje `target="_blank"`, aby link otwierał się w nowej karcie.
 * 2. Automatycznie dodaje `rel="noopener noreferrer"` dla bezpieczeństwa i wydajności.
 * 3. Zapewnia spójność w całej aplikacji.
 *
 * UŻYCIE:
 * <ExternalLink href="https://google.com">Tekst linku</ExternalLink>
 * =================================================================================
 */

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className = '', ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 hover:opacity-80 transition-opacity ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;