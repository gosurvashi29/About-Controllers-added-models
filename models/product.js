const fs= require('fs');
const products=[];
const path = require('path');
const p= path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);
const getProductsFromFile=(cb)=>{
   
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            //return [];
            return cb([]);
        }
        //return JSON.parse(fileContent);
        cb(JSON.parse(fileContent));
    })
   //return products;

}
module.exports= class Product{
    constructor(t){

        this.title=t;
    }
save(){
    //products.push(this);
    getProductsFromFile(products=>{
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>
        {
            console.log(err);
        });

    });
    
}

static fetchAll(cb){

    getProductsFromFile(cb);

}
}