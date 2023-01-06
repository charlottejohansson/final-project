
import axios from 'axios';

const Search = async (req, res) => {
    const options = {
      method: "GET",
      url: "streaming-availability.p.rapidapi.com/search",
      params: { title: req.query.title, page: "1" },
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
       "x-rapidapi-key": PUBLIC_RAPIDAPI_KEY,

      },
    };
    axios
      .request(options)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  export default Search;