function toggleOtherInterest() {
    let otherInterest = document.getElementById('otherInterest');
    let otherCheckbox = document.getElementById('interest-other');
    if (otherCheckbox.checked) {
        otherInterest.style.display = 'block';
    } else {
        otherInterest.style.display = 'none';
    }
}