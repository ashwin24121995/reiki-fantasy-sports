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
import About from "./pages/About";
import NewHowItWorks from "./pages/NewHowItWorks";
import NewWhatWeDo from "./pages/NewWhatWeDo";
import NewWhyFree from "./pages/NewWhyFree";
import FAQ from "./pages/FAQ";
import NewContact from "./pages/NewContact";

// Import legal pages
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FairPlay from "./pages/FairPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";

// Import core application pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Matches from "./pages/Matches";
import CreateTeam from "./pages/CreateTeam";
import MyTeams from "./pages/MyTeams";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";

function Router() {
  return (
    <Switch>
      {/* Main Pages */}
      <Route path={"/"} component={NewHome} />
      <Route path={"/about"} component={About} />
      <Route path={"/how-to-play"} component={NewHowItWorks} />
      <Route path={"/what-we-do"} component={NewWhatWeDo} />
      <Route path={"/why-free"} component={NewWhyFree} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/contact"} component={NewContact} />
      
      {/* Legal Pages */}
      <Route path={"/terms"} component={Terms} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/fair-play"} component={FairPlay} />
      <Route path={"/responsible-gaming"} component={ResponsibleGaming} />
      
      {/* Authentication */}
      <Route path={"/login"} component={Login} />
      <Route path={"/register"} component={Register} />
      
      {/* Core Application Pages */}
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/matches"} component={Matches} />
      <Route path={"/create-team/:matchId"} component={CreateTeam} />
      <Route path={"/my-teams"} component={MyTeams} />
      <Route path={"/leaderboard"} component={Leaderboard} />
      <Route path={"/profile"} component={Profile} />
      
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
