import * as React from 'react';
import { SiGraphql } from 'react-icons/si';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProvideAuth } from './hooks/useAuth';

const Authenticate = React.lazy(async () => ({
  default: (await import('./components/Authenticate')).Authenticate,
}));

const NotFound = React.lazy(async () => ({
  default: (await import('./components/NotFound')).NotFound,
}));

const Dashboard = React.lazy(async () => ({
  default: (await import('./components/Dashboard')).Dashboard,
}));

import {
  GlobalStyle,
  Container,
  Navbar,
  NavLink,
  IconWrap,
  Heading,
  InnerLeftNav,
} from './App.style';

export const App = (): JSX.Element => {
  return (
    <ProvideAuth>
      <Router>
        <GlobalStyle />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Container>
            <Navbar>
              <InnerLeftNav>
                <IconWrap type='graphql'>
                  <SiGraphql className='animate__animated animate__rotateIn' />
                </IconWrap>
                <Link to='/'>
                  <Heading>AUTHENICATION WITH GRAPHQL / MONGO</Heading>
                </Link>
              </InnerLeftNav>
            </Navbar>
            <Routes>
              <Route path='/' element={<Authenticate />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Container>
        </React.Suspense>
      </Router>
    </ProvideAuth>
  );
};
