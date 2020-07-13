'use strict'

class GetBoardingList {
  constructor (arrayData) {
    
    this.arrayData = arrayData;

  }
  
  RegresToSring() {
	  
		if(typeof this.regrex !== 'undefined')
		{
			return this.regrex.toString();
		}
	  }
}

class GetHTMLTemplate extends GetBoardingList {
  constructor (data) {
    	super()

      	this.data = data
  }
}

var boarding = [
  {
    'from': 'Barcelona',
    'to': 'New York',
    'instruction': '',
    'time': '2018-02-02 20:05',
    'transport': 'Flight',
    'transportno': 'B33',
    'seatno': 'Y15'
  },
  {
    'from': 'Barcelona',
    'to': 'Gerona',
    'instruction': '',
    'time': '2018-02-02 20:05',
    'transport': 'Bus',
    'transportno': 'M31, M32, M33',
    'seatno': 'Any'
  },
  {
    'from': 'Madrid',
    'to': 'Barcelona',
    'instruction': '',
    'time': '2018-02-02 20:05',
    'transport': 'Bus',
    'transportno': 'M31, M32, M33',
    'seatno': 'Any'
  },
  {
    'from': 'New York',
    'to': 'Stockholm',
    'instruction': '',
    'time': '2018-02-02 20:05',
    'transport': 'Flight',
    'transportno': 'M31, M32, M33',
    'seatno': 'Any'
  },
  {
    'from': 'Gerona',
    'to': 'Barcelona',
    'instruction': '',
    'time': '2018-02-02 20:05',
    'transport': 'Bus',
    'transportno': 'M31, M32, M33',
    'seatno': 'Any'
  }
]

GetBoardingList.prototype.propComparator =  function (prop, prop1) {
    
    return function(a, b) {
		
        return a[prop] == b[prop1] ? 0 : 1;
    }
}



GetBoardingList.prototype.ArrayCards = function () {
	
	var self = this; // so = current `this`
  // Here We will arragne the data
  var boradingList = this.arrayData

  var comparefirst = this.firstindex

  // Check if data is type of array
  
   
	
	
	
	
   var SortedBoarding =  boradingList.sort(this.propComparator('to', 'from'));

   this.ArrayCards = SortedBoarding;
   
  
}

// Get the template
GetBoardingList.prototype.GetTemplate = function () {

	// template 
	var template = this.template;
	
	// regrex 
	var regrex = this.regrex;
	
	// Resi;t 
	var result = '';
	
	// Check data is array and associative array 
	if(this.ArrayCards.length < 1) 
	{
		return false;
	}
	
	
	
	// Some variable must be defined 
	if(typeof this.template === 'undefined') 
	{
		return false;
	}
	
	if(typeof this.regrex === 'undefined') { return false; }

	 // Sortted list
	var expression = this.RegresToSring();
	
	// Get first three and last two 
	var fristthree = expression.substr(1, 3);
	
	var lastExpression = expression.substr(-3,2);
	
	
	
	for(var j = 0; j < this.ArrayCards.length; j++) {
		
			var output = template;
			
			for(var index in this.ArrayCards[j]) {
				
				var reg = index.replace(index,  fristthree+index+lastExpression);
				
				// Check if pattern match
				output =  output.replace(reg, this.ArrayCards[j][index]); 
				
			}
			
			result += output;
	}
	
	return result ;
	
	
}



GetBoardingList.prototype.prop = 'to';

GetBoardingList.prototype.template = '<li>Get {{&transport}} from {{&from}} To {{&to}}</li>';

GetBoardingList.prototype.regrex = /{{&(.*?)}}/;

var obj = new GetBoardingList(boarding, 'to')


//obj.prototype.prop1 = 'from';

var data = obj.ArrayCards();

//console.log(obj.GetTemplate());

console.log(obj.ArrayCards)



