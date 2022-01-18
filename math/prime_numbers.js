
let emptyarray=[]

emptyarray.push(2)
for (i=100;i>1;i--){
	if (i%2==0){
		continue
	} else if (i%2!=0){
		emptyarray.push(i)
		for ( j=(i**(1/2)).toFixed(0) ;j>1 ;j--){
			let isnotprime=false
			if (isnotprime==false){
				calculated=i%j
				if (calculated==0){
					isnotprime=true
					emptyarray.pop()
					break
				}
			}
		}
	}

}

console.log(emptyarray)
