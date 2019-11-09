import React from "react";
import Tabs from "./components/Tabs";
import TabContent from "./components/TabContent";
import { useTabReducer } from "./components/store";
import Spinner from "./components/Spinner";
import { Container, TabContainer } from "./App.styled";

const Summary = React.lazy(() => import("./components/Summary"));
const Stats = React.lazy(() => import("./components/Stats"));
const Reviews = React.lazy(() => import("./components/Reviews"));

function App() {
  const { state: tabState } = useTabReducer();
  const { visibleTab } = tabState;
  return (
    <Container>
      <React.Suspense fallback={<Spinner />}>
        <Tabs />
        <TabContainer>
          <TabContent isVisible={visibleTab === 1}>
            <Summary />
          </TabContent>
          <TabContent isVisible={visibleTab === 2}>
            <Stats />
          </TabContent>
          <TabContent isVisible={visibleTab === 3}>
            {[1, 2, 3].map(reviewId => (
              <Reviews id={reviewId} key={reviewId} />
            ))}
          </TabContent>
        </TabContainer>
      </React.Suspense>
    </Container>
  );
}

export default App;
