var React = require('react');
var Slider = require('react-slick');

var SingleItem = React.createClass({
  render: function () {
    var settings = {
      dots: true,
    }
    return (
      <div>
        <h3> Image slider with one item at a time</h3>
        <Slider {...settings}>
          <div><img src="/img/autumn.jpg" alt=""/></div>
          <div><img src="/img/itaipu.jpg" alt=""/></div>
          <div><img src="/img/mantis.png" alt=""/></div>
          <div><img src="/img/new-zealand.jpg" alt=""/></div>
          <div><img src="/img/river.jpg" alt=""/></div>
          <div><img src="/img/sun.jpg" alt=""/></div>
        </Slider>
      </div>
    );
  }
});

var MultipleItems = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      slidesToShow: 3
    }
    return (
      <div>
        <h3> Image slider with three item at a time</h3>
        <Slider {...settings}>
          <div><img src="/img/lazyfonz1.png" alt=""/></div>
          <div><img src="/img/lazyfonz2.png" alt=""/></div>
          <div><img src="/img/lazyfonz3.png" alt=""/></div>
          <div><img src="/img/lazyfonz4.png" alt=""/></div>
          <div><img src="/img/lazyfonz5.png" alt=""/></div>
          <div><img src="/img/lazyfonz6.png" alt=""/></div>
        </Slider>
      </div>
    );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <SingleItem />
        <MultipleItems />
      </div>
    );
  }
});

React.render(<App />, document.body)