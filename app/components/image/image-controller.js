function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?

var imageService = new ImageService()

function drawImage(image) {
	document.body.style.backgroundImage = `url('${image.large_url}')`
	document.body.style.backgroundColor = "black";
}

this.getImage = function getImage(){
	imageService.getImage(drawImage)

}

imageService.getImage(drawImage)
}


