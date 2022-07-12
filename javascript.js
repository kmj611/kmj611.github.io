var searchtext;
// `https://www.youtube.com/results?search_query=${searchtext}`

function searchf() {
    const searchText = document.getElementById('검색').value;
    location.href=`https://www.youtube.com/results?search_query=${searchText}`;
}