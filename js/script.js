document.addEventListener('DOMContentLoaded', function() {
    openPopup();
});

function openPopup() {
    var popup = document.getElementById('popupContainer');
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popupContainer');
    popup.style.display = 'none';
}