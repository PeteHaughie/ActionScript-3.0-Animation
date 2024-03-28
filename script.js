document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('load', function() {
      if (this.contentDocument?.body === undefined || this.contentDocument?.body === null) return;
      this.before((this.contentDocument.body || this.contentDocument).children[0]);
      this.remove();
      document.querySelectorAll('[rel="homelink"]').forEach(link => {
        if (!location.hostname === "localhost") {
          link.href = "/ActionScript-3.0-Animation";
        }
      });
    });
  });
});