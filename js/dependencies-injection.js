class a {

  constructor ( data ) {
  		
    this.data = data;
  }
  
}

a.prototype.getData = function() {
	
  return this.data;
}

var d = {username:'fuckyou'};
var o = new a(d);

// Another class 
class Template {

  	constructor(template, boarding) {
    	
      this.boarding = boarding;
      
    }
  
}

Template.prototype.GetHTML = function () {

	return this.boarding.getData().username;
}
var tm = '<li></li>';

var tb = new Template(tm, new a(d));

console.log(tb.GetHTML());
