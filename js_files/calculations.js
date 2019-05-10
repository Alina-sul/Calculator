function Calc(){
	if(char == '+'){
		output = pre_num + cur_num;
	}
	else if(char == '-'){
		output = pre_num - cur_num;
	}
	cur_num = output;
	console.log("output",cur_num);
	Display(output);
}
