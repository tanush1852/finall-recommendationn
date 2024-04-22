import React from 'react';

const LinkClass = ({ className, href, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default LinkClass;