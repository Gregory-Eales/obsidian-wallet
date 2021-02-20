const secureRandom = require('secure-random');
const ec = require('elliptic').ec;


function generate_private_key()
{
	
	const max = Buffer.from("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364140", 'hex');  
	let isInvalid = true;  
	let privateKey;  
	while (isInvalid) {    
	  privateKey = secureRandom.randomBuffer(32);
	  if (Buffer.compare(max, privateKey) === 1) {      
	    isInvalid = false;     
	  }  
	}
	console.log('> Private key: ', privateKey.toString('hex'));
}

function generate_public_key()
{
	
}


generate_key();