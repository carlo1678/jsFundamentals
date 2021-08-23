function postJournal() {
  const accessToken = localStorage.getItem("SessionToken");
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let entry = document.getElementById("entry").value;

  let newEntry = {
    journal: {
      title: title,
      date: date,
      entry: entry,
    },
  };

  fetch(`http://localhost:3000/journal/create`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    }),
    body: JSON.stringify(newEntry),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayMine();
    })
    .catch((err) => {
      console.error(err);
    });
}

function editJournal(postId) {
  console.log("editJournal Function Called");
}

function deleteJournal(postId) {
  console.log("deleteJournal Function Called");
}
