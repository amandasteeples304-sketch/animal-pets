const form = document.getElementById("form");

const myDatabaseDisplay = document.getElementById("databaseDisplay");

async function fetchTable() {
  const jsTable = await fetch(
    "https://assignment04-server.onrender.com/reviews",
  );
  const readableTable = await jsTable.json();

  return readableTable; // this array of data will now be able to be passed into another function below (to display the table array on our website)
}

// now we want to display the readableTable on or webpage
async function myTableDisplay() {
  const readableTableClone = await fetchTable();
  //console.log(readableTableClone); // check it has passed the array correctly
  readableTableClone.forEach((message) => {
    const myDiv = document.createElement("div");
    const gameName = document.createElement("p");
    const reviewContent = document.createElement("p");

    gameName.textContent = message.game;
    reviewContent.textContent = message.review;

    myDiv.append(gameName, reviewContent);
    myDatabaseDisplay.appendChild(myDiv);
  });
}

myTableDisplay(); // invoker

async function handleSubmit(e) {
  alert("Review Submitted! Thanks!");

  const rawFormData = new FormData(form);
  const jsFormData = Object.fromEntries(rawFormData);
  const jsonFormData = JSON.stringify(jsFormData);

  const serverPostResp = await fetch(
    "https://assignment04-server.onrender.com/reviews",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: jsonFormData,
    },
  );
  // window.location.reload() not sure what this is for ????
  const res = await serverPostResp.json();
  console.log(res); // remember we asked the server, when it receives a get/post request, to send the client back a console.log response displaying the BODY content of the data it just received. res.json({ message: req.body }); So it shows us the actual users inputted text (which we made the body in json format above)
}

form.addEventListener("submit", handleSubmit);
