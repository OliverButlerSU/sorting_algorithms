window.onload = function() {
    var canvas = document.getElementById("sortingCanvas");
    var ctx = canvas.getContext("2d");

    var sortingArray = [];

    //creates array with 250 random elements
    function initLines()
    {
        for (var i=0; i<250; i++)
        {
            sortingArray[i] = Math.floor(((Math.random())*500))
        }
    }

    //draws lines from array arr
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

	async function sort(arr)
	{
		/*
		SORTING ALGORITHM GOES HERE

		REMEMBER TO CALL drawLines() EVERY ITERATION
        USE SLEEP AS WELL
		*/
	}

    initLines();
    drawLines(sortingArray, 0);
    sort(arr)
}
