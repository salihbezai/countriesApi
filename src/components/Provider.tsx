"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  PropsWithChildren } from "react";


  // Create a client for React Query
  const queryClient = new QueryClient();


const Provider = ({children}:PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default Provider