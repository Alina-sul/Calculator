var cur_num = 0;
var pre_num = 0;
var output = 0;
var count = 0;
var double = undefined;
var char;

/* event */
var btnClick = document.getElementById("btn_body");
btnClick.addEventListener("click", function(){key(this)},false);
console.log('event',btnClick);



function display(x){
	return document.getElementById('output').innerHTML = x;
}

function Clear(){
		cur_num = pre_num = 0;
		display(cur_num);
}

function clickTest(){

}

function key(btn){
	var value = btn.value;
	if(!isNaN(value) || value == '.'){
		if(value === '.'){
			count++;
			if(count > 1){SyntaxError();}
		}

		if(cur_num === 0) {
			if(value === '.'){
				double = "0" + "" + ".";
				display(double);
			}
			else if (double != undefined){
					double = double + value;
					display(double);
				}
			else {
				output = value;
		  	display(output);
			}
		}
		else {
			output = output + "" + value;
			display(output);
		}

		cur_num = document.getElementById('output').innerHTML;
		cur_num = Number(cur_num);
	}
	else {
		char = btn.value;
		console.log(char);
		pre_num = cur_num;
		cur_num = 0;
	}

		console.log(cur_num);console.log(pre_num);
}



output = cur_num;
display(output);
