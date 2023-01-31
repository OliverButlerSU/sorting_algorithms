window.onload = function() {
    var canvas = document.getElementById("sortingCanvas");
    var ctx = canvas.getContext("2d");

    var sortingArray = [];

    function initLines()
    {
        for (var i=0; i<250; i++)
        {
            sortingArray[i] = Math.floor(((Math.random())*500))
        }
    }

    function drawLines(arr, index)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i=0; i<arr.length; i++)
        {
            if(index == i){
                ctx.strokeStyle = 'red'
            } else{
                ctx.strokeStyle = 'black'
            }
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

    async function selectionSort(arr)
    {
        for (var i=0; i < arr.length-1; i++){
            var min = i
            for(var j = i+1; j< arr.length; j++){
                if(arr[j] < arr[min]){
                    min = j
                }
            }
            var temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
            drawLines(arr, i);
            await sleep(10);
        }
    }


    initLines();
    drawLines(sortingArray);
    selectionSort(sortingArray);
}