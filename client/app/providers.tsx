"use client";

import { customTheme } from "@/themes/theme";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CssVarsProvider theme={customTheme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </div>
  );
}
