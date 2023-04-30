import { PreloadedState } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import React, { ReactNode } from 'react';

interface WrapperHtmlProps {
  children: ReactNode;
  preloadedState: PreloadedState<RootState>;
}

const WrapperHtml: React.FC<WrapperHtmlProps> = ({ children, preloadedState }) => {
  return (
    <html>
      <head>
        <title>React components123</title>
      </head>
      <body>
        <div id="root">{children}</div>
        <script>window.__PRELOADED_STATE__ = 'state'</script>
      </body>
    </html>
  );
};
export default WrapperHtml;
