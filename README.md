Country Information
===============

#Usage
```shell
var countryInfo = require('country-info');
countryInfo.getInfoByCountryName('palestine', function(data){
	console.log(data);
});
```

#Result:
```shell
{ name: 'PALESTINE',
  code: '970',
  towLetters: 'PA',
  threeLetters: 'PSE' }
```

#API Reference
```shell
getInfoByCountryName(countryName, callback)			#countryName: palestine
getInfoByDialNumber(dialNumber, callback)			#dialNumber: 970
getInfoByThreeLettersISO(threeLetters, callback)	#threeLetters: PSE
getInfoByTwoLettersISO(twoLetters, callback)		#twoLetters: PS
```

