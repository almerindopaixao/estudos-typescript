import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((ac, value) => value * ac, 1);
};

export default _;
