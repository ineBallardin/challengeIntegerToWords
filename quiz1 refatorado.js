const LESS_THAN_20 = ["", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"];
const TENS = ["", "Dez", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
const HUNDREDS = ["", "Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhentos", "Seiscentos", "Setecentos", "Oitocentos", "Novecentos"]
const THOUSANDS = ["", "Mil", "Milhão", "Bilhão"];
const THOUSANDS_PLURAL = ["", "Mil", "Milhões", "Bilhões"]

let numberToWords = (num) => {
    if(num === 0) {
        return 'Zero';
    }

    let thousandCounter = 0;
    let result = '';
    
    const singularExpression = () => {

        
        if(num % 100000 === 0) {
            result = `${numToString(num % 1000)}${THOUSANDS[thousandCounter]} ${result}`
        }
    }

    const pluralExpression = () => {
        if (num % 100000 !== 0) {
            result = `${numToString(num % 1000)}${THOUSANDS_PLURAL[thousandCounter]} ${result}`
        }
    }

    while(num > 0) {
        singularExpression()
        pluralExpression()

        num /= 1000;
        num = Math.trunc(num);
        thousandCounter++;
    }
    return result.trim();
}

let numToString = (num) => {
    return num === 0 ? '':
    num < 20 ? `${LESS_THAN_20[num]} ` :
    num < 100 ? `${TENS[Math.trunc(num / 10)]} ${numToString(num % 10)}` :
    num === 100 ? `${HUNDREDS[Math.trunc(num / 100)]} ${numToString(num % 100)}` :
    num >= 100 ? `${HUNDREDS[Math.trunc(num / 100)]} ${numToString(num % 100)}` :
    num > 100 && num < 200 ? `Cento e ${numToString(num % 100)}` :
    `${LESS_THAN_20[Math.trunc(num / 100)]} ${numToString(num % 100)}`
}

console.log(numberToWords(1223))