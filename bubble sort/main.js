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

    function bubbleSort(arr)
    {
        for (var i=0; i<arr.length-1; i++)
        {
            if (arr[i]>arr[i+1])
            {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            //console.log(arr);
            drawLines(arr);
        }
    }
    initLines();
    drawLines(sortingArray);
    var intervalID = setInterval(bubbleSort, 0.1, sortingArray);
}