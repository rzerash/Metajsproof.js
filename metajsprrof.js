const NFTsarray = [];

function mintNFT(_name, _eyecolor, _shirtType, _geanscolor) {
  const NFTobject = {
    name: _name,
    eyecolor: _eyecolor,
    shirtType: _shirtType,
    geanscolor: _geanscolor,
  };
  NFTsarray.push(NFTobject);
  console.log("Person's name: " + _name);
}

function listNFTs() {
  for (let i = 0; i < NFTsarray.length; i++) {
    console.log("\nNo. " + (i + 1));
    console.log("Name: " + NFTsarray[i].name);
    console.log("Eye color: " + NFTsarray[i].eyecolor);
    console.log("Shirt Type: " + NFTsarray[i].shirtType);
    console.log("Geans color: " + NFTsarray[i].geanscolor);
  }
}

function getTotalSupply() {
  console.log("\nTotal Supply =" + NFTsarray.length);
}

mintNFT("Raushan", "Brown", "Hoodie", "Gray");
mintNFT("Ankit", "Green", "JACKET", "Black");
mintNFT("Hrishikesh", "Black", "Formal White Shirt", "Blue");

listNFTs();
getTotalSupply();