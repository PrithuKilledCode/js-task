let username=localStorage.getItem('username');
let email=localStorage.getItem('email');
document.querySelector('h1').innerHTML=username
document.querySelector('h2').innerHTML=email

function getallProductsCategories(){
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
          .then(json=>{
            let categories=json.map(data=>data.category);
            var options="";
            let res=['all',...new Set(categories)];
            console.log(res)
      res.map((op,i)=>{
         options+=`<option value="${op}" id="${i}" style="border-radius: 5px;"">${op}</option>`
      })
      document.getElementById("categories").innerHTML=options;
          })

}


getallProductsCategories();
let chart='';
// window.addEventListener('load',()=>{
//   fetch('https://fakestoreapi.com/products')
//   .then(res=>res.json()).then((json)=>{
//     var productname=[];
//     var pricearr=[];
//     productname=
//   })
// })

const chartData=(op)=>{
  const ctx = document.getElementById('myChart').getContext('2d');
  // ctx.getContext('2d').clear();
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json()).then((json)=>{
              var productname=[];
              var pricearr=[];
              if(op==='all'){
                productname=json.map(data=>data.title);
                console.log(
                  productname
                )
                pricearr=json.map(data=>data.price);
              }
              else{
                productname=json.filter((data)=>data.category===op).map((data)=> data.title);
                pricearr=json.filter((data)=>data.category===op).map((data)=> data.price);
              }
           
              if(chart) chart.destroy();
              chart=new Chart(ctx, {
                type: document.querySelector('#charts').value,
                data: {
                  labels: productname,
                  datasets: [{
                    label: 'prices',
                    data: pricearr,
                    borderWidth: 1
                  }]
                },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }
              });
            })
  console.log(op+"default value kya hai");
  console.log(document.querySelector('#charts').value);
}
chartData(document.querySelector('#categories').value);
// const makeChart=()=>{
// // let type=  document.querySelector('#charts').value;
// //   console.log(type);
//  }