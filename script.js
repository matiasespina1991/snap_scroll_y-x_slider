var parent = document.getElementById('parent');
var child = document.getElementsByClassName('child');
var radioBtnY = Array.from(document.getElementsByClassName("radio-btn-y"));

// Set Radio button 1 checked by default
if (parent.scrollTop == 0) {document.radioy.radioy.value="radio-btn-y-1"};

// Click function for radio button to scroll to the correspondent slide
radioBtnY.forEach(function(buttonY) {(buttonY.addEventListener('click', (e) => {
                e.preventDefault();
                parent.scrollTo({top: child[e.target.dataset.index].offsetTop, behavior: 'smooth'})})
            )
        }
    )

// Check radio buttons when scrolling to the correspondent slide
parent.addEventListener('scroll', () => {
    if (parent.scrollTop < child[1].offsetTop) {document.radioy.radioy.value="radio-btn-y-1"};
    if (parent.scrollTop >= child[1].offsetTop && parent.scrollTop < child[2].offsetTop) {document.radioy.radioy.value="radio-btn-y-2"};
    if (parent.scrollTop >= child[2].offsetTop && parent.scrollTop < child[3].offsetTop) {document.radioy.radioy.value="radio-btn-y-3"};
    if (parent.scrollTop >= child[3].offsetTop && parent.scrollTop < child[4].offsetTop) {document.radioy.radioy.value="radio-btn-y-4"};
    if (parent.scrollTop >= child[4].offsetTop) {document.radioy.radioy.value="radio-btn-y-5"};
    })

