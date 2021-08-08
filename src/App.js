import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';



import AllMeetupPages from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <Layout>
      <Switch>
    <Route path='/' exact component={AllMeetupPages}/>
    <Route path='/new-meetup' exact component={NewMeetupPage}/>
    <Route path='/favorites' exact component={FavoritesPage}/>
      </Switch>
    </Layout>
  );
}

export default App;
