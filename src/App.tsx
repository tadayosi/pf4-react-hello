import { Button, Page, PageSection } from '@patternfly/react-core';
import * as React from 'react';
import './App.css';


class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Page>
          <PageSection>
            <Button variant="primary">Hello</Button>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}

export default App;
