function getData(url){
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const tableBody = document.querySelector('#usersTable tbody');
            data.forEach(user => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                    <td>${user.company.name}</td>
                `;
                
                tableBody.appendChild(row);
            });
        })
        .catch((err) => console.log(err));
}

getData("https://jsonplaceholder.typicode.com/users");
