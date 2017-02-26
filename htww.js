$(function () {
	$('#htww-input').on("change", function (e) {
		console.log(e)
		loadImage(
			e.target.files[0],
			image = function (canvas) {
				console.log(canvas)
				$('#htww canvas')[0].replaceWith(canvas);
				fillSpanvas($("#htww-spanvas"), canvas);
			},
			{
				canvas: true
			}
		);
	});
})


function pixelAt(imageData, x, y) {
	r = imageData.data[(x + imageData.width * y) * 4];
	g = imageData.data[(x + imageData.width * y) * 4 + 1];
	b = imageData.data[(x + imageData.width * y) * 4 + 2];
	a = imageData.data[(x + imageData.width * y) * 4 + 3];
	return "rgba(" + r + "," + g + "," + b + "," + a + ")"
}

function fillSpanvas (spanvas, canvas) {
	var ctx = canvas.getContext("2d");
	var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	console.log(imageData);

	spanvas.width(imageData.width);
	spanvas.height(imageData.height);

	for (var y = 0; y < imageData.height; y++) {
		for (var x = 0; x < imageData.width; x++) {
			dixel = $("<div>").width("1px").height("1px")
				.css("background-color", pixelAt(imageData, x, y))
				.css("float", "left");
			$("#htww-spanvas").append(dixel);
		}
	}
}
