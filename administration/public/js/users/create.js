const form = document.forms.formCreate;
const selectImage = form.querySelector('#imageSelect')
const previewImage = form.querySelector('#imagePreview')

selectImage.addEventListener('change', (e)=>{
    value = e.target.value
    const imgSrc = `/resources/img/${value}`
    console.log(imgSrc)
    previewImage.innerHTML = ''
    if (imgSrc) {
        const imgElement = document.createElement('img')
        imgElement.src = imgSrc
        previewImage.appendChild(imgElement)
        console.log(previewImage)
    }
})