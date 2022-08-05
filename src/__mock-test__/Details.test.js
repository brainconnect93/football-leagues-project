import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Details from '../components/Details';

describe('Leagues test', () => {
  test('leagues render correctly', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Details />
          </BrowserRouter>
        </Provider>,
      );
    expect(app).toMatchSnapshot();
  });
});
