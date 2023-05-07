var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","m-3");


// var nametype=document.createElement("div");
// nametype.style.margin="32px";
// nametype.style.fontFamily="Arial";

container.append(row);


async function car(){
var res= await fetch("https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com")
var res1=await res.json()
console.log(res1)
carsdetails()

}
async function carsdetails(){
  let result=await fetch("https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com")
  let result1=await result.json()
  try{
    for(var i=0;i<result1.length;i++){
        row.innerHTML+=`
        <div class="col-md-4 file1" >
        <div class="card border-primary mb-3 file2 " style="width: 18rem;">
        <img src="" class="card-img-top" alt="">
          <div class="card-body">
          <h3 class="card-titles">Cars</h3>
          <p class="card-text">Codigo: ${result1[i].codigo}<br> Name:${result1[i].nome}</p>
        </div>
      </div>
      </div>`;

      document.body.append(container);


        }    
    }
    catch (err){
      console.log(err)
    }
}


car()