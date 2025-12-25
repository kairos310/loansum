let str = "OANSUM"
let letter = document.createElement("img")
let dir = "gifs\\ALPHABET\\3DFONT\\"
dir = "images\\"
letter.src = dir + "54\\CAP2\\L.GIF"
letter.width = 200
document.getElementById("title").appendChild(letter)
for(let l of str){
	let num = Math.floor(Math.random() * 73)
	num = 55
    letter = document.createElement("img")
	letter.src = dir +num+"\\LOW2\\"+l+".GIF"
    letter.width = 100
	document.getElementById("title").appendChild(letter)
}
