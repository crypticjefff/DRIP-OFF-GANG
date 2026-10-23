/// <reference types="vite/client" />
/// <reference types="react-router" />
/// <reference types="@shopify/oxygen-workers-types" />

import "react";

declare global {
  namespace React {
    interface ButtonHTMLAttributes<T> {
      commandfor?: string;
      command?: string;
    }
  }
}
