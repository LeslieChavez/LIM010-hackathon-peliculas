const showallcontent= document.getElementById('show_all_movies')
DataFetch = () => {
  const urls = [
    'http://www.omdbapi.com/?t=roma&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=retablo&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=Pantale%C3%B3n%20y%20las%20visitadoras&apikey=6d654b44',
    'http://www.omdbapi.com/?t=machuca&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=no&apikey=69c2fdfb',
    'http://www.omdbapi.com/?s=y%20tu%20mama%20tambien&apikey=69c2fdfb',
    'http://www.omdbapi.com/?s=estacion%20central&apikey=69c2fdfb',
    'http://www.omdbapi.com/?t=ruta%20de%20la%20luna&apikey=6d654b44',
    'http://www.omdbapi.com/?t=Viaje%20a%20Tombuct%C3%BA&apikey=6d654b44',
    'http://www.omdbapi.com/?t=irina&apikey=6d654b44',
    'http://www.omdbapi.com/?t=lucanamarca&apikey=6d654b44'
  ]
  const all = urls.map(url =>
    fetch(url).then(response => response.json())
  );
  return Promise.all(all);
};
const returninData =()=>{
DataFetch().then(arrayOfResponses =>
  console.log(arrayOfResponses))
const showMovies = (data) => {
  let template= '';
  for (let i = 0; i < data.length; i++) {
    template += `
      <div id="${data[i].Title}">
        <img src="${data[i].Poster}"/>
      <p>${data[i].Year}</p>
    </div>`;
  };
  return template;
};
showallcontent.innerHTML = showMovies(arrayOfResponses );
}