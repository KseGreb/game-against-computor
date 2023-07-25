const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*21);

button.addEventListener("click", play);

function play(){
    const userNumber = input.value;
   
    if(userNumber <1 || userNumber > 20){
        Swal.fire({
            title: "Your number should be between 1 and 20",
            imageUrl: 'flower.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
   
    else if(isNaN(userNumber)){
        Swal.fire({
            title: "Please enter a number",
            imageUrl: 'coffee.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
   
    else{

        if(userNumber < answer){
            Swal.fire({
                title: "Almost there! Try some number higher than this",
                imageUrl: 'sky.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }

        else if(userNumber > answer){
            Swal.fire({
                title: "Almost there! Try some number lower than this",
                imageUrl: 'birds.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }

        else{
            Swal.fire({
                title: 'Good job!',
                text: 'Treat yourself to a weekend in the mountains',
                imageUrl: 'mountain.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }
    }
}

input.addEventListener ("keypress", function(e){
    if(e.keyCode === 13)
        play()
})

gsap.to(".container", {
    rotation: 360,
    duration: 1.5,
    delay:0.5,
    opacity: 1
})