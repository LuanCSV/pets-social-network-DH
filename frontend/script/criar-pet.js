const previewImg = document.querySelector('#previewImg');

const loadPreviewImage = (e) => {
  previewImg.src = URL.createObjectURL(e.target.files[0]);
  previewImg.onload = function() {
    URL.revokeObjectURL(previewImg.src) // free memory
  }
}