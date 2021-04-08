const Arabic = ['ويلثفيس تريد','نهج فردي للاستثمار كالمحترفين', 'الرجاء إدخال اسم العائلة'];
const English = ['Wealtface Trade', 'An individual approach to invest like a PRO.', 'Please enter your firstname.'];

function ReturnTranslation(text, language) {
	if(typeof language === 'undefined' || language === 'en') {
		return text;
	} else if(language === 'sa_ar') {
		const englishIndex = English.indexOf(text);
		if(englishIndex !== -1) {
			return Arabic[englishIndex];
		}
	} else {
		return null;
	}

	return null;
}

console.log(ReturnTranslation('Please enter your firstname.', 'sa_ar'));