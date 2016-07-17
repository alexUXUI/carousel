'use strict'

var dotOne = $(".dot")[0];
var dotTwo = $(".dot")[1];
var dotThree = $(".dot")[2];
var dots = [dotOne, dotTwo, dotThree]

var slideOne = $(".slide")[0];
const slideOneInfo = slideOne.innerHTML;
var slideTwo = $(".slide")[1];
var slideThree = $(".slide")[2];
var someSlides = [slideOne, slideTwo, slideThree];

var features = $('h2').get();

class SlideShow {

  constructor(slides, features, dots){
    this.slides = slides;
    this.features = features;
    this.dots = dots;
    this.arrayOrder = '';
  }

  getNextSlide(){
    this.features.forEach( (i) => {
      i.addEventListener('mouseover', () => {
        $('.slide-one').empty().append(i.childNodes[0].data);
      })
    })
  }

  clickDots(){
    this.dots.forEach( (dot) => {
      dot.addEventListener('mouseover', () => {
        if(dot === dotOne) {
          $('.slide-one').empty().append(slideOneInfo);
        }
        if(dot === dotTwo) {
          $('.slide-one').empty().append(slideTwo.innerHTML);
          $('.slide-one').toggleClass('.slide-two')
        }
        if(dot === dotThree) {
          $('.slide-one').empty().append(slideThree.innerHTML);
        }
        else {
          console.log('not dot detected');
        }
      })
    })
  }

  clickSlide(){
    this.slides.forEach( (i) => {
      i.addEventListener('mouseover', () => {
        if(i === slideOne) $('.slide-one').empty().append(slideOneInfo);
        if(i != slideOne) $('.slide-one').empty().append(i.childNodes[0].data)
      });
    });
  }

  // automaticPagination() {
  //   this.slides.forEach(function(i){
  //
  //   })
  // }

}

var carousel = new SlideShow(someSlides, features, dots)

carousel.getNextSlide();
carousel.clickDots();
carousel.clickSlide();

console.log(features);
