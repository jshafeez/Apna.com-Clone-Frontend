import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // In a real app, we would use router navigation here
    console.log(`Navigating to: ${href}`);
  };

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      {...props}
    >
      {children}
    </a>
  );
};