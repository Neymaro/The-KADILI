let maden,madenocagi,binalar,checker,demir,food,demirocagi,yemekhane,point,allpoints;const reducer=(accumulator,currentValue)=>accumulator+currentValue;maden=[0];demir=[0];food=[0];point=[0];binalar={kale:!1,cami:!1,duvar:!1,anabina:!1,}
let giveMe=function(type){let ver;ver=setInterval(function(){maden.push(3);demir.push(5);food.push(10);uiShow()},500)}
let uiShow=function(){allpoints=point.reduce(reducer);madenocagi=maden.reduce(reducer);yemekhane=food.reduce(reducer);demirocagi=demir.reduce(reducer);document.getElementById('odun').innerText=madenocagi;document.getElementById('silver').innerText=demirocagi;document.getElementById('food').innerText=yemekhane;document.getElementById('point').innerText=allpoints}
checker=function(){let pointer;pointer=point.reduce(reducer);if(binalar.kale==!0){point.push(15);document.getElementById('kale').innerText="Kale İnşa Edildi!";document.getElementById('kalebtn').style.visibility="hidden"}
else if(binalar.duvar==!0){point.push(10)}
else if(binalar.anabina==!0){point.push(25);document.getElementById('anabina').innerText="Anabina İnşa Edildi!";document.getElementById('anabtn').style.visibility="hidden"}
else if(binalar.cami==!0){point.push(100)}}
var insa=function(tip){todun=maden.reduce(reducer);tokun=food.reduce(reducer);tolun=demir.reduce(reducer);if(tip==1){if(todun>=100&&tokun>=200&&tolun>=150){if(binalar.anabina==!0){console.log("Maden Yeterli İnşaata Başlanıyor!");maden.splice(1,34);demir.splice(1,20);food.splice(1,20);alert("İnşaat Başladı!")
setTimeout(function(){binalar.kale=!0;document.getElementById('castlepht').style.visibility="visible";checker()},5000)}
else if(binalar.anabina==!1){alert("Önce Anabina'yı İnşa Etmelisin!")}}
else if(todun<100&&tokun<200&&tolun<150){alert("Madenin Yetiyor Mu ki fakir?!")}}
else if(tip==2){if(todun>=150&&tokun>=100&&tolun>=500){console.log("Duvar İnşaatına Başlanıyor!");maden.splice(1,20);demir.splice(1,25);food.splice(1,10);alert("İnşaat Başladı!")
setTimeout(function(){binalar.duvar=!0;document.getElementById('wall').style.visibility="visible";document.getElementById('duvarbtn').style.visibility="hidden";document.getElementById('duvar').innerText="Duvar İnşa Edildi!";checker()},5000)}
else{alert("Maden Yetersiz!")}}
else if(tip==3){if(todun>=50&&tokun>=50&&tolun>=50){console.log("Anabina İnşaatına Başlanıyor!");maden.splice(1,12);demir.splice(1,10);food.splice(1,5);alert("İnşaat Başladı!")
setTimeout(function(){binalar.anabina=!0;document.getElementById('ana').style.visibility="visible";checker()},5000)}
else{alert("Maden Yetersiz!")}}
else if(tip==4){if(binalar.anabina==!0&&binalar.duvar==!0&&binalar.kale==!0){if(todun>=500&&tokun>=500&&tolun>=500){console.log("Cami İnşaatına Başlanıyor!");maden.splice(1,180);demir.splice(1,150);food.splice(1,100);alert("İnşaat Başladı!")
setTimeout(function(){binalar.cami=!0;document.getElementById('cami').style.visibility="visible";document.getElementById('camibtn').style.visibility="hidden";document.getElementById('camii').innerText="Duvar İnşa Edildi!";checker()},5000)}
else{alert("Maden Yetersiz!")}}
else{alert("Tüm Binaların Yapılmış Olması Lazım!")}}}
giveMe()