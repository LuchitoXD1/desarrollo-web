

class country {
  constructor ( pais ){
this.flag= pais.flags.svg;
this.name= pais.name;
this.region= pais.region;
console.log(pais.name);
  }

  

}

const getCountry = async ( name ) => {
    const uri =  `https://restcountries.com/v3.1/name/${name}`;
    const resp = await fetch(uri);
    const data = await resp.json();
   
   let pais = new country ( data[0]);
    
   
   document.getElementById('pais_name').innerHTML = pais.name.common;
   document.getElementById('pais_region').innerHTML= pais.region;
   document.getElementById('pais_flag').src=pais.flag;
   console.log(pais);
}

const $btn_search = document.getElementById('btn_search');
$btn_search.addEventListener('click', ()=>{

 const $pais_input= document.getElementById('pais_input')
getCountry($pais_input.value);





})











    getCountry('germany'); 



