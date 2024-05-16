
function toggleOtherInterest() {
    var otherCheckbox = document.getElementById('interest-other');
    var otherInterestInput = document.getElementById('otherInterest');
    otherInterestInput.style.display = otherCheckbox.checked ? 'block' : 'none';
}
