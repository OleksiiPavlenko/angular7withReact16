export interface IAction {
  type: string;
  value: string;
}

export function add(value: string = null): IAction {
  return {
    type: 'ADD_LETTER',
    value: value
  };
}
