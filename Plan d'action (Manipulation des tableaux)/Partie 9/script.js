let prod = [
    { id: 1, nom: "Ordinateu", prix: 1200, stock: 5 },
    { id: 2, nom: "Souris", prix: 25, stock: 50 },
    { id: 3, nom: "Écran 27 pouces", prix: 350, stock: 12 }
];

let nambr=[10,1,2,3,4,8,7,9,5,6,4,4,4,7,78,89,9,5,5,6,6,5,58,8,9,9]

prod.push({ id: 4, nom: "Écran 27", prix: 350, stock: 12 });


let b= nambr.map((E)=>{ return E})
console.log(b);

let n=prod.find(e=>e.id==2)
 let tapl=prod.filter((f)=>f.id==2)
console.log(tapl);





prod.splice(0,1)
console.log(prod);
