function searchf() {
    const searchText = document.getElementById('검색').value;
    location.href=`https://www.youtube.com/results?search_query=${searchText}`;
}