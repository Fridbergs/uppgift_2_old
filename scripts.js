async function getPersonalInfo() {
  let response = await fetch("cv.json");

  if (response.ok) {
    const profileInfo = await response.json();
    console.log(profileInfo);
  } else {
    console.log("vi har inte fått kontakt");
  }
}

getPersonalInfo();
console.log(fullName);

fetch("cv.json")
  .then((response) => response.json())
  .then((data) => {
    // Process the retrieved JSON data here
    console.log(cv);
  });
