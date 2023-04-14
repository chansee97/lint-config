interface IUserInfo {
  name: string
  age: number
}

function getUserInfo(): IUserInfo {
  const userInfo = {
    name: 'Alice',
    age: 18,
  }

  return userInfo
}

const userInfo = getUserInfo()

if (userInfo.age < 18)
  console.warn('Underage user detected!')

const arr = [1, 2, 3]
arr.forEach(num => num + 1) // 缺少显式的返回值
