import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import NewHome from "./pages/NewHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import HowToPlay from "./pages/HowToPlay";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FairPlay from "./pages/FairPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import Matches from "./pages/Matches";
import CreateTeam from "./pages/CreateTeam";
import Leaderboard from "./pages/Leaderboard";
import MyTeams from "./pages/MyTeams";
import Profile from "./pages/Profile";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={NewHome} />
      <Route path={"/login"} component={Login} />
      <Route path={"/register"} component={Register} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/matches"} component={Matches} />
      <Route path={"/create-team/:matchId"} component={CreateTeam} />
      <Route path={"/leaderboard"} component={Leaderboard} />
      <Route path={"/my-teams"} component={MyTeams} />
      <Route path={"/profile"} component={Profile} />
      <Route path={"/about"} component={About} />
      <Route path={"/how-to-play"} component={HowToPlay} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/fair-play"} component={FairPlay} />
      <Route path={"/responsible-gaming"} component={ResponsibleGaming} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
