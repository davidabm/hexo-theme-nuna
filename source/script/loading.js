;(function () {
  window.onload = function () {
    var loadingBar = document.getElementsByClassName('loading-bar')[0]
    window.pageAccelerator && window.pageAccelerator({
      beforeLoading: function () {
        loadingBar.classList.add('isloading')
      },
      afterLoading: function () {
        loadingBar.classList.remove('isloading')
      }
    })
  }
}())

