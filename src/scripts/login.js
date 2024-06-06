// Function to check cookies and update CSS
function checkCookiesAndUpdateCSS() {
  //console.log("hello");
  //console.log("Cookies:", document.cookie); // Log all cookies to check their names and values
  if (
    document.cookie.split(";").some((item) => item.trim().startsWith("l_i="))
  ) {
    //console.log("second hello"); // Log if the condition is met

    // Update CSS properties for elements with class "modal"
    var modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
      modal.style.display = "block";
    });

    // Update CSS properties for elements with class "modal"
    var usdBtn = document.querySelectorAll(".usd-btn");
    usdBtn.forEach(function (btn) {
      btn.style.display = "inline-block";
    });

    // Update CSS properties for elements with class "modal"
    var depBtn = document.querySelectorAll(".dep-btn");
    depBtn.forEach(function (btn) {
      btn.style.display = "inline-block";
    });

    // Update CSS properties for elements with class "modal"
    var loginBtn = document.querySelectorAll(".login-btn");
    loginBtn.forEach(function (btn) {
      btn.style.display = "none";
    });

    // Update CSS properties for elements with class "modal"
    var joinBtn = document.querySelectorAll(".join-btn");
    joinBtn.forEach(function (btn) {
      btn.style.display = "none";
    });

    // Update CSS property for elements with class "Menu--users"
    var menuUsers = document.querySelectorAll(".Menu--users");

    // Select the join_usd container
    var join_usd = document.querySelector(".join-usd-container");

    // Add mouseover event listener to show menuUsers
    join_usd.addEventListener("mouseover", function () {
      menuUsers.forEach(function (menu) {
        menu.style.display = "block";
      });
    });

    // Add mouseout event listener to hide menuUsers
    join_usd.addEventListener("mouseout", function () {
      menuUsers.forEach(function (menu) {
        menu.style.display = "none";
      });
    });

    let idGame;
    function getCookie() {
      var cookiesArray = document.cookie.split(";");

      for (var i = 0; i < cookiesArray.length; i++) {
        if (cookiesArray[i].includes("l_i=gameId=")) {
          var startIndex = cookiesArray[i].indexOf("id=") + 3;
          var endIndex = cookiesArray[i].length;
          idGame = cookiesArray[i].substring(startIndex, endIndex);
          break;
        } else if (cookiesArray[i].trim().startsWith("l_i")) {
          var valAr = cookiesArray[i].split("=");
          var cutval = decodeURIComponent(valAr[1]);
          const cArr = cutval.split("=");
          idGame = cArr[cArr.length - 1];
        }
      }
    }

    window.onload = getCookie();

    const userDetail = {};
    fetch("https://slotsparadise.com/common/getinfo?id=1&gameId=" + idGame, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        Object.entries(json).forEach((entry) => {
          const [key, value] = entry;
          userDetail[key] = value;
        });

        /* document.getElementById("userLast").innerHTML =
          userDetail.FirstName + " " + userDetail.LastName;
        document.getElementById("userFirst").innerHTML = userDetail.UserName;
        document.getElementById("userId").innerHTML = idGame;

        document.getElementById("userWagered").innerHTML =
          userDetail.PlayedBalance;

        document.getElementById("notWagered").innerHTML =
          userDetail.NotPlayedBalance;

        document.getElementById("playBalance").innerHTML = userDetail.Balance;

        document.getElementById("withBalance").innerHTML =
          userDetail.Withdrawable;
        document.getElementById("usd-btn").innerHTML = userDetail.Balance; */

        /***Mobile****/

        document.getElementById("userLastm").innerHTML =
          userDetail.FirstName + " " + userDetail.LastName;
        document.getElementById("userFirstm").innerHTML = userDetail.UserName;

        document.getElementById("userIdm").innerHTML = idGame;

        document.getElementById("userWageredm").innerHTML =
          userDetail.PlayedBalance;

        document.getElementById("notWageredm").innerHTML =
          userDetail.NotPlayedBalance;

        document.getElementById("playBalancem").innerHTML = userDetail.Balance;

        document.getElementById("currency_menu").innerHTML = userDetail.Balance;

        document.getElementById("withBalancem").innerHTML =
          userDetail.Withdrawable;
      });
  }
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", checkCookiesAndUpdateCSS);
