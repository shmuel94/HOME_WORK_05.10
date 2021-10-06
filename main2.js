const url = "https://jsonplaceholder.typicode.com/posts";
axios.get(url)
  .then(function (response) {
    // handle success
    console.log("got success");
    console.log(response);
    if (response.status === 200) {
        console.log(response.data);  
    }
  })
  .catch(function (error) {
    // handle error
    console.log("got error");
    console.log(error);
  })