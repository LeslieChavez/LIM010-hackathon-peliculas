const showallcontent = document.getElementById('show_all_movies')

  const urls = [
    'http://www.omdbapi.com/?t=roma&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=retablo&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=Pantale%C3%B3n%20y%20las%20visitadoras&apikey=6d654b44',
    'http://www.omdbapi.com/?t=machuca&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=no&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=y%20tu%20mam%C3%A1%20tambien&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=ruta%20de%20la%20luna&apikey=6d654b44',
    'http://www.omdbapi.com/?t=Viaje%20a%20Tombuct%C3%BA&apikey=6d654b44',
    'http://www.omdbapi.com/?t=irina&apikey=6d654b44',
    'http://www.omdbapi.com/?t=lucanamarca&apikey=6d654b44'
  ]
  const all = urls.map(url => fetch(url).then(response => response.json()));
Promise.all(all).then (results=>{

const mostrar = (results) => {
  let mostrar = ' ';
  for (let i = 0; i < results.length; i++) {
    mostrar += `
<img class= "poster"src = "${results[i].Poster}"/>`
}
 return mostrar;
};
showallcontent.innerHTML = mostrar(results); 
console.log(results)      
})               