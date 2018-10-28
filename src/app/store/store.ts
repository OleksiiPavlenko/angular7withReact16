import {createStore, Store} from 'redux';
import {reducer} from './reducers';
import {IAction} from './actions';

export class ReactStore {

  public store: Store<Array<string>>;

  constructor(values: Array<string>) {
    this.store = createStore(
      reducer,
      values,
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
  }

  dispatch(action: IAction) {
    this.store.dispatch(action);
  }
}
