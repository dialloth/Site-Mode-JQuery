$(function(){
	// créer les variables permettant de capturer tous les éléments de nos menus
   var $mainMenuItems = $("#main-menu ul").children("li"),
   totalMainMenuItems = $mainMenuItems.length,// nombre d'élement dans mon menu
   openedIndex = 2, // ouvrir automatiquement J. Alba à l'indice 2
   
   init = function(){// déclarer une fonction
	bindEvents();
	
	  if(validIndex(openedIndex)){
		  animateItem($mainMenuItems.eq(openedIndex),true, 700);
	  }
	},
	bindEvents = function(){
		$mainMenuItems.children(".images").click(function(){
		var newIndex = $(this).parent().index(),
        $item = $mainMenuItems.eq(newIndex);
		// element image sur lequel je viens de cliquer
	  
	  if(openedIndex === newIndex){
			animateItem($item,false,250);
			openedIndex = -1;
		}
		else 
		{
		    if(validIndex(newIndex)){
				animateItem($mainMenuItems.eq(openedIndex),false,250);
				openedIndex = newIndex;
				animateItem($item,true,250);
			}
	      }
		});	
    $(".button").hover(
	function(){
		$(this).addClass("hovered");
	},	
	function(){
		$(this).removeClass("hovered");
	}
    );	
	$(".button").click(function(){
		var newIndex = $(this).index();
		//var newIndex = $(this).parent().index(),
        $item = $mainMenuItems.eq(newIndex);
		// element image sur lequel je viens de cliquer
	  
	  if(openedIndex === newIndex){
			animateItem($item,false,250);
			openedIndex = -1;
		}
		else 
		{
		    if(validIndex(newIndex)){
				animateItem($mainMenuItems.eq(openedIndex),false,250);
				openedIndex = newIndex;
				animateItem($item,true,250);
			}
	      }
	});
},
	validIndex = function(indexToCheck){
		return(indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
	},
	animateItem = function($item, toOpen, speed){
		    var $colorImage = $item.find(".color"),
            itemParam = toOpen ? {width:"420px"}: {width:"140px"} ,
            colorImageParam = toOpen ? {left: "0px"}: {left: "140px"};   
            $colorImage.animate(colorImageParam, speed);
            $item.animate(itemParam, speed);	
	};
	
	checkAndAnimateItem = function(indexTocheckAndAnimateItem){
		
	}
	init();
	//animateItem();
});