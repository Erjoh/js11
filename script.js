const currency = document.querySelector('#currency')
const currenc = document.querySelector('#currenc')
const convert = document.querySelector('#convert')
const input = document.querySelector('#input')
const res = document.querySelector('#res')


const handleMonGet = () => {
    fetch(`https://api.exchangerate.host/latest?base=${currency.value}&symbols=${currenc.value}&amount=${input.value}`)
        .then(responce => responce.json())
        .then(data => {
            res.innerHTML = `${currency.value} ${currenc.value} = ${Object.values(data.rates)} ${Object.keys(data.rates)}`
            if (currency.value === currenc.value){
                alert('nene tak ne kanaet bratan')
            } else {
                handleMonGet()
            }
        })
}

convert.addEventListener('click' , (event) => {
    handleMonGet()
})