// 1 . Anslut till JSON filen  - fetch synch await

async function addCvInfo() {
  const response = await fetch("cv.json");

  if (response.ok) {
    const cvInfo = await response.json();
    //Get the reference to the element inside the HTML document
    const profileName = document.getElementById("profileName");
    const profileSlogan = document.getElementById("profileSlogan");
    //Create the H3 element
    //const profileNameInput = document.createElement("h3");

    // Add the content to the H3 element
    profileName.textContent = cvInfo.name;
    profileSlogan.textContent = cvInfo.profileText;
  } else {
    console.log(`HTTP error message: ${response.status}`);
  }
}

addCvInfo();
