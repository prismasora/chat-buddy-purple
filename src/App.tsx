import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ChatDetail from "./pages/ChatDetail";
import Templates from "./pages/Templates";
import AutoReply from "./pages/AutoReply";
import Staff from "./pages/Staff";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={
            <AppLayout><Dashboard /></AppLayout>
          } />
          <Route path="/chats" element={
            <AppLayout><Dashboard /></AppLayout>
          } />
          <Route path="/chats/:id" element={
            <AppLayout><ChatDetail /></AppLayout>
          } />
          <Route path="/templates" element={
            <AppLayout><Templates /></AppLayout>
          } />
          <Route path="/auto-reply" element={
            <AppLayout><AutoReply /></AppLayout>
          } />
          <Route path="/staff" element={
            <AppLayout><Staff /></AppLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
