gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(ScrollSmoother) 

// ScrollSmoother.create({
//   smooth: 1,
//   effects: true,
// });

gsap.fromTo('.line',{
  x:-1000,
  duration:1
},{
  x:0,
  scrollTrigger:{
    trigger:'.random-recipe-container',
    // start:'top 80%',
    toggleActions:'play restart none none',
    scrub:true
  }
})

gsap.fromTo('.banner-wrapper',{
  x:1000,
  duration:1
},{
  x:0,
  scrollTrigger:{
    trigger:'body',
  }
} 
)

gsap.fromTo('.reveal-type', {
  opacity: 0,
  duration: 0,
  x:-200,
}, {
  opacity: 1,
  x:0,
  scrollTrigger: {
    trigger: '.reveal-type',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play none none none',
  }
})

gsap.fromTo('.searchbar',{
  x:-1000,
  duration:2,
},{
  x:0,
  scrollTrigger:{
    trigger:'#section-3',
    top:'bottom 70%',
    // scrub:true
  }
})

gsap.fromTo('.random-recipe-img',{
   x:-40
},{
  x:0,
  scrollTrigger:{
    trigger:'.random-recipe-container',
    scrub:true,
  }
})


const splitTypes = document.querySelectorAll('.reveal-type2')

splitTypes.forEach(chars => {
  const text = new SplitType(chars,{types:'chars,word'})
  gsap.from(text.chars,{
    scaleY:0,
    y:-20,
    transformOrigin: 'top',
    opacity:0.2,
    stagger:0.1,
    duration:2,
    scrollTrigger:{
      trigger:chars,
      start:'top 95%',
      end:'top 20%',
      scrub:true,
      // markers:true
    }
  })
})