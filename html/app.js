function fetchFiles() {
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
      json => {
        console.log(json)
        const html = json.map(file => {
          return `<tr><td>${file.name}</td><td>${file.name}</td><td>${file.username}</td><td>${file.id}</td><td>${file.id}</td><td>${file.id}</td></tr>`
        }).join('')
        // console.log(html);
        document.querySelector('#tb').insertAdjacentHTML('beforeend', html);
        // displayFileRecord(json)
      })
    .catch(err => console.log(err))
}

function fetchUsers() {
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
      json => {
        console.log(json)
        const html = json.map(file => {
          return `<tr><td>${file.name}</td><td>${file.name}</td><td>${file.username}</td><td>${file.id}</td><td>${file.id}</td><td>${file.id}</td></tr>`
        }).join('')
        // console.log(html);
        document.querySelector('#tb').insertAdjacentHTML('beforeend', html);
        // displayFileRecord(json)
      })
    .catch(err => console.log(err))
}

function displayFileRecord(recObj) {
  // TODO: diplay file record using .map function
console.log("pop");
}
fetchFiles();
