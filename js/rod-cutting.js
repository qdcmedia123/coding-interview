
https://stackoverflow.com/questions/34619803/js-dp-rod-cutting-a-recurrence-doesnt-go-further-than-i-1-in-for-cycle

function cut_rod(p,n){
        
        if(n == 0){
            return 0;
        } 
        var q = Number.MIN_VALUE;

        for(var i = 1; i <= n; i++){
            
            q = Math.max(q, p[i-1] + cut_rod(p, n-i));
                    
        }         
        return q;
}

var p = [2,5,8,9,10,17,17,20,24,30];
console.log(cut_rod(p,10));
