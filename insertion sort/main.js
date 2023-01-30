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

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function insertionSort(arr)
    {
        for (var i=1; i < arr.length; i++){
            key = arr[i]
            j = i-1
            while (arr[j] > key && j > 0){
                arr[j+1] = arr[j]
                j--
            }
            arr[j+1] = key
            drawLines(arr);
            await sleep(10);
        }
    }


    initLines();
    drawLines(sortingArray);
    insertionSort(sortingArray);
}