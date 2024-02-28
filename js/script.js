function filterWorks(category) {
    // Get all work items
    let items = document.querySelectorAll('.item');

    // Loop through each item and show/hide based on category
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}