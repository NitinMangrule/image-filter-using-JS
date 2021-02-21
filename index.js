let addImage = document.getElementById('add');
let imageElement = document.querySelector('img');
let imageData = document.querySelector('input');
let defaultImage = 'https://picsum.photos/id/1015/600/400';
addImage.addEventListener('click', () => {
    if (imageData.value) {
        imageElement.src = imageData.value || defaultImage;
    }
}, false);


filterImage.addEventListener('change', (event) => {
    if (filterImage.value) {
        let filterParamater = filterParams.value || 0;
        let params = validateParams(filterImage.value, filterParamater);
        params = filterImage.value === 'none' ? '' : `(${params})`;
        imageElement.style.filter = `${filterImage.value}${params}`;
    }
}, false);

filterParams.addEventListener('change', (event) => {
    if (filterImage.value && filterParams.value) {
        let params = validateParams(filterImage.value, filterParams.value);
        params = filterImage.value === 'none' ? '' : `(${params})`;
        imageElement.style.filter = `${filterImage.value}${params}`;
    }
}, false);

function validateParams(type, params) {
    switch (type) {
        case 'blur':
            params = params + 'px';
            break;

        case 'hue-rotate':
                params = parseInt(params) * 3.6 ;
                params = params + 'deg';
                break;

        case 'none':
                params = '';
                break;
        default:
            params = params + '%';
            break;
    }
    return params;
}