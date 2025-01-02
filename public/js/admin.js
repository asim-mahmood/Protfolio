function showPreview(event, inputId) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewId = inputId ? inputId + 'Preview' : event.target.id + 'Preview';
            const previewElement = document.getElementById(previewId);
            previewElement.src = e.target.result;
            previewElement.style.display = 'block';
             // Update the file name display if applicable
            const fileNameElement = event.target.nextElementSibling;
            if (fileNameElement) {
                fileNameElement.textContent = file.name;
            }
        };
        reader.readAsDataURL(file);
    }
}