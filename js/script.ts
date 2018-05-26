class Location {
  constructor(public titel, public city, public zipcode, public address, public image, public visitDate){
  }

 render(){
    var row = document.getElementById("row1"); 
    var containerDiv = document.createElement("div");
    containerDiv.classList.add("col-lg-3");
    containerDiv.classList.add("col-md-6");
    containerDiv.classList.add("col-sm-12");
    containerDiv.classList.add("col-xs-12");
    containerDiv.classList.add("card");
    row.appendChild(containerDiv);

    var imgdiv = document.createElement("div");
    var img = document.createElement("img");
    imgdiv.append(img);
    $(img).attr("src", this.image);
    $(img).addClass("card-img-top");
    $(containerDiv).append(imgdiv);

    var cardTitel = document.createElement("h4");
    $(cardTitel).text(this.titel);
    $(cardTitel).addClass("card-titel");
    $(containerDiv).append(cardTitel);
    $(containerDiv).append(`<p> ${this.address} </p>`);
    $(containerDiv).append(`<p> ${this.zipcode} ${this.city} </p>`);
    $(containerDiv).append(`<p> Created: ${this.visitDate}`);
  }

}

 
 class Restaurant extends Location {

  constructor(titel, city, zipcode, address, image, visitDate, telephone, type, web){
    super(titel, city, zipcode, address, image, visitDate);
    this.telephone = telephone;
    this.type = type;
    this.web = web;
  }
render(){
    var row = document.getElementById("row1"); 
    var containerDiv = document.createElement("div");
    containerDiv.classList.add("col-lg-3");
    containerDiv.classList.add("col-md-6");
    containerDiv.classList.add("col-sm-12");
    containerDiv.classList.add("col-xs-12");
    containerDiv.classList.add("card");
    row.appendChild(containerDiv);

    var imgdiv = document.createElement("div");
    var img = document.createElement("img");
    imgdiv.append(img);
    $(img).attr("src", this.image);
    $(img).addClass("card-img-top");
    $(containerDiv).append(imgdiv);

    var cardTitel = document.createElement("h4");
    $(cardTitel).text(this.titel);
    $(cardTitel).addClass("card-titel");
    $(containerDiv).append(cardTitel);
    $(containerDiv).append(`<p> ${this.type} </p>`);
    $(containerDiv).append(`<p> ${this.address} </p>`);
    $(containerDiv).append(`<p> ${this.zipcode} ${this.city} </p>`);
    $(containerDiv).append(`<p> Phonenumber: ${this.telephone} </p>`);
    $(containerDiv).append(`<p> Web: <a href="${this.web}">${this.web}</a> </p>`);
    $(containerDiv).append(`<p> Created: ${this.visitDate}`);
  }
  
}



  class Event extends Location {
    constructor(titel, city, zipcode, address, image, visitDate, date, time, ticket){
       super(titel, city, zipcode, address, image, visitDate);
       this.date = date;
       this.time = time;
       this.ticket = ticket;
    }
render(){
    var row = document.getElementById("row1"); 
    var containerDiv = document.createElement("div");
    containerDiv.classList.add("col-lg-3");
    containerDiv.classList.add("col-md-6");
    containerDiv.classList.add("col-sm-12");
    containerDiv.classList.add("col-xs-12");
    containerDiv.classList.add("card");
    row.appendChild(containerDiv);

    var imgdiv = document.createElement("div");
    var img = document.createElement("img");
    imgdiv.append(img);
    $(img).attr("src", this.image);
    $(img).addClass("card-img-top");
    $(containerDiv).append(imgdiv);

    var cardTitel = document.createElement("h4");
    $(cardTitel).text(this.titel);
    $(cardTitel).addClass("card-titel");
    $(containerDiv).append(cardTitel);
    $(containerDiv).append(`<p>Date: ${this.date}</p>`);
    $(containerDiv).append(`<p>Time: ${this.time}</p>`);
    $(containerDiv).append(`<p> ${this.address} </p>`);
    $(containerDiv).append(`<p> ${this.zipcode} ${this.city} </p>`);
    $(containerDiv).append(`<p> Ticket Price: ${this.ticket} </p>`);
    $(containerDiv).append(`<p> Created: ${this.visitDate}`);
  }
 
}

 
  let karl = new Location ("St. Charles Church", "Vienna", 1010, "Karslplatz 1", "img/kirche.png", new Date("8/9/2018 15:30"));
  let zoo = new Location ("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.png", new Date("5/20/2018 15:30"));
  let lemon = new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "img/lemon.png",new Date("12/5/2017 17:30"), "+43(1)5812308", "Thai Cuisine", "www.lemonleaf.at");
  let sixta = new Restaurant ("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.png", new Date("10/3/2018 17:30"), "+43 1 58 528 56", "Viennese Cuisine", "http://www.sixta-restaurant.at");
  let kris = new Event ("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/kris.png", new Date("6/5/2017 17:30"), "Friday, 15. Jun.", "20:00", "58,50 EUR");
  let lenny = new Event ("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/lenny.png", new Date("3/5/2018 17:30"), "Saturday, 09.06.2018", "19:30", "47,80 EUR");
  
  let travel = [];
  travel.push(karl, zoo, lemon, sixta, kris, lenny);

  for(i=0;i<travel.length; i++){
    travel[i].render();
  };


 
//try of sorting within one array  - something is missing.. 

// travel.sort(function asc (a,b){
//   var x = new Date(a.visitDate), var y = new Date(b.visitDate);
//   return x-y;
// });

// travel.sort(function des (a,b){
//   var x = new Date(a.visistDate), var y = new Date(b.visitDate);
//   return y-x;
// });
 
