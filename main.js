const url = ''
async function getData(){
  const response = await fetch(url);
  const data = await response.json();
};
getData();
