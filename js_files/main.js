var cur_num = 0;
var pre_num = 0;
var output = 0;
var count = 0;
var double = undefined;
var char;

function Display(x){
	return document.getElementById('output').innerHTML = x;
}

function Clear(){
		cur_num = pre_num = 0;
		Display(cur_num);
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
				Display(double);
			}
			else if (double != undefined){
					double = double + value;
					Display(double);
				}
			else {
				output = value;
		  	Display(output);
			}
		}
		else {
			output = output + "" + value;
			Display(output);
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
Display(output);
