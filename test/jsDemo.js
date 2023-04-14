function sum(a, b) {
  return a + b
}

const result = sum(2, 3)

if (result > 10)
  console.warn('Result is too large!')

const arr = [1, 2, 3]
arr.forEach(num => num + 1) // 缺少显式的返回值
