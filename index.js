// 
let count = 0
let countNumber = document.getElementById('counter_number')
let Increment = document.getElementById('increment')
let Previous = document.getElementById('prev')

increment
function increment() {

	count +=1
	countNumber.innerText=count

}

function save() {
	 // Increment.disabled=true
	 let countStr = count + " - "
	 Previous.textContent+= countStr
	 count = 0
	 countNumber.innerText = count



}