fetch("https://www.balldontlie.io/api/v1/players")
.then((response) => {
    return response.json();

})
.then((data)=> {
    console.log(data);
});
