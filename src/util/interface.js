import wepy from 'wepy'

let requestRemote = (url, type) => {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: url, // 仅为示例，并非真实的接口地址
      method: type,
      header: {
        'Content-Type': 'json'
      },
      success: function(res) {
        resolve(res)
      }
    })
  })
}

module.exports = {
  requestRemote
}
