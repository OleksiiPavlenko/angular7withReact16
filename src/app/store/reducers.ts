import { IAction } from './actions';

export function reducer(state: Array<string>, action: IAction) {

  switch (action.type) {
    case 'ADD_LETTER':
      return  state.concat(action.value);
   default:
      return state;
  }
}
