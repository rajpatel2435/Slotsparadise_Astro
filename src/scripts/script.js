document.addEventListener('DOMContentLoaded', () => {
  const url = new URL(window.location.href);
  const currentPath = url.pathname.toLowerCase();
  const hasQParam = url.searchParams.has('q');

  // If '/the-beach/' is present without 'preview' or 'q' parameter, redirect to 404
  if (currentPath.includes('/the-beach/') && !url.searchParams.has('preview') && !hasQParam) {
    window.location.replace('https://slotsparadise.com/404/');
    return;
  }

  // Function to check if the current response is a 404
  const checkIf404 = async () => {
    const response = await fetch(window.location.href, { method: 'HEAD' });
    return response.status === 404;
  };

  // Only redirect if not already a 404 and the path starts with '/the-beach/news/'
  checkIf404().then(is404 => {
    if (!is404 && currentPath.startsWith('/the-beach/news/')) {
      window.location.href = currentPath.replace("/the-beach", "");
    }
  });
});


//balance updater script for shared header and footer
var BalanceUpdater = {
  PlayerId: 0,
  _intervalId: null,
  logOutCount: 0,
  _isRunning: false,

start: function () {
  if (this._isRunning)
      return;

  this._intervalId = setInterval(this.getBalanceAmount.bind(this), 10000);
  this._isRunning = true;
},

tryUpdateStatus: function () {
  var t = this;

  if (this._isRunning) {
      return;
  }

  if (t._intervalId) {
      clearTimeout(t._intervalId);
  }

  $.ajax({
      url: '/Common/GetLoginStatus',
      type: 'post',
      dataType: 'json',
      success: function (data) {
          if ((typeof regClicked === 'undefined' || !regClicked) && data && data.Reload == "Reload") {
              document.location.reload();
          } else {
              t._intervalId = setTimeout(t.tryUpdateStatus.bind(t), 20000);
          }
      }
  });
},

stop: function () {
  clearInterval(this._intervalId);
  this._isRunning = false;
},



// balance
getBalanceAmount: function () {
  if (this.PlayerId > 0) {

      var obj = {
          id: this.PlayerId,
          gameId: $('#ProductId').val() || 1
      };
      var data = $.param(obj);

      
      document.cookie = 'l_i=' + $.param({ gameId: obj.gameId, id: this.PlayerId }) + '; expires=' + moment().add(1, 'day').toDate().toString() + '; path=/;SameSite=Lax';

      if (this.logOutCount > 0) {
          data = $.param({});
          document.cookie = 'l_i=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }

      $.ajax({
          url: '/common/getinfo?' + data,
          type: 'post',
          dataType: 'json',
          success: this.onBalanceStatus.bind(this)
      });
  }
},

onBalanceStatus: function (data) {

  if (data.Balance) {
      this.logOutCount = 0;

      var $balanceViewer = $('#menu-button-balance');
      if ($balanceViewer.length) {
          $balanceViewer.text(' ' + data.Balance);;
      } else {
          $balanceViewer = $('.Play--Balance');
          $balanceViewer.text(' ' + data.Balance);
      }

      $('#menu-played-balance').text(' ' + data.PlayedBalance);
      $('#menu-notplayed-balance').text(' ' + data.NotPlayedBalance);
      $('#menu-withdrawable-balance').text(' ' + data.Withdrawable);
      $('#menu-play-balance').text(' ' + data.Balance);


  } else if (data.LogOut == "1") {
      this.logOutCount++;
      if (this.logOutCount <= 2) {
          this.getBalanceAmount();
      }
      if (this.logOutCount > 2) {
          document.location.reload();
      }
  }


  //desktop message

  $('.msg--count').remove();
  $('#msg--count').remove();
  if (data.InboxCount > 0) {
      var $messageViewer = $('.Button--messages .msg--holder');
      var $menuMessageViewer = $('#msg-row');

      if ($messageViewer.length) {
          $messageViewer.append('<span class="msg--count">' + data.InboxCount + '</span>');
          $menuMessageViewer.append('<span id="msg--count" class="msg--count">' + data.InboxCount + '</span>');
      } else {
          $menuMessageViewer.append('<span class="msg--count">' + data.InboxCount + '</span>');
      }
  } 
}
};