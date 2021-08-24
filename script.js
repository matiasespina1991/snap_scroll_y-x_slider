var parent = document.getElementById('parent');
var horizontalFirstContainer = document.getElementById('horizontal-first-container');
var slideX_1 = document.getElementsByClassName('horizontal-1')
var slideY = document.getElementsByClassName('slide-y');
var slideYlabel = document.getElementsByClassName('slide-y-label');
var radioXbtn = document.getElementsByClassName('slide-x-label')
var radioBtnY = Array.from(document.getElementsByClassName("radio-btn-y"));

// Set Radio button 1 checked by default
if (parent.scrollTop == 0) {
    slideYlabel[0].style.backgroundColor = "#444"
};

if (horizontalFirstContainer.scrollLeft == 0) {
    radioXbtn[0].style.backgroundColor = "#444";
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
        if (parent.scrollTop < slideY[1].offsetTop) {slideYlabel[0].style.backgroundColor = "#444"; radioXbtn[0].style.display = "flex"} else {slideYlabel[0].style.backgroundColor = "transparent";};
        if (parent.scrollTop >= slideY[1].offsetTop && parent.scrollTop < slideY[2].offsetTop) {slideYlabel[1].style.backgroundColor = "#444"} else {slideYlabel[1].style.backgroundColor = "transparent"};
        if (parent.scrollTop >= slideY[2].offsetTop && parent.scrollTop < slideY[3].offsetTop) {slideYlabel[2].style.backgroundColor = "#444"} else {slideYlabel[2].style.backgroundColor = "transparent"};
        if (parent.scrollTop >= slideY[3].offsetTop && parent.scrollTop < slideY[4].offsetTop) {slideYlabel[3].style.backgroundColor = "#444"} else {slideYlabel[3].style.backgroundColor = "transparent"};
        if (parent.scrollTop >= slideY[4].offsetTop) {slideYlabel[4].style.backgroundColor = "#444"} else {slideYlabel[4].style.backgroundColor = "transparent"};
    }
)

horizontalFirstContainer.addEventListener('scroll', () => {
        if (horizontalFirstContainer.scrollLeft < slideX_1[1].offsetLeft) {radioXbtn[0].style.backgroundColor = "#444"; radioXbtn[1].style.backgroundColor = "transparent";} else {radioXbtn[0].style.backgroundColor = "transparent"; radioXbtn[1].style.backgroundColor = "#444";};
    }
)

parent.addEventListener('scroll', () => {
    if (parent.scrollTop < slideY[1].offsetTop) {radioXbtn[0].style.display = "flex"; radioXbtn[1].style.display = "flex"} else {radioXbtn[0].style.display = "none"; radioXbtn[1].style.display = "none"};
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
