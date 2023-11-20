// 1 . Anslut till JSON filen  - fetch synch await

async function addCvInfo() {
  const response = await fetch("cv.json");

  if (response.ok) {
    const cvInfo = await response.json();
    //Get the reference to the element inside the HTML document
    const profileName = document.getElementById("profileName");
    const cvSlogan = document.getElementById("sloganTitle");
    const skillsHeader = document.getElementById("skillsTitle");

    // Add the content to the HHTML page

    //CV Sidan
    profileName.textContent = cvInfo["Profile info"].name;
    cvSlogan.textContent = cvInfo["Profile info"].cvIntro;
    skillsHeader.textContent = cvInfo["skills"].skillsTitle;
  } else {
    console.log(`HTTP error message: ${response.status}`);
  }
}

addCvInfo();
