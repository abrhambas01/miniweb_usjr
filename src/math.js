import calculate from './calc.js'
import $ from 'jquery' ; 



$('#add').on('click',function(){ 
	calculate.add(3,2)  ; 
});