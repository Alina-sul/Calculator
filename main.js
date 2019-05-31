var output = document.getElementById('output').innerHTML;
var logOutput = document.getElementById('logOutput').innerHTML;
var count = 0;
var x = output.length;
var y = logOutput.length;

var btns = document.getElementsByTagName('button');
for(var i = 0; i < btns.length; i++) {
	btns.item(i).addEventListener('click',clickEvent,false);
}

function clickEvent(event){
 let value = event.target.value;
	switch (value) {
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
			addNumber(value);
			break;
		case '+':
		case '-':
		case '*':
		case '/':
		case '**':
			logOutput = logOutput + output;
			addChar(value);
			logOutput = logOutput + value;
			console.log('out', output, 'log', logOutput);
			break;
		case '.':
		case '=':
			if(output !== ''){
				output = eval(logOutput);
				logOutput = '';
			}
			break;
		case 'clear':
			logOutput = output = '';
			break;
		case 'delete':
			deleteBtn();
			break;
	}

	//validityCheck(logOutput);
	document.getElementById('output').innerHTML = output;
	document.getElementById('logOutput').innerHTML = logOutput;

}



function addNumber(x){
	output = output + x;
	return (output);
}

function deleteBtn(){
	output = output.slice(0, x-1);
	x = output.length;
	return (output);
}

function addChar(x){
	if(output != ''){
		if(x === '.' && count === 0){
			count++;
			output = output + x;
		 }
		else if(x === '.' && count !== 0){
			return;
		}
		else {
			count = 0;
			output = '';
		}
		return (output);
	}
	else {return;}

}
