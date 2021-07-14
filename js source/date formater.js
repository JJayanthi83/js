function formatedate(w) {
    var list = w.toLowerCase().split(" ");
    let data1=list[0];
    let data2=list[1];
    let data3=list[2];
    
    var d, m, y;
    let a = [];

    if (is_int(data1[0])) {
      a = [];
      a = data1.split('');
      a.remove('t');
      a.remove('h');
      a.remove('s');
      a.remove('n');
      a.remove('r');
      a.remove('d');
      data1 = str(a);
    } else {
      a = [];
      a.push(data1[0]);
      a.push(data1[1]);
      a.push(data1[2]);
      data1 = str(a);
    }

    if (is_int(data2[0])) {
      a = [];
      a = data2.split('');
      a.remove('t');
      a.remove('h');
      a.remove('s');
      a.remove('n');
      a.remove('r');
      a.remove('d');
      data2 = str(a);
    } else {
      a = [];
      a.push(data2[0]);
      a.push(data2[1]);
      a.push(data2[2]);
      data2 = str(a);
    }

    if (is_int(data3[0])) {
      a = [];
      a = data3.split('');
      a.remove('t');
      a.remove('h');
      a.remove('s');
      a.remove('n');
      a.remove('r');
      a.remove('d');
      data3 = str(a);
    } else {
      a = [];
      a.push(data3[0]);
      a.push(data3[1]);
      a.push(data3[2]);
      data3 = str(a);
    }

    if (data1.length == 0 || data2.length == 0 || data3.length == 0)
      return 'formate error1';


    if (is_int(data1[0]) && data1.length > 2) {
      y = data1;
    } else if (is_int(data1[0]) && data1.length <= 2) {
      d = data1;
    } else {
      m = get_m(data1);
      if (m == '!')
        return 'formate error2';
    }


    if (is_int(data2[0]) && data2.length > 2) {
      y = data2;
    } else if (is_int(data2[0]) && data2.length <= 2) {
      d = data2;
    } else {
      m = get_m('mar');
      if (m == '!')
        return 'formate error3';
    }


    if (is_int(data3[0]) && data3.length > 2) {
      y = data3;
    } else if (is_int(data3[0]) && data3.length <= 2) {
      d = data3;
    } else {
      m = get_m('mar');
      if (m == '!')
        return 'formate error4';
    }

let x={date:parseInt(d),month:parseInt(m),year:parseInt(y)}

    return (x);
  }


//------------------------------------------------
function get_m(a){
  
  switch(a) { 
   case 'jan': { 
      return '1';
   } 
   break;
      
   case 'feb': { 
      return '2';
   } 
   break;
  
   case 'mar': { 
      return '3';
   } 
   break; 
      
   case 'apr': { 
      return '4';
   } 
   break; 
      
   case 'may': { 
      return '5';
   } 
   break;
        
   case 'jun': { 
      return '6';
   } 
   break;
      
   case 'jul': { 
      return '7';
   } 
   break;
      
   case 'aug': { 
      return '8';
   } 
   break;
   
   case 'sep': { 
      return '9';
   } 
   break;
      
   case 'oct': { 
      return '10';
   } 
   break;
      
   case 'nov': { 
      return '11';
   } 
   break;
      
   case 'dec': { 
      return '12';
   } 
   break;
      
   default: { 
      return '!';
   }
   break; 
} 
}

//------------------------------------------------
function is_int(cha) {
  var s =parseInt(cha);
  if ((s >= 0) && (s <= 9))
    return true;
  else
    return false;
}

Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};

function str(q){
  var a='';
for(let i=0;i<q.length;i++){
  a=a.concat(q[i]);
}
return a;
}
//------------------------------------------------
