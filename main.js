const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}" id ="img">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;


    // Assuming `li`, `user`, and `img` are defined correctly

const img = li.querySelector('img');
let userDiv = null; // Define a variable to store the user info div

img.addEventListener('click', () => {
  if (!userDiv) {
    // User information does not exist, so add it
    userDiv = document.createElement('div');
    userDiv.className = 'user-info';
    li.innerHTML =''
    userDiv.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}" id ="img">
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
</div>
      <p>Gender: ${user.gender}</p>
      <p>Email: ${user.email}</p>
      <p>Age: ${user.dob.age}</p>
      <p>Phone-Number: ${user.phone}</p>
    `;
    li.appendChild(userDiv);
  } else {
    // Toggle the visibility of user information
    const display = userDiv.style.display === 'none' ? 'block' : 'none';
    userDiv.style.display = display;
  }
});



        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
