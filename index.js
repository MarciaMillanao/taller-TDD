const containerRoot = document.getElementById('root-row');
const selectHouse = document.getElementById('house');

// const showData = (DATA) => {
//     // string vacio donde concatenaremos el innerHTML
//     let result = '';

//     // recorro la data
//     DATA.forEach(element => {

//       if (element.house === '' && element.patronus === '') {
//         result = containerRoot.innerHTML += `
//         <div class="card">
//           <div class="box">
//             <div class="img">
//                 <img src="${element.image}">
//             </div>
//             <h2>${element.name}<br><span>No Aplica</span></h2>
//             <p>Patronus: No Aplica</p>
//           </div>
//         </div>`
//       } 
      
//       else if (element.patronus === '' && element.house !== '') {
//         result = containerRoot.innerHTML += `
//         <div class="card">
//           <div class="box">
//             <div class="img">
//                 <img src="${element.image}">
//             </div>
//             <h2>${element.name}<br><span>${element.house}</span></h2>
//             <p>Patronus: No Aplica</p>
//           </div>
//         </div>`
//       }
      
//       else if (element.patronus !== '' && element.house === '') {
//         result = containerRoot.innerHTML += `
//         <div class="card">
//           <div class="box">
//             <div class="img">
//                 <img src="${element.image}">
//             </div>
//             <h2>${element.name}<br><span>No Aplica</span></h2>
//             <p>Patronus: ${element.patronus}</p>
//           </div>
//         </div>`
//       } 
      
//       else {
//         result = containerRoot.innerHTML += `
//         <div class="card">
//           <div class="box">
//             <div class="img">
//                 <img src="${element.image}">
//             </div>
//             <h2>${element.name}<br><span>${element.house}</span></h2>
//             <p>Patronus: ${element.patronus}</p>
//           </div>
//         </div>`
//       }
//     });
//     return result;
//   }

  // filtro DOM
  selectHouse.addEventListener('change', () => {
    let condition = selectHouse.options[selectHouse.selectedIndex].text;
    console.log(condition);
  
    let filtered = filterHouse(DATA, condition);
    containerRoot.innerHTML = '';

    filtered.forEach(element => {
      containerRoot.innerHTML += `
      <div class="col-sm-12 col-md-6 col-lg-2">
      <div class="card">
        <div class="box">
          <div class="img">
              <img src="${element.image}">
          </div>
          <h5>${element.name}<br><span>${element.house}</span></h5>
        </div>
      </div>
      </div>`
    })
  })

  // window.onload = showData(DATA);