document.write(' Tyrell Blanken')
document.write('<br> klas: MBIAO20A5')

document.write('<br>')

document.write('<br>--------prijs per stuk--------');
document.write('<br> pizza small:€ 5');
document.write('<br> pizza medium:€ 7');
document.write('<br> pizza large:€ 9');

document.write('<br>')

var small = prompt ('voer hoeveel small pizzas u wilt ');
var medium = prompt ('voer hoeveel medium pizzas u wilt');
var large = prompt ('voer hoeveel large pizzas u wilt');

const priceSMALL = 5;
const priceMEDIUM = 7;
const priceLARGE = 9;

document.write('<br>--------u wilt totaal--------');

document.write("<br> u wilt " + small+ " small pizza's");
document.write("<br> u wilt " + medium+ " medium pizza's");
document.write("<br> u wilt " + large+ " large pizza's");

document.write('<br>')

var uitslagSMALL = small * priceSMALL;
var uitslagMEDIUM = medium * priceMEDIUM;
var uitslagLARGE = large * priceLARGE;
var totaal =  uitslagLARGE	+ uitslagMEDIUM	+ uitslagSMALL;					

document.write('<br>--------u totaal bedrag--------');
document.write('<br> small: 5 x ' + small+ '= €' + small * priceSMALL);
document.write('<br> medium: 7 x ' + medium+ '= €' + medium * priceMEDIUM);
document.write('<br> large: 9 x ' + large+ '= €' + large * priceLARGE);

document.write('<br>');

document.write('<br> totaal bedrag = €'+ totaal);

