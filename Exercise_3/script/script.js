//Take a moment to set up the drawing environment yourself
//var width = $('.canvas').width(),
  var height = $('.canvas').height();

var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('canvas').clientWidth-margin.l-margin.r;
   // height = document.getElementById('canvas').clientHeight-margin.t-margin.b;


var canvas = d3.select('.canvas')
    .append('svg')
    .attr('width', width+margin.l+margin.r)
    .attr('height',height)
    .append('g')
    .attr('transform','translate('+margin.l+','+margin.r+')');


d3.csv('data/world_bank_2013.csv', 
    function(oldData){
        var newData = {
            gdpPerCap: +oldData.GDP_per_capita,
            pctUsers: +oldData.internet_users_per_100,
            country: oldData.country
        }

        return newData;
    }, 

    function(err, rows){
        var minGdpPerCap = d3.min(rows,function(oldData){return oldData.gdpPerCap}),
            maxGdpPerCap = d3.max(rows,function(oldData){return oldData.gdpPerCap});

        var minPctUsers = d3.min(rows,function(oldData){return oldData.pctUsers}),
            maxPctUsers = d3.max(rows,function(oldData){return oldData.pctUsers});

        var scaleX = d3.scale.linear()
            .domain([minGdpPerCap,maxGdpPerCap])
            .range([0,width]);

        var scaleY = d3.scale.linear()
            .domain([minPctUsers,maxPctUsers])
            .range([height,0]);

        rows.forEach(function(country){
            var xPos = scaleX(country.gdpPerCap)
            var yPos = scaleY(country.pctUsers);

            var dataPoint = canvas.append('g')
                .attr('class','country')
                .attr('transform','translate('+xPos+','+yPos+')');

            dataPoint
                .append('circle')
                .attr('r',10)
                .style('fill-opacity',.5);

            dataPoint
                .append('text')
                .text(country.country);


        })


    }

);


