function hasAnyNot(arr, conditionFn) {
  return !arr.every(conditionFn);
}

// 사용 예
const arr = [2, 4, 6, 7];

const result = hasAnyNot(arr, n => n % 2 === 0);
console.log(result); // true (7이 짝수가 아님)

const fields = [
  { value: 'abc' },
  { value: '' },
  { value: '123' }
];

const hasEmpty = fields.some(f => !f.value);

if (hasEmpty) {
  console.log('입력 안 된 필드가 있습니다');
}