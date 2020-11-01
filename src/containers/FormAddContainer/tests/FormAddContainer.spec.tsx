import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { enableFetchMocks } from 'jest-fetch-mock';
import FormAddContainer from '../FormAddContainer';
import { initialState } from '../../../store/reducers/reducer';
import { fetchAddMovie } from '../../../store/actions/actions';

enableFetchMocks();

jest.mock('../../../store/actions/actions', () => {
  return {
    fetchAddMovie: jest.fn(() => () => ({})),
  };
});

describe('FormAddContainer', () => {
  const store = configureStore([thunk])(initialState);
  const handleToggleVisibility = jest.fn();
  const container = (
    <Provider store={store}>
      <FormAddContainer visibility handleToggleVisibility={handleToggleVisibility} />
    </Provider>
  );
  Enzyme.configure({ adapter: new Adapter() });

  it('should render correctly', () => {
    const form = renderer.create(container).toJSON();

    expect(form).toMatchSnapshot();
  });

  it('should dispatch fetchAddMovie action when form submitted', () => {
    const form = mount(container).find('Formik');
    const mockValues = {
      title: 'Title',
      release_date: '1.01.2020',
      poster_path: 'path',
      genres: ['Genre'],
      overview: 'Overview',
      runtime: 123,
    };

    form.props().onSubmit(mockValues as any);

    expect(fetchAddMovie).toHaveBeenCalledWith(mockValues);
  });
});
