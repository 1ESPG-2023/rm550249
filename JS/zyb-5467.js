// const liElementHtml = document.getElementsByTagName("li");
// const liElementArray = [...liElementHtml];

// // for (let index = 0; index < liElement.length; index++) {
// //     console.log(liElement[index].textContent)
    
// // }
// // console.log(liElement.length)

// //Objetos são formados por propriedades (innerHTML - formata tags) (innerText - formata textos)



// //Declaração de ARRAYS
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// //let nr3 = nr1 + nr2;
// //Espalhar o array com SPREAD [...]
// let nr3 = [nr1,nr2];

// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);


// //Listando um array! Técnica especial
// nr3.forEach((itemDoArray)=> {
//     console.log(`Array-3 sendo listado ${itemDoArray}`);
// })
// nr3.map((numero, key)=>{
//     console.log(`${(key+1)} - Itens do array - ${numero}`);
//    numero.forEach((digitos)=>
//         console.log(digitos)
//     );
// })   
// console.log(liElementArray)
// liElementArray.map((item,key)=>{
//     if(item.textContent == "item-39"){
//         console.log(`${key+1} - ${item.textContent}`)  
//     }
    
// // })
// function soma(p1, p2, p3){
// nr1 = p1;
//  nr2 = p2;


// // return (parseInt(nr1) + parseInt(nr2) + parseInt(p3))

// // // console.log(`Resultado: ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`);
// // // console.log(`Este é o parâmetro que foi passado: ${parametro}`)
// // }


// //ARROW FUNCTION
// const mudaCor = ()=>{

//     //FUNÇÃO SET-TIME-OUT
//     setTimeout(alert("Executou"),5000);
// }
// mudaCor();
let tmp = ""
function mudaCor(){
    let r = "";
    let g = "";
    let b = "";
    //random = Gera números aleatórios entre 0 e 1
    //ceil, floor e round que arredondam o número para cima, para baixo ou aleatóriamente.
    
    //determinando para a variável r um valor entre 0 e 255
    
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    
    const cabecalho = document.querySelector(".cabecalho")
    cabecalho.setAttribute("style", `background-color:rgb(${r},${g},${b})`)
    tmp = setTimeout(mudaCor, 150)
}
mudaCor();