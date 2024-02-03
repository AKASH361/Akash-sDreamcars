const pages = [
    'index.html',
    'lambohuracan.html',
    '720s.html',
    'ferrari.html',
    'pagani.html',
    'jesko.html'
];

let currentPageIndex = 0;

function scrollLeft() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        navigateToPage();
    }
}

function scrollRight() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        navigateToPage();
    }
}

function navigateToPage() {
    const nextPage = pages[currentPageIndex];
    window.location.href = nextPage;
}
