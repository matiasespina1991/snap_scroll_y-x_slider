var globalContainer = document.getElementById('global-container');
var radioBtnY = Array.from(document.getElementsByClassName("radio-btn-y"));
var radioBtnYLabel = document.getElementsByClassName('radio-btn-y-label');

var radioBtnXFirst = Array.from(document.getElementsByClassName("radio-btn-x-first"));
var radioBtnXSecond = Array.from(document.getElementsByClassName("radio-btn-x-second"));
var slideX = document.getElementsByClassName('sub-child');

var horizontalFirstContainer = document.getElementById('horizontal-slide-first-container'); 
var horizontalSecondContainer = document.getElementById('horizontal-slide-second-container'); 
var slideX_1 = document.getElementsByClassName('horizontal-slide-1')
var slideY = document.getElementsByClassName('slide-y');
var radioBtnXLabel = document.getElementsByClassName('radio-btn-x-label')


// Set Radio button 1 checked by default
if (globalContainer.scrollTop == 0) {
    radioBtnYLabel[0].style.backgroundColor = "#fffdc796"
};

if (horizontalFirstContainer.scrollLeft == 0) {
    radioBtnXLabel[0].style.backgroundColor = "#fffdc796";
};

// Click function for radio button to scroll to the correspondent slide
radioBtnY.forEach(function(buttonY) {(buttonY.addEventListener('click', (e) => {
            e.preventDefault();
            globalContainer.scrollTo(
                        {   
                            top: slideY[e.target.dataset.index].offsetTop,
                            behavior: 'smooth'
                        }
                    )
                }
            )
        )
    }
)

radioBtnXFirst.forEach(function(buttonX) {(buttonX.addEventListener('click', (e) => {
            e.preventDefault();
            horizontalFirstContainer.scrollTo(
                        {   
                            left: slideX[e.target.dataset.index].offsetLeft,
                            behavior: 'smooth'
                        }
                    )
                }
            )
        )
    }
)

// radioBtnXSecond.forEach(function(buttonX) {(buttonX.addEventListener('click', (e) => {
//             e.preventDefault();
//             horizontalSecondContainer.scrollTo(
//                         {   
//                             left: slideX[e.target.dataset.index].offsetLeft,
//                             behavior: 'smooth'
//                         }
//                     );
//                 }
//             )
//         )
//     }
// )

// Check the label of the radio buttons when scrolling to the correspondent slide
globalContainer.addEventListener('scroll', () => {
        if (globalContainer.scrollTop < slideY[1].offsetTop * 0.5) {radioBtnYLabel[0].style.backgroundColor = "#fffdc796"; radioBtnXLabel[0].style.display = "flex"} else {radioBtnYLabel[0].style.backgroundColor = "transparent";};
        if (globalContainer.scrollTop >= slideY[1].offsetTop * 0.5 && globalContainer.scrollTop < slideY[2].offsetTop * 0.6) {radioBtnYLabel[1].style.backgroundColor = "#fffdc796"} else {radioBtnYLabel[1].style.backgroundColor = "transparent"};
        if (globalContainer.scrollTop >= slideY[2].offsetTop * 0.6 && globalContainer.scrollTop < slideY[3].offsetTop * 0.7) {radioBtnYLabel[2].style.backgroundColor = "#fffdc796"} else {radioBtnYLabel[2].style.backgroundColor = "transparent"};
        if (globalContainer.scrollTop >= slideY[3].offsetTop * 0.7 && globalContainer.scrollTop < slideY[4].offsetTop * 0.8) {radioBtnYLabel[3].style.backgroundColor = "#fffdc796"} else {radioBtnYLabel[3].style.backgroundColor = "transparent"};
        if (globalContainer.scrollTop >= slideY[4].offsetTop * 0.8) {radioBtnYLabel[4].style.backgroundColor = "#fffdc796"} else {radioBtnYLabel[4].style.backgroundColor = "transparent"};
    }
)

horizontalFirstContainer.addEventListener('scroll', () => {
        if (horizontalFirstContainer.scrollLeft < slideX_1[1].offsetLeft * 0.6) {radioBtnXLabel[0].style.backgroundColor = "#fffdc796"; radioBtnXLabel[1].style.backgroundColor = "transparent";} else {radioBtnXLabel[0].style.backgroundColor = "transparent"; radioBtnXLabel[1].style.backgroundColor = "#fffdc796";};
    }
)

globalContainer.addEventListener('scroll', () => {
    if (globalContainer.scrollTop < slideY[1].offsetTop / 2) {radioBtnXLabel[0].style.opacity = "1"; radioBtnXLabel[1].style.opacity = "1"} else {radioBtnXLabel[0].style.opacity = "0"; radioBtnXLabel[1].style.opacity = "0"};
}
)

// Check radio buttons when scrolling to the correspondent slide // ignored
// global-container.addEventListener('scroll', () => {
//         if (global-container.scrollTop < slideY[1].offsetTop) {document.radioy.radioy.value="radio-btn-y-1"};
//         if (global-container.scrollTop >= slideY[1].offsetTop && global-container.scrollTop < slideY[2].offsetTop) {document.radioy.radioy.value="radio-btn-y-2"};
//         if (global-container.scrollTop >= slideY[2].offsetTop && global-container.scrollTop < slideY[3].offsetTop) {document.radioy.radioy.value="radio-btn-y-3"};
//         if (global-container.scrollTop >= slideY[3].offsetTop && global-container.scrollTop < slideY[4].offsetTop) {document.radioy.radioy.value="radio-btn-y-4"};
//         if (global-container.scrollTop >= slideY[4].offsetTop) {document.radioy.radioy.value="radio-btn-y-5"};
//     }
// )

