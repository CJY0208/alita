import React from 'react';

/**
 * alita content
 *
 * ```typescript
 * <Page>
 *   <Footer></Footer>
 * </Page>
 * ```
 */
const Footer: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...reset }) => {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 9,
        display: 'block',
        order: '1',
        width: '100%',
      }}
      {...reset}
    >
      {children}
    </div>
  );
};

export default Footer;
