"use client";

import { Toast } from "@/providers/toast";
import { LazyMotion, domAnimation } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/services/queryClient";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <Toast />
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </LazyMotion>
  );
};

export default Providers;
