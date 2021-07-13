/*
getdow(yyyymmdd) returns a integer value within [0,1,2,3,4,5,6];
where,
0-sunday
1-monday
2-tuesday
3-wednesday
4-thurseday
5-friday
6-saturday

NOTE: input formate should be yyyymmdd
*/

function getdow(a) {
    var b;
    var b2 = [6, 0, 1, 2, 3, 4, 5];
  
    var list = a.split('');
    var data = [];
    for (var i = 0; i < list.length; i++) {
      data.push(parseInt(list[i]));
    }
  
    var c = (data[0] * 10) + data[1];
    var y = (data[2] * 10) + data[3];
    var m = (data[4] * 10) + data[5];
    var d = (data[6] * 10) + data[7];
  
    b = parseInt(y / 4);
    b = b + d;
    b = b + mkey(m);
  
    if (leapyear(y)) {
      if (m == 1 || m == 2) {
        b = b - 1;
      }
    }
  
    b = b + ykey(c);
    b = b + y;
    b = b % 7;
  
    return b2[b];
  }
  
  function ykey(a) {
    var q = true;
    if (a < 17) {
      while (q) {
        if (a == 17 || a == 18 || a == 19 || a == 20) {
          q = false;
        }
        a = a + 4;
      }
    } else if (a > 20) {
      while (q) {
        if (a == 17 || a == 18 || a == 19 || a == 20) {
          q = false;
        }
        a = a - 4;
      }
    }
    switch (a) {
      case 17:
        a = 4;
        break;
      case 18:
        a = 2;
        break;
      case 19:
        a = 0;
        break;
      case 20:
        a = 6;
        break;
    }
    return a;
  }
  
  function mkey(a) {
    if (a == 1 || a == 10) return 1;
    if (a == 2 || a == 3 || a == 11) return 4;
    if (a == 4 || a == 7) return 0;
    if (a == 5) return 2;
    if (a == 6) return 5;
    if (a == 8) return 3;
    if (a == 9 || a == 12) return 6;
  
    return 0;
  }
  function leapyear(a) {
    var r = false;
    if (a % 4 == 0) {
      if (a % 100 == 0) {
        if (a % 400 == 0) {
          r = true;
        }
      } else {
        r = true;
      }
    } else {
      r = false;
    }
    return r;
  }
