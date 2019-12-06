contrasted = false;
colorblind = false;

toggleContrast = function(){
	
	if(!contrasted){
		var s = document.querySelectorAll(".btn-success .contrastable");
		Array.from(s).forEach((e)=>{

			e.parentNode.querySelector(".btn-success").classList.add("contrasted");
		});
		contrasted=true;


		
	}else{
		var s = document.querySelectorAll(".btn-success .contrastable");
		Array.from(s).forEach((e)=>{
			e.parentNode.querySelector(".btn-success").classList.remove("contrasted");
		});
		contrasted=false;
	}

}
toggleColorblind = function(){
	var s = document.querySelectorAll(".motif");

	colorblind = !colorblind;
	
	Array.from(s).forEach((e)=>{
		e.style.display = colorblind ? "inline-block" : "none" ;


	});


}