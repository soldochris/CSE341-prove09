const renderIndex = (req, res) =>{
  res.render('index');
};

const renderCalculate = (req, res)=>{
  const newItem = {
    weight: req.body.weightItem,
    type: req.body.typeOfMail
  }

  function calculateRate(){
    switch(newItem.type) {
      case 'letters-stamped':
        if(newItem.weight == 1){
          return 0.55;
        }else if (newItem.weight == 2){
          return 0.75;
        }else if (newItem.weight == 3){
          return 0.95;
        }else if (newItem.weight == 3.5){
          return 1.15;
        }else{
          return 'not valid';
        }
        break;
      case 'letters-metered':
        if(newItem.weight == 1){
          return 0.51;
        }else if (newItem.weight == 2){
          return 0.71;
        }else if (newItem.weight == 3){
          return 0.91;
        }else if (newItem.weight == 3.5){
          return 1.11;
        }else{
          return 'not valid';
        }
        break;
      case 'large-envelopes':
        if(newItem.weight == 1){
          return 1.00;
        }else if (newItem.weight == 2){
          return 1.20;
        }else if (newItem.weight == 3){
          return 1.40;
        }else if (newItem.weight == 4){
          return 1.60;
        }else if (newItem.weight == 5){
          return 1.80;
        }else if (newItem.weight == 6){
          return 2.00;
        }else if (newItem.weight == 7){
          return 2.20;
        }else if (newItem.weight == 8){
          return 2.40;
        }else if (newItem.weight == 9){
          return 2.60;
        }else if (newItem.weight == 10){
          return 2.80;
        }else if (newItem.weight == 11){
          return 3.00;
        }else if (newItem.weight == 12){
          return 1.11;
        }else if (newItem.weight == 13){
          return 1.11;
        }else{
          return 'not valid';
        }
        break;
      case 'first-class':
        if (newItem.weight <= 4){
          return 4.00;
        }else if (newItem.weight <= 8){
          return 4.80;
        }else if (newItem.weight <= 12){
          return 5.50;
        }else if (newItem.weight == 13){
          return 6.25;
        }else{
          return 'not valid';
        }
        break;
      default:
        return 'not valid';
        break;
    }
  }

  const postage = calculateRate(); 

  console.log(postage);
  res.render('calculate',{postage});
};

module.exports = {
  renderIndex,
  renderCalculate
}