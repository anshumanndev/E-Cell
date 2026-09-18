import React from 'react';

interface IlluminateTextProps {
  children: React.ReactNode;
}

/**
 * Replaces the string "ILLUMINATE" in the text with the branded version
 * containing the flame image for the double "LL".
 */
export const IlluminateText: React.FC<IlluminateTextProps> = ({ children }) => {
  if (typeof children !== 'string') {
    return <>{children}</>;
  }

  const parts = children.split('ILLUMINATE');
  if (parts.length === 1) return <>{children}</>;

  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i !== parts.length - 1 && (
            <span className="inline-flex items-center">
              I
              <img 
                src="/images/illuminate-ll.png" 
                alt="LL" 
                className="h-[1.1em] w-auto object-contain inline-block mx-[0.05em] -translate-y-[0.05em]" 
              />
              UMINATE
            </span>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
