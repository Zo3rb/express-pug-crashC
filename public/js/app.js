
// Capturing The Global Elements Here
const form = document.querySelector('form');
const input = document.querySelector('input');


// Preventing The Form Submission if The Input Empty
form.addEventListener('submit', e => {
    if (input.value === '') {
        e.preventDefault();
        return alert('You Have to Enter a Product Term to be Added to Your Products');
    }
    return;
});
