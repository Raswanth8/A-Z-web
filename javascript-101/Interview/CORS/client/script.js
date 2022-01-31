fetch('http://localhost:3000/data',{
    method : 'GET',
    credentials : 'include'
})
.then(res => res.json())
.then(data => console.log(data))