// function cal(a, b, callback){
//     var addition = a + b;
//     var substraction = a - b;
//     var multiplication = a * b;
//     var division = a / b;

//     var ans=[addition,substraction,multiplication,division];
//     callback(ans);
// }

// cal(10, 2);
// cal(10,2,function(ans)
// {
//     console.log(ans);
// })

// calc = function(a, b, calcType) {
//     if (calcType === "add") {
//         return a + b;
//     }
//     else if(calcType === "multiply") {
//         return a * b;
//     }
// };

// console.log(calc(2, 3, "add"));        // 5
//console.log(calc(2, 3, "multiply"));

// function sendRequest(uri, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", uri);
//     xhr.send();
//     xhr.onload = function () {
//       success(JSON.parse(this.response));
//     };
//     xhr.onerror = function () {
//       error(xhr.statusText);
//     };
//   }

//   sendRequest(
//     "https://restcountries.eu/rest/v2/all",
//     function (result) {
//       let code = result[14].currencies[0].code;
//       console.log(code);
//     },
//     function (err) {
//       console.log(err);
//     }
//   );

var p = document.getElementById("p");
p.innerHTML = 10;
function timer(countdown) {
  setTimeout(() => { countdown(); }, 1000);
}

timer(function () {
  p.innerHTML -= 1;
  timer(function () {
    p.innerHTML -= 1;
    timer(function () {
      p.innerHTML -= 1;
      timer(function () {
        p.innerHTML -= 1;
        timer(function () {
          p.innerHTML -= 1;
          timer(function () {
            p.innerHTML -= 1;
            timer(function () {
              p.innerHTML -= 1;
              timer(function () {
                p.innerHTML -= 1;
                timer(function () {
                  p.innerHTML -= 1;
                  timer(function () {
                    p.innerHTML = "Happy Independce day";
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});



