/**
 * Define Global Variables
 * 
//  */

const navMenu = document.querySelector('#nav-list');
const navSections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav
function buildNav() {
    const fragment = document.createDocumentFragment();

    navSections.forEach((navSection) => {
        const liTag = document.createElement('li');
        const aTag = document.createElement('a');
        aTag.innerText = navSection.getAttribute('data-nav');
        aTag.setAttribute('class', 'menu-link');
        // scroll to anchor ID using scroll to event
        aTag.addEventListener("click", () => {
            navSection.scrollIntoView({behavior: "smooth"});
            });
        liTag.appendChild(aTag);
        fragment.appendChild(liTag);
    });
    navMenu.appendChild(fragment);
};

function sectionIndex() {
    let minor = window.innerHeight;
    visibleSectionIndex = -1;

    navSections.forEach((navSection, index) => {
        let offset = navSection.getBoundingClientRect();
        if(Math.abs(offset.top) < minor){
            minor = Math.abs(offset.top);
            visibleSectionIndex = index;
        }
    });
    return visibleSectionIndex;
}

function activeSection(){
    visibleSectionIndex = sectionIndex();

    // If visibleSection exists
    if(visibleSectionIndex != -1){
        // create a list of Atags from nav menu
        let TagList = document.querySelectorAll('.menu-link');

        // Loop through all section
        for (let i = 0; i < navSections.length; i++) {
            //  Add active state to the section and nav
            if (i == visibleSectionIndex){
                navSections[i].classList.add('active-class');
                TagList[i].classList.add('active-class');
            }
            //  Remove active state from the section and nav
            else{
                navSections[i].classList.remove('active-class');
                TagList[i].classList.remove('active-class');
            }
        }; 
    };
}

// Build nav menu
buildNav();
document.addEventListener('scroll', activeSection);