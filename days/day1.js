const fs = require('fs');
//var data = fs.readFileSync(__dirname + '/../data/day1.txt', 'utf8');


function calcBlockDistance(data) {

    var dir = 0; // start facing north
    var tmpNum;
    var store=[0,0,0,0];
    var steps=data.split(', ');
    console.log('NESW = ',store);
  for(var i = 0; i < steps.length; i++){
      var tmp=steps[i].slice(1);
      console.log('number: ',parseInt(tmp));
//      console.log('direction',steps[i][0],'steps',parseInt(steps[i].slice(1)))

      if(steps[i][0]==='R') {
          dir=dir+1;
          if(dir===4){
              dir=0;
          }
          store[dir]=store[dir]+(parseInt(steps[i].slice(1)));
        console.log('right: ',store[dir],'dir: ',dir, 'store: ',store);
      }
      if(steps[i][0]==='L') {
          dir=dir-1;
          if(dir===-1){
              dir=3;
          }tmpNum=store[dir]+(parseInt(steps[i].slice(1)));
          store[dir]=tmpNum;
        console.log('left: ',store[dir],'dir: ',dir, 'store: ',store);
      }
  }
   console.log('***************** store *****************',store);
}


function keyPad (str,r,i) {

    var keypad={
        1:[1,2,3],
        2:[4,5,6],
        3:[7,8,9]
    };

    var currRow=r;
    var rowIndex=i;
    var code=[];
  //  console.log('start row,index',keypad[currRow][rowIndex])
    for (var i=0;i<str.length;i++){

        if(str[i]==='U') {

            currRow = currRow - 1;
           // console.log(rowIndex);
            if (currRow < 1) {
                currRow = 1;
                code.push(keypad[currRow][rowIndex]);
            }
        }
        if(str[i]==='D') {
            currRow = currRow + 1;
           // console.log(rowIndex);
            if (currRow > 3) {
                currRow = 3;
                code.push(keypad[currRow][rowIndex]);
            }
        }
        if(str[i]==='L') {
            rowIndex = rowIndex - 1;
           // console.log(rowIndex);
            if (rowIndex < 0) {
                rowIndex = 0;
                code.push(keypad[currRow][rowIndex]);
            }
        }
        if(str[i]==='R') {
            rowIndex = rowIndex + 1;
           // console.log(rowIndex);
            if (rowIndex > 2) {
                rowIndex = 2;
                code.push(keypad[currRow][rowIndex]);
            }
        }
    }
    console.log(code[code.length-1]);
}


function triangles(tri){

    var cnt=0;
    for(var i=0;i<tri.length;i++){
        var t1=tri[i][0];
        var t2=tri[i][1];
        var t3=tri[i][2];

        if(t1+t2>t3){
            console.log(tri[i]);
            cnt=cnt+1;
        }
// ||tri[i][0]+tri[i][2]>tri[i][1]||tri[i][1]+tri[i][2]>tri[i][0]
    }
console.log('POSSIBLE triangles: ',cnt)
}

function valOneTri(tri){

    var cnt=0;
    for(var i=0;i<tri.length;i++) {
        var tmpArr = tri[i];
        tmpArr = tmpArr.sort(function (a, b) {
            return a - b;
        });
        console.log('tri: ', tmpArr);
    if(tmpArr[i][0]+tmpArr[i][1]>tmpArr[i][2])
    cnt++; console.log(cnt);
    }
};


module.exports = {
    keyPad, calcBlockDistance,triangles,valOneTri
};



/*

var t1 = tmpArr[i][0];
var t2 = tmpArr[i][1];
var t3 = tmpArr[i][2];

if (t1 + t2 > t3) {
    cnt = cnt + 1;
}
*/
