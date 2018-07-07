var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://ocdn.eu/pulscms-transforms/1/isDktkqTURBXy9kMmM4YmI4N2QzY2U0ZjI5NmIzNTU3Mjk2ZTg2ZWY2My5qcGVnkZMCAM0B5A'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-CG8m-voqq-EoeZ_krol-lew-664x0-nocrop.jpg'
  },
  {
    id: 3,
    title: 'Władca pierśieni',
    desc: 'Film o hobbitach',
    img: 'https://ssl-gfx.filmweb.pl/q/q/77.0.jpg'
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id}, 
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
})

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));

