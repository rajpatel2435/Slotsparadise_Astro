// Function to check cookies and update CSS
function checkCookiesAndUpdateCSS() {
  // Check if the specific cookie exists
  if (
    document.cookie.split(";").some((item) => item.trim().startsWith("l_i="))
  ) {
    // Update CSS properties for elements with class "modal"
    document
      .querySelectorAll(".modal")
      .forEach((modal) => (modal.style.display = "block"));
    document
      .querySelectorAll(".usd-btn, .dep-btn")
      .forEach((btn) => (btn.style.display = "inline-block"));
    document
      .querySelectorAll(".login-btn, .join-btn")
      .forEach((btn) => (btn.style.display = "none"));

    // Update CSS property for elements with class "Menu--users"
    const menuUsers = document.querySelectorAll(".Menu--users");

    // Select the join_usd container
    const join_usd = document.querySelector(".join-usd-container");

    // Add mouseover event listener to show menuUsers
    join_usd.addEventListener("mouseover", () => {
      menuUsers.forEach((menu) => (menu.style.display = "block"));
    });

    // Add mouseout event listener to hide menuUsers
    join_usd.addEventListener("mouseout", () => {
      menuUsers.forEach((menu) => (menu.style.display = "none"));
    });

    // Function to get the game ID from the cookie
    function getCookie() {
      const cookiesArray = document.cookie.split(";");
      let idGame = null;

      for (const cookie of cookiesArray) {
        if (cookie.includes("l_i=gameId=")) {
          idGame = cookie.split("id=")[1];
          break;
        } else if (cookie.trim().startsWith("l_i")) {
          const cutval = decodeURIComponent(cookie.split("=")[1]);
          const cArr = cutval.split("=");
          idGame = cArr[cArr.length - 1];
        }
      }

      //console.log("Game ID found:", idGame); // Debug log to check the ID
      return idGame;
    }

    const idGame = getCookie();

    if (idGame) {
      const userDetail = {};
      fetch(`https://slotsparadise.com/common/getinfo?id=1&gameId=${idGame}`, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((json) => {
          Object.entries(json).forEach(([key, value]) => {
            userDetail[key] = value;
          });

          //console.log("User Details:", userDetail); // Log the user details

          // Update the DOM with user details
          document.getElementById("currency_menu").innerHTML =
            userDetail.Balance;
          document.getElementById(
            "userLastm"
          ).innerHTML = `${userDetail.FirstName} ${userDetail.LastName}`;
          document.getElementById("userFirstm").innerHTML = userDetail.UserName;
          document.getElementById("userIdm").innerHTML = idGame;
          document.getElementById("userWageredm").innerHTML =
            userDetail.PlayedBalance;
          document.getElementById("notWageredm").innerHTML =
            userDetail.NotPlayedBalance;
          document.getElementById("playBalancem").innerHTML =
            userDetail.Balance;
          document.getElementById("withBalancem").innerHTML =
            userDetail.Withdrawable;
        })
        .catch((error) => {
          console.error("Error fetching user details:", error); // Log any fetch errors
        });
    } else {
      console.warn("Game ID not found in cookies."); // Warn if the game ID is not found
    }
  }
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", checkCookiesAndUpdateCSS);
