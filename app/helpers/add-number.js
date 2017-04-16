import Ember from 'ember';

const { Helper } = Ember;

export function addNumber([valueOne, valueTwo, ...rest], /*, hash*/) {
  return valueOne + valueTwo;
}

export default Helper.helper(addNumber);
