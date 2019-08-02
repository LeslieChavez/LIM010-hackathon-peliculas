const showallcontent = document.getElementById('show_all_movies')
const selectionYear =document.getElementById('selectionyears')
const search = document.getElementById('input_to_search')
const countrySelect= document.getElementById('country_selection')
const ordeSelection= document.getElementById('select-order')

  const urls = [
    'http://www.omdbapi.com/?t=roma&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=retablo&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=Pantale%C3%B3n%20y%20las%20visitadoras&apikey=6d654b44',
    'http://www.omdbapi.com/?t=machuca&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=no&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=y%20tu%20mam%C3%A1%20tambien&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=Viaje%20a%20Tombuct%C3%BA&apikey=6d654b44',
    'http://www.omdbapi.com/?t=caidos%20del%20cielo&apikey=69c2fdfb',
    'http://www.omdbapi.com/?i=tt0112340&apikey=69c2fdfb',
    'http://www.omdbapi.com/?i=tt0410316&apikey=69c2fdfb',
    'http://www.omdbapi.com/?i=tt1830761&apikey=69c2fdfb'
  ]
  const all = urls.map(url => fetch(url).then(response => response.json()));
Promise.all(all).then (results=>{

const showAll = (rest) => {
  let templatetoshow = ' ';
  for (let i = 0; i < rest.length; i++) {
    templatetoshow += `
<img class="poster" src = "${rest[i].Poster}"/>
<p>${rest[i].Title}</p>
<p>${rest[i].Year}</p>`
}
 return templatetoshow;
};
showallcontent.innerHTML = showAll(results); 
console.log(results)      
           
search.addEventListener('input',event=>{
  const searchmovie =(data, wanted)=>{
    return data.filter(obj=>obj.Title.toLowerCase().startsWith(wanted))
  }
  const moviewanted =searchmovie(results,event.target.value.toLowerCase())
  showallcontent.innerHTML= showAll(moviewanted)
})
countrySelect.addEventListener('change', () => {
  const filterWeakness = (data, weakness) => {
    return data.filter(obj => obj.Country.indexOf(weakness) > -1);
  };
  const countrywanted = filterWeakness(results, countrySelect.value);
  showallcontent.innerHTML = showAll(countrywanted);
});
ordeSelection.addEventListener('change', (event) => {
  const orderSelected = event.target.value;
  const orderFunction = (orderSelected, arrayofobjects) => {
    if (orderSelected === '0') {
      const ascOrder = arrayofobjects.sort((firstYear, secondYear) => firstYear.Year - secondYear.Year);
      return ascOrder;
    } else {
      const dscOrder = arrayofobjects.sort((firstYear, secondYear) => secondYear.Year - firstYear.Year);
      return dscOrder;
    }
  };
  const order = orderFunction(orderSelected, results);
  showallcontent.innerHTML = showAll(order);
});
});
