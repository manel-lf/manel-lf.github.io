import React from 'react';

/* Inline text link: ink text on a hairline underline that both turn accent
   on hover. The only link treatment in body copy. */
export function TextLink({ children, href, mono = false, onClick, className = '', ...rest }) {
  const cls = `textLink${mono ? ' mono' : ''}${className ? ' ' + className : ''}`;
  if (!href) {
    return (
      <button type="button" className={cls} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }
  return (
    <a className={cls} href={href} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
