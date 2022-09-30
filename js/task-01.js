const NumberOfCategories = document.querySelectorAll("ul#categories>li.item");
console.log(`Number of categories: ${NumberOfCategories.length}`);

const categoryOfItems = document.querySelectorAll("#categories>li")
    .forEach (el => {
        console.log(`Category: ${el.firstElementChild.textContent}`);
        console.log(`Elements: ${el.lastElementChild.children.length}`);
        
    });
