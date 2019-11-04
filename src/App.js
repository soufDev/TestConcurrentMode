import React from 'react';
import Tabs from './components/Tabs';
import TabContent from './components/TabContent';
import { useTabReducer } from './components/store';
import Spinner from './components/Spinner';
import { Container, TabContainer } from './App.styled';

const Summary = React.lazy(() => import('./components/Summary'));
const Stats = React.lazy(() => import('./components/Stats'));
const Reviews = React.lazy(() => import('./components/Reviews'));

function App() {
  const { state: tabState } = useTabReducer();
  const { visibleTab } = tabState;
  return (
    <React.Suspense fallback={<Spinner />}>
      <Container>
        <Tabs />
        <TabContainer>
          <TabContent isVisible={visibleTab === 1}>
            <Summary />
          </TabContent>
          <TabContent isVisible={visibleTab === 2}>
            <Stats />
          </TabContent>
          <TabContent isVisible={visibleTab === 3}>
            <Reviews />
          </TabContent>
        </TabContainer>
      </Container>
    </React.Suspense>
  );
}

export default App;
