(function () {
  if (document && window) {
    const footer = document.getElementById("site-footer");
    if (document.body.offsetHeight - footer.offsetHeight > window.innerHeight)
      footer.dataset.sticky = true;
  }
})();
