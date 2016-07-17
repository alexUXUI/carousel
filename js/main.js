'use strict'

var dotOne = $(".dot")[0];
var dotTwo = $(".dot")[1];
var dotThree = $(".dot")[2];
var dots = [dotOne, dotTwo, dotThree]

var slideOne = $(".slide")[0];
var slideTwo = $(".slide")[1];
var slideThree = $(".slide")[2];

var s1 = $('.slide-one')
var s2 = $('.slide-two')
var s3 = $('.slide-three')

var someSlides = [slideOne, slideTwo, slideThree];

const slideOneInfo = slideOne.innerHTML;
var features = $('h2').get();

class SlideShow {

  constructor(slides, features, dots){
    this.slides = slides;
    this.features = features;
    this.dots = dots;
    this.arrayOrder = '';
    this.arrangements = [this.arrangementOne, this.arrangementTwo, this.arrangementThree];
    this.stop = 
  }

  setOrder(slides){
    this.slides.forEach((i) => {
      i.addEventListener('click', () => {
        var curr = i;
        this.slides.splice(i, 1);
        this.slides.unshift(curr);
        console.log(slides);
      })
    })
  }

  hoverTitle(){
    this.features.forEach( (i) => {
      i.addEventListener('mouseover', () => {
        clearInterval(this.tempo);
        if(i.innerHTML === 'Slide one') { this.arrangementOne(); }
        if(i.innerHTML === 'Slide two') { this.arrangementTwo(); }
        if(i.innerHTML === 'Slide three') { this.arrangementThree(); }
      })
    })
  }

  hoverDots(){
    this.dots.forEach( (dot) => {
      dot.addEventListener('mouseover', () => {
        console.log('clear timeout');
        clearInterval(this.tempo);
        if(dot === dotOne) { this.arrangementOne(); }
        if(dot === dotTwo) { this.arrangementTwo(); }
        if(dot === dotThree) { this.arrangementThree(); }
      })
    })
  }

  hoverSlides(){
    this.slides.forEach( (i) => {
      i.addEventListener('mouseover', () => {
        clearInterval(this.tempo);
        if(i === slideOne) this.arrangementOne();
        if(i === slideTwo) this.arrangementTwo();
        if(i === slideThree) this.arrangementThree();
      })
    })
  }

  arrangementOne(){
    s1.empty().append(slideOneInfo);
    s1.css("background-color", "coral")
    s2.css("background-color", "aqua")
    s3.css("background-color", "gold")
  }

  arrangementTwo(){
    s1.empty().append(slideTwo.innerHTML);
    s1.css("background-color", "aqua")
    s2.css("background-color", "coral")
    s3.css("background-color", "gold")
  }

  arrangementThree(){
    s1.empty().append(slideThree.innerHTML);
    s1.css("background-color", "gold")
    s2.css("background-color", "aqua")
    s3.css("background-color", "coral")
  }

  automaticPagination() {
    var intervalFunctions = this.arrangements;
    var intervalIndex = 0;
    var tempo = window.setInterval(function(){
      intervalFunctions[intervalIndex++ % intervalFunctions.length]();
    }, 2000);
    return tempo
  }

}


var carousel = new SlideShow(someSlides, features, dots)

carousel.hoverTitle();
carousel.hoverDots();
carousel.hoverSlides();
carousel.setOrder(someSlides);
// carousel.automaticPagination()

someSlides.forEach(function(i){
  i.addEventListener('mouseover', function(){
    carousel.automaticPagination();
  })
})

console.log(features);
