const counters  = document.querySelectorAll('.mycounter');

counters.forEach(function (counter) {

    counter.innerText='0';

    const upDataCounter = ()=>{
        const target = +counter.getAttribute('data-target');
        // console.log(typeof target , target);
        const c = +counter.innerText;

        const incriment = target / 200;
        // console.log(incriment);

        if (c < target){
            counter.innerText = `${Math.ceil(c+incriment)}`;
            setTimeout(upDataCounter,1);
        };
    }
    upDataCounter();
});


const images = document.querySelectorAll(".galleryItem img");
const fullImageContainer = document.querySelectorAll(".fullImage");
const fullImage = document.querySelectorAll(".fullImage img");
const modal = document.querySelectorAll(".imgModal");

// console.log(fullImageContainer);
console.log(fullImage);
console.log(modal);

images.forEach(img=>{
    let myThis = this
    img.addEventListener('click',function () {

        myThis.modal.classList.add('showFullImage')
        myThis.fullImageContainer.classList.add('fullImageTransition')


        // this.modal.classList.add('showFullImage');
        // this.fullImageContainer.add('fullImageTransition');

        // myThis.fullImage.className = 'showFullImage'
        // fullImageContainer.className =
    });
});

// alert(images);
// console.log(images);