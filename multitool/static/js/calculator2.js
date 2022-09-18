// dzielenie przez 0
//historia
//delete last number
//equals button
//number from last calculation to next
// procents
//ulamki
//potegi
//pierwiastki
// buttons = document.getElementsByClassName("button")
let obliczenia = []
// let znaki = []
// let obliczone = False
// let can_delete = False
let liczba1 = ""
// let dlugosc = 0
output=document.getElementById("output")
function add_to_list(id) {
    if (liczba1 == "") {
        if (parseInt(id) != 0) {
            liczba1 += id
            output.innerHTML = liczba1
        }
        
    }
    else {
        liczba1 += id
        output.innerHTML = liczba1
    }
    
    console.log("liczba1=", liczba1)
    
}
function function_buttons(id) {

    if (liczba1 == "") {
        obliczenia.push(0)
        obliczenia.push(id)
        // znaki.push(id)
        liczba1 = ""
        output.innerHTML = "0"+liczba1
        console.log("liczba1=", liczba1,"obliczenia=", obliczenia)
    }
    else {
        obliczenia.push(parseFloat(liczba1))
        obliczenia.push(id)
        // znaki.push(id)
        liczba1 = ""
        output.innerHTML = "0"
        console.log("liczba1=", liczba1,"obliczenia=", obliczenia)
    }
    

}
function equals() {
    
    obliczenia.push(parseFloat(liczba1))
    liczba1 = ""
    console.log("obliczenia: ", obliczenia)
    while(obliczenia.length != 1){
        let p_m
        let p_dz
        let i
        p_m = obliczenia.indexOf('*')
        p_dz = obliczenia.indexOf('/')
        i = Math.min(p_dz, p_m)
        if (i < 0) {
            i=Math.max(p_dz, p_m)
        }
        if ('*' || '/' in obliczenia==true) {
            
            if (obliczenia[i] == '/') {
                obliczenia[i - 1] = obliczenia[i - 1] / obliczenia[i + 1]
                obliczenia.splice(i, 2)
                console.log(obliczenia)
            }
            if(obliczenia[i] == '*'){
                obliczenia[i - 1] = obliczenia[i - 1] * obliczenia[i + 1]
                obliczenia.splice(i, 2)
                console.log(obliczenia)
            }
        }
        else{
            if (obliczenia[1] == '+') {
                console.log("+")
                obliczenia[0] = obliczenia[0] + obliczenia[2]
                obliczenia.splice(1, 2)
                console.log(obliczenia)
            }
            if (obliczenia[1] == '-') {
                console.log("-")
                obliczenia[0] = obliczenia[0] - obliczenia[2]
                obliczenia.splice(1, 2)
                console.log(obliczenia)
            }
        }
        console.log("end", p_dz, p_m)
    }
    // console.log("znaki: ",znaki)
    // znaki.sort()

    // console.log("znaki: ",znaki)
    output.innerHTML = obliczenia[0]
    console.log("obliczenia: ", obliczenia)
    console.log("liczba1: ",liczba1)
}
function negate() {
    if (parseFloat(liczba1) < 0) {
        liczba1 = Math.abs(parseFloat(liczba1)) 
        output.innerHTML = liczba1
    }
    else if (parseFloat(liczba1) > 0){
        liczba1 = -Math.abs(parseFloat(liczba1))
        output.innerHTML = liczba1
    }
    else{
        output.innerHTML = "0"
    }
}
function decimal() {
    if (liczba1 == "") {
        liczba.push('0')
        liczba1 += '0'
        output.innerHTML = liczba1
    }
    if (!liczba1.includes(".")){
        liczba1 += "."
        output.innerHTML = liczba1

    }
}
function c() {
    liczba1 = ""
    obliczenia = []
    znaki = []
    output.innerHTML = '0'
}
