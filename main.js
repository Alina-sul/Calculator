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
		case '.':
			addChar(value);
			console.log('out', output, 'log', logOutput);
			break;
		case '=':
			if(output !== ''){
				output = eval(logOutput);
				logOutput = '';
			}
			break;
		case 'clear':
			logOutput = output = '';
			count = 0;
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
	logOutput = logOutput + x;
	return (output);
}

function deleteBtn(){
	output = output.slice(0, x-1);
	logOutput = logOutput.slice(0, logOutput.length-1);
	x = output.length;
}

function addChar(x){
	if(output !== ''){
		if(x === '.' && count === 0){
			count++;
			output = output + x;
			logOutput = logOutput + x;
		 }
		else if(x === '.' && count !== 0){
			return;
		}
		else {
			logOutput = logOutput + x;
			count = 0;
			output = '';
		}
		return (output);
	}
	else {return;}

}
