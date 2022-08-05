import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import LeagueData from '../components/LeagueData';

describe('Main test', () => {
  it('leagues render correctly', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <LeagueData />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
