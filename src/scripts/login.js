/* // Function to set a cookie
function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Usage: set an example cookie named "l_i" with value "gameId=1&id=104010" that expires in 1 day
setCookie("l_i", "gameId=1&id=104010", 1);



 // Function to delete a cookie
function deleteCookie(cookieName) {
    document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}

// Usage: delete the "l_i" cookie
deleteCookie("l_i");
 */

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
  }
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", checkCookiesAndUpdateCSS);
