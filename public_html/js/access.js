contrasted = false;

toggleContrast = function(){
	
	if(!contrasted){
		var s = document.querySelectorAll(".btn-success .contrastable");
		Array.from(s).forEach((e)=>{

			console.log(e.parentNode.querySelector(".btn-success"));
			e.parentNode.querySelector(".btn-success").classList.add("contrasted");
		});
		contrasted=true;
	}else{
		var s = document.querySelectorAll(".btn-success .contrastable");
		Array.from(s).forEach((e)=>{
			console.log(e.parentNode.querySelector(".btn-success"));
			e.parentNode.querySelector(".btn-success").classList.remove("contrasted");
		});
		contrasted=false;
	}

}