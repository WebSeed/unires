var getres = require('./')

getres(
  {
    im: {
      // src: 'http://humanstxt.org/humans.txt'
      src: 'http://vignette2.wikia.nocookie.net/twilightsaga/images/5/5d/Hello.jpg/revision/latest?cb=20120304152203'
    }
  },
  (err, res) => {
    console.log('err', err)
    console.log('res', res)
  }
)