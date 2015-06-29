$('#newArticle').on('click',function(){
  window.location='/articles/new';
})

$(function(){
  $('#Container').mixItUp({
    animation: {
      animateResizeContainer: false,
      effects: 'fade rotateX(-45deg) translateY(-10%)'
    }
  });
})

// animation.animateResizeContainer must be disabled to prevent accidental reflowing as the container height changes.
