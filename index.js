// Add your code here
// write a function called 'submitData'
  // take two strings as arguments
    // one representing a user's name
    // the other representing a user's email

    function submitData(userName, userEMail) {
      return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: userName,
          email: userEMail
        })
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        const body = document.querySelector('body');
        body.innerHTML = object.id;
      })
      .catch(function (error) {
        const body = document.querySelector('body');
        body.innerHTML = error.message;
      })
    }

    submitData();