fetch('http://localhost:8080/api/content')
.then(response => response.json())
.then(data => console.log(data));
