import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";

// Import redesigned pages
import NewHome from "./pages/NewHome";
import NewAbout from "./pages/NewAbout";
import NewHowItWorks from "./pages/NewHowItWorks";
import NewWhatWeDo from "./pages/NewWhatWeDo";
import NewWhyFree from "./pages/NewWhyFree";
import NewFAQ from "./pages/NewFAQ";
import NewContact from "./pages/NewContact";

// Import legal pages
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FairPlay from "./pages/FairPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";

function Router() {
  return (
    <Switch>
      {/* Main Pages */}
      <Route path={"/"} component={NewHome} />
      <Route path={"/about"} component={NewAbout} />
      <Route path={"/how-to-play"} component={NewHowItWorks} />
      <Route path={"/what-we-do"} component={NewWhatWeDo} />
      <Route path={"/why-free"} component={NewWhyFree} />
      <Route path={"/faq"} component={NewFAQ} />
      <Route path={"/contact"} component={NewContact} />
      
      {/* Legal Pages */}
      <Route path={"/terms"} component={Terms} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/fair-play"} component={FairPlay} />
      <Route path={"/responsible-gaming"} component={ResponsibleGaming} />
      
      {/* 404 */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <LanguageProvider>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
