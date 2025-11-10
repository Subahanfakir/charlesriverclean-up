// Temporary ambient declaration to satisfy TypeScript language service for
// the automatic React JSX runtime import path 'react/jsx-runtime'.
// This file provides minimal types so editors/tsserver stop reporting
// "module path 'react/jsx-runtime' to exist" (ts(2875)).

declare module 'react/jsx-runtime' {
  import * as React from 'react';

  // Minimal runtime helpers used by the JSX transform
  export function jsx(type: React.ElementType, props?: any, key?: any): React.ReactElement | null;
  export function jsxs(type: React.ElementType, props?: any, key?: any): React.ReactElement | null;
  export function jsxDEV(type: React.ElementType, props?: any, key?: any): React.ReactElement | null;

  // Fragment reference
  export const Fragment: typeof React.Fragment;

  // Allow default import if something requires it
  const _default: any;
  export default _default;
}
