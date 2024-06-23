

/*
JSON Ready To Use

1 create a jason file with data

2 add propertis to it

3 and finaly put the content of it in html eleemnts

*/
let myRequest = new XMLHttpRequest();

myRequest.open("GET", "articles.json");

myRequest.send();

console.log(typeof myRequest);
myRequest.onreadystatechange = function () {
  //verifie if the request is finiched to the jason, file articles.json (this.readyState === 4) and if it successful (this.status === 200) this refer to myRequest
  if (this.readyState === 4 && this.status === 200) {
    try {
      const jsonData = JSON.parse(myRequest.responseText);

      // Assign the JSON data to a variable.
      const mainData = jsonData;
console.log(mainData)

// Add category: 'All' To Allobjects inside jason file
for(let i=0;i<mainData.length;i++) {
  mainData[i]["category"]="All";
  }

  console.log(mainData);
  const mainDataToServer=JSON.stringify(mainData);

  console.log(mainDataToServer)

  const mainDataToServerObject= JSON.parse(mainDataToServer)

  // Creating html elements to have all the jason file datain divcontainer > (div > content) * n

 //main contaner
const divContainer = document.createElement("div");

divContainer.classList.add("data");



for (let i = 0; i < mainDataToServerObject.length; i++) {
  // smal container inside main container that hasthe content of each article
  const innerDiv = document.createElement("div");

  // the content of each article
  // title
  const title = mainDataToServerObject[i]["article"]["title"];
  // author name
  const authorName = mainDataToServerObject[i]["authorName"];
  // content
  const content = mainDataToServerObject[i]["article"]["content"];
  // category
  const category = mainDataToServerObject[i]["category"];

  // Set the innerHTML property of the innerDiv element to the content that you want to add to it
  innerDiv.innerHTML = `
    <h2>${title}</h2>
    <p>${authorName}</p>
    <p>${content}</p>
    <p>${category}</p>
  `;

  // Append the innerDiv element to the divContainer element
  divContainer.appendChild(innerDiv);
}
document.body.appendChild(divContainer);

      // Do something with the articles variable.
    } catch (error) {
      // console.log(error);
    }
  }
};

/*End Assinement 1  */

/*<--------------------------------------------------------------------------------------------------------------------------------------------------------->  */

