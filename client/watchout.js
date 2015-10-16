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
