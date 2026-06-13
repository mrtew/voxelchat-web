/* VoxelChat shared site script
   1) Mobile menu: close the dropdown after tapping a link
   2) Page-view counter: every load of every page counts one visit.
      Server side additionally enforces a 1-second-per-IP congestion
      guard, which no human browsing pattern ever hits. */
(function () {
  var API = 'https://api.voxelchat.app/api/statistics';

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        var t = document.getElementById('menu-t');
        if (t) t.checked = false;
      });
    });

    fetch(API + '/visit', { method: 'POST' }).catch(function () {});
  });
})();
