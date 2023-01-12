new Promise(function(res){
    setTimeout(function() {
      res("after 3seconds");
    }, 3000);
}).then(() => {
    new Promise(function(res){
        setTimeout(function() {
          res(console.log("after 1seconds"));
        }, 5000);
    })
}).then(() => {
    new Promise(function(res){
        setTimeout(function() {
          res(console.log("after 5seconds"));
        }, 1000);
    })
});