// Create a variable to hold your NFTs
const itemsNFT = [];

// Function addItemsNFT() to store data into itemsNFT
function addItemsNFT(name, height, weight, country){
    // Create an object to hold the metadata
    const itemDetailsNFT = {
        itemNameNFT: name,
        itemHeightNFT: height,
        itemWeightNFT: weight,
        itemCountryNFT: country
    };

    // Push the item data into the itemsNFT array
    itemsNFT.push(itemDetailsNFT);
}

// Function displayItemsNFT() to display data present in itemsNFT
function displayItemsNFT(){
    // Using a for loop to iterate through the array
    for(let i = 0; i < itemsNFT.length; i++){
        console.log("Item:", i + 1);
        console.log("Item name:", itemsNFT[i].itemNameNFT);
        console.log("Item height:", itemsNFT[i].itemHeightNFT, "cm");
        console.log("Item weight:", itemsNFT[i].itemWeightNFT, "kg");
        console.log("Item country:", itemsNFT[i].itemCountryNFT);
        console.log();
    }
}

// Function getTotalItemsNFT() to calculate the total number of items created in itemsNFT
function getTotalItemsNFT(){
    return itemsNFT.length;
}

// Calling addItemsNFT function to add items
addItemsNFT("Kerosene Tank", 55, 70, "India");
addItemsNFT("Diesel Tank", 60, 20, "China");

// Calling displayItemsNFT function to display the data
displayItemsNFT();

// Calling getTotalItemsNFT function to get the number of total items created
console.log("Total number of items created in itemsNFT:", getTotalItemsNFT());
