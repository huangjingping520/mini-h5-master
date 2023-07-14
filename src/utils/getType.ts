export const getType = () => {
  const userAgent = navigator.userAgent
  console.log(userAgent)

  if (userAgent.match(/iphone/i)) {
    return 'Iphone'
  } else if (userAgent.match(/huawei/i)) {
    return 'Huawei'
  } else {
    return 'qita'
  }

}
