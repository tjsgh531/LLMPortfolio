import { Router as WouterRouter, Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";
import KrxPredictionDetail from "@/pages/KrxPredictionDetail";
import DocumentSummarizer from "@/pages/DocumentSummarizer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/krx-prediction" component={KrxPredictionDetail} />
      <Route path="/project/document-summarizer" component={DocumentSummarizer} />
      <Route path="/project/news-crawler" component={ProjectDetail} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base="/LLMPortfolio">
      <Router />
    </WouterRouter>
  );
}

export default App;
