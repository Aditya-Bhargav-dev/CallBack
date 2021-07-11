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



