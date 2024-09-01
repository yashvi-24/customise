const canvas = new fabric.Canvas('tshirt-canvas');

document.getElementById('color').addEventListener('input', function() {
    canvas.setBackgroundColor(this.value, canvas.renderAll.bind(canvas));
});

function addText() {
    const text = new fabric.Textbox('Custom Text', {
        left: 50,
        top: 50,
        width: 200,
        fontSize: 20
    });
    canvas.add(text);
}

function uploadImage() {
    const input = document.getElementById('upload-image');
    const reader = new FileReader();

    reader.onload = function (e) {
        fabric.Image.fromURL(e.target.result, function (img) {
            img.set({
                left: 50,
                top: 50,
                scaleX: 0.5,
                scaleY: 0.5
            });
            canvas.add(img);
        });
    };
    reader.readAsDataURL(input.files[0]);
}