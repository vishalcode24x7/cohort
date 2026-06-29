function a(fn){
    fn(function(fn3){
        fn3(function(fn5){
            fn5(function(fn7){
                fn7();
            });
        });
    });
}

a(function(fn2){
    fn2(function(fn4){
        fn4(function(fn6){
            fn6(function(){
                console.log("callbacks")
            });
        });
    });
});