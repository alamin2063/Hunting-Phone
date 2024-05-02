const loadPhone = async (searchText) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}
loadPhone();

const displayPhones = (phones)=>{
        
        const phoneContainer = document.getElementById('phoneContainer');
         //clear phone container card before adding new card
         phoneContainer.innerHTML = '';

        phones.forEach(phone => {
        console.log(phone);
        //create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-90 p-5 shadow-xl`;
        // Set inner html
        phoneCard.innerHTML = `<div class ="bg-sky-100 rounded-xl">
        <figure class="px-10 py-10 ">
        <div class = " rounded-xl px-4 py-1 border-dashed border-2 border-gray-400">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl  " />
        </div>
        </figure>
        </div>
        <div class="card-body items-center text-center">
        <h2 class="card-title font-bold text-2xl">${phone.phone_name}</h2>
        <p class = "text-">There are many variations of </br> passages of available, but the </br> majority have suffered</p>
        <h2 class="card-title font-bold text-2xl">$999</h2>
        <div class="card-actions">
        <button class="btn w-40 bg-blue-700 text-white text-center text-lg ">Show Details</button>
        </div>
        </div>`;
        // append to the container
        phoneContainer.appendChild(phoneCard);

       
    })

}

//handle search button
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
    
}