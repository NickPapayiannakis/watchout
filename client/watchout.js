var h, w, svg, meteor, ship, totalScore, score;

// Board Creation
h = 400, w = 600;

// generate initial data set
var dataset = [
                [1,5],
                [34,23],
                [67,100],
                [100,123],
                [200,234],
                [500,345],
                [149,321],
                [345,210]
                          ];

// populate svg
svg = d3.select('body').append('svg')
      .attr('class', 'board')
      .attr('height', h)
      .attr('width', w);

asteroid = svg.selectAll('circle')
                 .data(dataset)
                 .enter()
                 .append('circle');

asteroid.attr("cx", function(d, i){
          return dataset[i][0];
        })
       .attr("cy", function(d, i){
        return dataset[i][1];
       })
       .attr("r", 15);

// Move asteroids
var moveAsteroids = function () {
  // Randomize dataset
  for (var i = 0; i < dataset.length; i++) {
    dataset[i][0] = (Math.random() * w); // x coord
    dataset[i][1] = (Math.random() * h);  // y coord
  }
  // Transition asteroid coordinates
  asteroid = svg.selectAll('circle')
            .data(dataset)
            .transition()
            .duration(500)
            .ease('linear')
            .attr("cx", function(d, i){
                return dataset[i][0];
              })
            .attr("cy", function(d, i){
              return dataset[i][1];
             })
            .attr("r", 15);
};

setInterval(moveAsteroids, 700)

//draggable player
var drag = d3.behavior.drag()
    .on("drag", function(d,i) {
        d.x += d3.event.dx
        d.y += d3.event.dy
        d3.select(this).attr("transform", function(d,i){
            return "translate(" + d.x + "," + d.y + ")"
        })
    });

var showPlayer = function(x, y, r) {
  d3.select('body').select('svg')
      .append('circle')
      .data([ {"x":x, "y":y} ])
      .call(drag)
      .attr("transform", "translate(" + x + "," + y + ")")
      .attr("class", "player")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", r)
      .attr("fill","blue");
}

showPlayer(100,100,30);




// Collision Detection

// Score keeping

//Total score
// $('.totalScore')

