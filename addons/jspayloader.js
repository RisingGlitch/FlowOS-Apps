alert('Systemless Payloader has now launched, you may now execute payloads, these allow for custom JS execution, in the following prompt, please input the payload you would like to execute'); 
payload = prompt('Please enter your cmd in the box below:'); 
try {
  jsPayload = document.createElement('script'); 
  jsPayload.innerHTML= payload;
  document.body.appendChild(jsPayload);
} 
catch {
  alert('Payload failed, check dev logs for info')
}
