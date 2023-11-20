// 1 . Anslut till JSON filen  - fetch synch await

async function addCvInfo() {
  const response = await fetch("cv.json");

  if (response.ok) {
    const cvInfo = await response.json();
    //Get the reference to the element inside the HTML document
    const profileName = document.getElementById("profileName");
    const profileSlogan = document.getElementById("profileSlogan");

    // Add the content to the HHTML page
    //Home apge
    profileName.textContent = cvInfo["Profile info"].name;
    profileSlogan.textContent = cvInfo["Profile info"].profileText;
  } else {
    console.log(`HTTP error message: ${response.status}`);
  }
}

addCvInfo();
