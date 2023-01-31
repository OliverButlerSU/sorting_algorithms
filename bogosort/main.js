window.onload = function() {
    var canvas = document.getElementById("sortingCanvas");
    var ctx = canvas.getContext("2d");

    var sortingArray = [];

    function initLines()
    {
        for (var i=0; i<500; i++)
        {
            sortingArray[i] = Math.floor(((Math.random())*500))
        }
    }

    function drawLines(arr)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i=0; i<arr.length; i++)
        {
            ctx.beginPath(); 
            ctx.moveTo((i+1)*4+0.5, 0);
            ctx.lineTo((i+1)*4+0.5, arr[i]);
            ctx.stroke();
            ctx.moveTo(0,0);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function bogoSort(arr)
    {
        while(!sorted(arr)){
            for (var i = arr.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            drawLines(arr)
            await sleep (100)
        }
    }

    function sorted(arr){
        for(var i = 1; i < arr.length; i++){
            if(arr[i] < arr[i-1]){
                return false
            }
        }
        return true
    }


    initLines();
    drawLines(sortingArray);
    bogoSort(sortingArray);
}