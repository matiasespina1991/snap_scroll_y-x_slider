var parent = document.getElementById('parent');
var slideY = document.getElementsByClassName('slide-y');
var slideYlabel = document.getElementsByClassName('slide-y-label');
var radioBtnY = Array.from(document.getElementsByClassName("radio-btn-y"));

// Set Radio button 1 checked by default
if (parent.scrollTop == 0) {
    slideYlabel[0].style.backgroundColor = "#444"
};

// Click function for radio button to scroll to the correspondent slide
radioBtnY.forEach(function(buttonY) {(buttonY.addEventListener('click', (e) => {
            e.preventDefault();
            parent.scrollTo(
                        {   
                            top: slideY[e.target.dataset.index].offsetTop,
                            behavior: 'smooth'
                        }
                    );
                }
            )
        )
    }
)

// Check the label of the radio buttons when scrolling to the correspondent slide
parent.addEventListener('scroll', () => {
        if (parent.scrollTop < slideY[1].offsetTop) {slideYlabel[0].style.backgroundColor = "#444"} else {slideYlabel[0].style.backgroundColor = "transparent"};
        if (parent.scrollTop >= slideY[1].offsetTop && parent.scrollTop < slideY[2].offsetTop) {slideYlabel[1].style.backgroundColor = "#444"} else {slideYlabel[1].style.backgroundColor = "transparent"};
        if (parent.scrollTop >= slideY[2].offsetTop && parent.scrollTop < slideY[3].offsetTop) {slideYlabel[2].style.backgroundColor = "#444"} else {slideYlabel[2].style.backgroundColor = "transparent"};
        if (parent.scrollTop >= slideY[3].offsetTop && parent.scrollTop < slideY[4].offsetTop) {slideYlabel[3].style.backgroundColor = "#444"} else {slideYlabel[3].style.backgroundColor = "transparent"};
        if (parent.scrollTop >= slideY[4].offsetTop) {slideYlabel[4].style.backgroundColor = "#444"} else {slideYlabel[4].style.backgroundColor = "transparent"};
    }
)

// Check radio buttons when scrolling to the correspondent slide // ignored
// parent.addEventListener('scroll', () => {
//         if (parent.scrollTop < slideY[1].offsetTop) {document.radioy.radioy.value="radio-btn-y-1"};
//         if (parent.scrollTop >= slideY[1].offsetTop && parent.scrollTop < slideY[2].offsetTop) {document.radioy.radioy.value="radio-btn-y-2"};
//         if (parent.scrollTop >= slideY[2].offsetTop && parent.scrollTop < slideY[3].offsetTop) {document.radioy.radioy.value="radio-btn-y-3"};
//         if (parent.scrollTop >= slideY[3].offsetTop && parent.scrollTop < slideY[4].offsetTop) {document.radioy.radioy.value="radio-btn-y-4"};
//         if (parent.scrollTop >= slideY[4].offsetTop) {document.radioy.radioy.value="radio-btn-y-5"};
//     }
// )
