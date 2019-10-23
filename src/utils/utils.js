const formatTime = (date, separator, choose) => {
  if (typeof date === 'number') {
    date = new Date(date)
  }
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  if (choose === 1) {
    return [year, month, day].map(formatNumber).join(separator)
  } else if (choose === 2) {
    return [hour, minute, second].map(formatNumber).join(separator)
  } else if (choose === 3) {
    return [year, month, day].map(formatNumber).join(separator) + ' ' + [hour, minute, second].map(formatNumber).join(':')
  } else if (choose === 4) {
    return `${year}年${month}月${day}日`
  }
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime
}
