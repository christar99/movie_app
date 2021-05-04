import React from 'react';
import propTypes from "prop-types";

const movieILike = [
  {
    id: 1,
    name: "아저씨",
    url: "https://lh3.googleusercontent.com/proxy/g92aIAMk-lGHyTK3kRD6xJoxT_UbAvUFqkmiTqG-iECY6fw0lRuBDKV_yIp5SbvnDN0R1BW6_S7s48Oim62UmtXZ78Xq1-sjcbDRDEq-Va8CSaQzNjEFI_95QFO9Q5W2JzwcAmBXaYwONeibrO1wX-5iMU4d21eoWmH81uYO12d_jV1hHy9nsLT-3kJddynQu1Y4jVwlFg",
    rating: 8.5
  },
  {
    id: 2,
    name: "테이큰",
    url: "https://upload.wikimedia.org/wikipedia/ko/9/9b/%ED%85%8C%EC%9D%B4%ED%81%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    rating: 8.7
  },
  {
    id: 3,
    name: "엑스맨 데이즈오브퓨처패스트",
    url: "https://upload.wikimedia.org/wikipedia/ko/b/b5/%EC%97%91%EC%8A%A4%EB%A7%A8_%EB%8D%B0%EC%9D%B4%EC%A6%88_%EC%98%A4%EB%B8%8C_%ED%93%A8%EC%B2%98_%ED%8C%A8%EC%8A%A4%ED%8A%B8.jpg",
    rating: 9.1
  },
  {
    id: 4,
    name: "로건",
    url: "https://upload.wikimedia.org/wikipedia/ko/thumb/9/97/%EC%98%81%ED%99%94_%EB%A1%9C%EA%B1%B4.jpg/220px-%EC%98%81%ED%99%94_%EB%A1%9C%EA%B1%B4.jpg",
    rating: 9.4
  }
];

function Movie({name, picture, rating}) {
  return (
    <div>
      <h1>favorite movie: {name}</h1>
      <h2>{rating}/10</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

function App() {
  return (
    <div>
      {movieILike.map(dish => <Movie
        key={dish.id}
        name={dish.name}
        picture={dish.url}
        rating={dish.rating}
      />)}
    </div>
  );
}

Movie.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired
};


export default App;
