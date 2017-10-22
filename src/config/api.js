const hosts = {
  dev: 'https://api.douban.com'
}

let api = {
  movie: {
    playList: {
      method: 'GET',
      url: '/v2/movie/in_theaters'
    },
    detail: {
      method: 'GET',
      url: '/v2/movie/subject/'
    }
  }
}

export default disposeUrl(api, hosts['dev'])

function disposeUrl(obj, prefix) {
  Object.keys(obj).forEach(v => {
    if (obj[v].url) {
      obj[v].url = prefix + obj[v].url
    } else {
      obj[v] = disposeUrl(obj[v], prefix)
    }
  })

  return obj
}
