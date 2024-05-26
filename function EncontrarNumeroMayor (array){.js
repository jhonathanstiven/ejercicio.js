function EncontrarNumeroMayor (array){
    if (array.length === 0){
      retur.undefined;
    }else{
      let maximo = array[0];
      for (let i = 1; i < array.length; i++ ){
        if (array[i]> maximo){
          maximo = array[i];
        }
        
      }
      return maximo;
    }
  }
   const numeros=[1,2,3,4,5,6,7,8,9,10,11,12,];
  const maximo = EncontrarNumeroMayor(numeros);
  console.log("el numero maximo es:", maximo )
  
  