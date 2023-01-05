xgallery_images = [
  {
    url: "https://assets.codepen.io/1692350/61.png",
    prompt: "abstract 3d render, rococo, octane render, detailed, black and gold",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/62.png",
    prompt: "abstract 3d render, rococo, octane render, detailed, black and gold",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/60.png",
    prompt: "abstract 3d crystals render, octane render",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/59.png",
    prompt: "abstract 3d crystals render, octane render",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/58.png",
    prompt: "abstract 3d city, octane render, rococo + , abstract + , detailed, black with gold details",
    date: "17.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/57.png",
    prompt: "abstract 3d human face, octane render, rococo + , detailed, black with gold details",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/56.png",
    prompt: "abstract 3d human face, octane render, rococo + , detailed, black with gold details",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/55.png",
    prompt: "abstract 3d statue, octane render, detailed, black with gold details",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/54.png",
    prompt: "abstract 3d statue, octane render, detailed, black with gold details",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/53.png",
    prompt: "abstract 3d statue, octane render, detailed, black with gold details",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/47.png",
    prompt: "splash art, neo noir, cyberpunk girl character portrait, standing in city center, detailed, monochrome with red details",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/46.png",
    prompt: "splash art, neo noir, cyberpunk girl character portrait, standing in city center, detailed, monochrome with red details",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/45.png",
    prompt: "splash art, neo noir, cyberpunk girl character portrait, standing in city center, detailed, monochrome with red details",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/44.png",
    prompt: "splash art, cyberpunk character portrait, standing in city center, detailed, black outlines drawing style",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/43.png",
    prompt: "splash art, cyberpunk character portrait, standing in city center, detailed, black outlines drawing style",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/42.png",
    prompt: "splash art, cyberpunk character portrait, standing in city center, detailed, black outlines drawing style",
    date: "15.11.2022",
    tags: "characters"
  }
];


$(document).ready(function(){
  // SHUFFLE THE GALLERY
  shuffle(xgallery_images);

  // LOAD IMAGES INTO GALLERY
  xgallery_images.forEach(function(xg_image, i){
    $(".xg-container").append(createXGImage(xg_image, i));
  });

  // HOVER GALLERY IMAGE
  $(".xg-img-wrap").mouseenter(function(){
    var el = $(this);
    var to = setTimeout(function(){
      el.find(".xg-img-info").addClass("xg-img-info-open");
    }, 100);
    el.mouseleave(function(){
      clearInterval(to);
      el.find(".xg-img-info").removeClass("xg-img-info-open");
    });
  });


  // FILTER BUTTON CLICK
  $(".xg-btn-tag").on("click", function(){
    if($(this).hasClass("xg-btn-active")){
      return;
    }
    var tagFilter = $(this).data("tag");
    $(".xg-btn-tag").removeClass("xg-btn-active");
    $(this).addClass("xg-btn-active");

    $(".xg-loader").fadeIn(100);

    if(tagFilter == "all"){
      $(".xg-img-wrap").fadeIn(100);
    }else{
      $(".xg-img-wrap").fadeIn(100);
      $(".xg-img-wrap").each(function(i, el){
        if(!$(el).data("tags").includes(tagFilter))
          $(el).fadeOut(100);
      });
    }
    $(".xg-loader").delay(500).fadeOut(100);
  });



  // OPEN IMAGE PREVIEW


  // ZOOM IN IMAGE PREVIEW


  // CLOSE PREVIEW - ESCAPE
  $(document).keyup(function(e) {
    if (e.key === "Escape") {
      $("body").removeClass("scroll-fixed");

      $(".xg-img-preview").fadeOut(100);
    }
  });



  // CLOSE PREVIEW - CLICK

});



function createXGImagePreview(xgi){
  var xg_img =
      '<div class="xgp-wrap">\
<div class="xgp-close"></div>\
<div class="xgp-img-inner">\
<img draggable="false" class="xgp-img" src="'+xgi.url+'">\
</div>\
<div class="xgp-details">\
<div class="xgp-prompt">'+xgi.prompt+'</div>\
<div class="xgp-date">'+xgi.date+'</div>\
<div class="xgp-tags">\
<div class="xgp-tag">'+xgi.tags+'</div>\
</div>\
</div>';

  return xg_img;
}

function createXGImage(xgi, i){
  var xg_img =
      '<div class="xg-img-wrap" data-tags="'+xgi.tags+'" data-index="'+i+'">\
<div class="xg-img-info">\
<div class="xg-img-info-inner">\
<div class="xg-img-prompt">'+xgi.prompt+'</div>\
<div class="xg-img-date">'+xgi.date+'</div>\
</div>\
</div>\
<img draggable="false" class="xg-img" src="'+xgi.url+'">\
</div>';

  return xg_img;
}


function shuffle(arr) {
  let index = arr.length,  randomIndex;
  while (index != 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;

    [arr[index], arr[randomIndex]] = [
      arr[randomIndex], arr[index]];
  }

  return arr;
}