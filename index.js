var fs = require('fs')

var text = fs.readFileSync('test.txt', 'utf8') // zadati tekst za ciframa 1-9 , u pravilnom rasporedu
var text1 = fs.readFileSync('test1.txt', 'utf8') // nasumicne cifre

var numbers = [1,2,3,4,5,6,7,8,9] // moguce cifre

function getNumbers(text){
    var rows = text.split(/\n/g) // citanje txt fajla po redovima

    var row1 = rows[0]
    var row2 = rows[1]
    var row3 = rows[2]

    var finalNumbers = []

    var length = Math.ceil(row3.length)/4 // broj cifri u tekstualnom fajlu (duzina poslednje kolone, jer tu nema novog reda(enter))
    var start = 0
    var end = 3

    for(var j=0; j<length; j++){
        for(var i=start; i<end; i++){
            // pretrazivanje po kolonama
            if(row1[i] == ' ' && row2[i] == ' ' && row3[i] == ' '){
                numbers = numbers.filter(n => [1,3,7].includes(n))
            }
            else if(row1[i] == '_' && row2[i] == '_' && row3[i] == '_'){
                numbers = numbers.filter(n => [2,3,5,6,8,9].includes(n))
            }
            else if(row1[i] == ' ' && row2[i] == '|' && row3[i] == '|'){
                numbers = numbers.filter(n => [1,3,4,6,7,8,9].includes(n))
            }
            else if(row1[i] == ' ' && row2[i] == ' ' && row3[i] == '|'){
                numbers = numbers.filter(n => [2,5,6].includes(n))
            }
            else if(row1[i] == ' ' && row2[i] == '|' && row3[i] == ' '){
                numbers = numbers.filter(n => [2,4,5,9].includes(n))
            }
            else if(row1[i] == '_' && row2[i] == ' ' && row3[i] == ' '){
                numbers = numbers.filter(n => [7].includes(n))
            }
            else if(row1[i] == ' ' && row2[i] == '_' && row3[i] == ' '){
                numbers = numbers.filter(n => [4].includes(n))
            }
        }
        // dodatak za karaktere koji nisu pronadjeni
        if(numbers[0] == 1 && numbers[1] == 3 && numbers[2] == 7 ){
            numbers = [1]
        }
        else if( numbers[0] == 2 && numbers[1] == 5){
            if(row1[i-1] == ' ' && row2[i-1] == '|' && row3[i-1] == ' '){
                numbers = [2]
            }
            else {
                numbers = [5]
            }
        }
        else if(numbers[0] == 3 && numbers[1] == 6 && numbers[2] == 8 && numbers[3] == 9){
            numbers = [8]
        }

        finalNumbers.push(numbers[0])
        numbers = [1,2,3,4,5,6,7,8,9]
        start = end + 1
        end = start + 3
    }
  
    return console.log(finalNumbers.join().replace(/\,/g,""))
}

getNumbers(text)
