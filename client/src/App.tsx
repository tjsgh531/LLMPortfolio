import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";
import KrxPredictionDetail from "@/pages/KrxPredictionDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/news-crawler" component={ProjectDetail} />
      <Route path="/project/krx-prediction" component={KrxPredictionDetail} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
