module.exports = function toReadable (number) {
	var str = "";
	const arr = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
	const arrDozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
	const arrHundred = ['', 'one hundred', 'two hundred','three hundred','four hundred','five hundred', 'six hundred','seven hundred','eight hundred','nine hundred'];
	if (number<20) {
		// n=n/100;
		str = str + arr[number];
	}
	if (number<=100 && number>=20) {
		// n=n/100;
		str = str + arrDozens[Math.floor(number/10)]; 
		if (number%10 != 0) {
			str = str + " " + arr[number%10];
		} 
	}
	if (number<999 && number>100) {
		// n=n/100;
		str = str + arrHundred[Math.floor(number/100)];
		if (Math.floor(number%100/10) != 0) {
			str = str + " " + arrDozens[Math.floor(number%100/10)];
			if (number%10 != 0) {
				str = str + " " + arr[number%10];
			}
		}
		
	}
	return str;
}
