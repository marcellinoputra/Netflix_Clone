const APIKEY = "983bb093cba479acb080ed621420f366";

const request = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv/week?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated/week?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComendyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHororMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default request;