const mugCanvas = new fabric.Canvas('mug-canvas');

document.getElementById('mug-color').addEventListener('input', function() {
    mugCanvas.setBackgroundColor(this.value, mugCanvas.renderAll.bind(mugCanvas));
});

function addMugText() {
    const text = new fabric.Textbox('Custom Text', {
        left: 100,
        top: 100,
        width: 200,
        fontSize: 20
    });
    mugCanvas.add(text);
}

function uploadMugImage() {
    const input = document.getElementById('upload-mug-image');
    const reader = new FileReader();

    reader.onload = function (e) {
        fabric.Image.fromURL(e.target.result, function (img) {
            img.set({
                left: 100,
                top: 100,
                scaleX: 0.5,
                scaleY: 0.5
            });
            mugCanvas.add(img);
        });
    };
    reader.readAsDataURL(input.files[0]);
}