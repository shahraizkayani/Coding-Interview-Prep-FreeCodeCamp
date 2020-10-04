function mergeSort(array) {
  
  
  return  mergesort1(array,0,array.length-1);;
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

function merge(a,l,mid,r){
var b =[];
	var i=l;
	var j= mid+1;
	var k=l;
	while(i<=mid && j<=r)
	{
		if(a[i]<=a[j])
		{
			b[k]=a[i];
			i++;
		
		}
		else
		{
			b[k]=a[j];
			j++;
		}
		k++;
	}
	if(i>mid)
	{
		while(j<=r)
		{
			b[k]=a[j];
			j++;
			k++;
		}
		
	}
	else if(j>r)
	{
		while(i<=mid)
		{
			b[k]=a[i];
			i++;
			k++;
			
		}
	}
	for(k=l;k<=r;k++)
	{
		a[k]=b[k];
	
		
	}
 
}

function mergesort1(a,l,r){
  if(l<r){
    let mid = Math.floor((l+r)/2);
    mergesort1(a,l,mid);
    mergesort1(a,mid+1,r);
    merge(a,l,mid,r);
  }
  
  return a;
}
