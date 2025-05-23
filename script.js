const body = document.querySelector(".body");
const capitan = document.querySelector(".capitansCabinet");
const zagitaroi = document.querySelector(".ZaGitaroi");
const clown = document.querySelector(".box");
const loc2 = document.querySelector(".loc2");
const karta = document.querySelector(".kartochka");
const card = document.querySelector(".card");
const loc3 = document.querySelector(".loc3");
const loc4 = document.querySelector(".loc4");
const loc5 = document.querySelector(".sadgubka")

let doihaveid = 0;
let doihavegitara = 0



// Проверяем, что все элементы существуют
if (!body || !capitan || !zagitaroi || !clown || !loc2 || !karta || !card || !loc3) {
    console.error("Один из элементов не найден!");
} else {
    // Обработчик для капитана
    capitan.addEventListener("click", function() {
        doihaveid += 1;
        clown.style.left = "80%";

        setTimeout(() => {
            loc2.style.display = "block";
            body.style.display = "none";
        }, 2000);

        // Проверяем doihaveid и добавляем обработчик для zagitaroi
        if (doihaveid === 1) {
            zagitaroi.addEventListener("click", function() {
                body.style.display = "none";
                loc3.style.display = "block";
            });
        }
    });

    // Обработчик для карты (вынесен отдельно)
    karta.addEventListener("click", function() {
        alert("Ура, ты нашёл карточку капитана!");
        loc2.style.display = "none";
        body.style.display = "block";
        clown.style.top = "45%";
        clown.style.left = "50%";
        card.style.display = "block";
    });
}
//loc3//
let verno = document.querySelector(".verno")
let neverno = document.querySelector(".neverno")

verno.addEventListener("click", function(){
    alert("Да это правильно");
    doihavegitara += 1;
    loc3.style.display = "none";
    loc4.style.display = "block"
})
neverno.addEventListener("click", function(){
    alert("Неправильно")
    loc3.style.display = "none"
    body.style.display = "block"
})


//loc3//

//loc4//
    const captain = document.querySelector(".captain");
    let hp_cap = 100;
    let hp_clown = 100;
    const dmg_clown = 20;
    const dmg_captain = 30;

    const fight = document.querySelector(".fight")
    const attack = document.querySelector(".attack")

    const DELETEALL = document.querySelector(".deleteall")

    const hpclown = document.querySelector(".hpclow");
    const dmgclown = document.querySelector(".dmgclow");

    const hpcap = document.querySelector(".hpcap");
    const dmgcap = document.querySelector(".damagecap");

    fight.onclick = function(){
        
        

    function capattack(){
        hp_clown = hp_clown - dmg_captain
        hpclown.innerHTML = hp_clown
        if(hp_clown <= 0){
            alert("Капитан забрал твою гитару и кинул тебя в карцер")
            loc4.style.display = "none"
            clearInterval(interval)
            loc5.style.display = "block"
            
        }
    }
    let interval = setInterval(capattack, 4000)
    attack.addEventListener("click", function(){
        hp_cap = hp_cap - dmg_clown
        hpcap.innerHTML = hp_cap
       
        if(hp_cap <= 0){
            alert("Ура ты забрал свою гитару и захватил станцию")
            captain.style.opacity = "0%"
             clearInterval(interval)
            
        }

    }) 
    }
    
    
        
    
    dmgcap.innerHTML = dmg_captain
    dmgclown.innerHTML = dmg_clown
    
    

	
//loc4//