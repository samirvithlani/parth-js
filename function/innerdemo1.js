function outer (){

        console.log("I am outer function");
        function inner(){

            console.log("I am inner function");
        }

        inner();

}


outer();
