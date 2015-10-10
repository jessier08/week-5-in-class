/* New methods we are using:
 * selection.each
 * selection.selectAll
 * selection.filter
 */


/* Find the width and height of the .canvas elements
   Note that there are more than 1
 */

var canvasWidth = document.getElementById('canvas-1').clientWidth,
    canvasHeight = document.getElementById('canvas-1').clientHeight;

var margin = {t:20,r:20,b:20,l:20};
var plotWidth = canvasWidth - margin.l - margin.r,
    plotHeight = canvasHeight - margin.t - margin.b;

/* Ignore this part; the purpose is to draw some axes to guide our drawing 
d3.selectAll('.canvas')
    .each(appendGuide); */

/*TODO: Part 1 */

var plot = d3.select('#canvas-1')
	.append('svg')
	.attr('width', canvasWidth)
	.attr('height', canvasHeight)
	.append('g')
	.attr('transform','translate('+margin.l+','+margin.r+')');

plot
	.append('circle')
	.attr('cx',100)
	.attr('cy',100)
	.attr('r',50)
	.style('fill','none')
	.style('stroke','black')
	.style('stroke-width','1px');

plot
	.append('circle')
	.attr('cx',150)
	.attr('cy',100)
	.attr('r',50)
	.style('fill','white')
	.style('stroke','black')
	.style('stroke-width','1px');

plot
	.append('circle')
	.attr('cx',300)
	.attr('cy',200)
	.attr('r',75)
	.style('fill','white')
	.style('stroke','black')
	.style('stroke-width','1px')
	.text('(300,200)');

var newGroup = plot
	.append('g')
	.attr('class', 'confined-circle-text')

newGroup
	.append('circle')
	.attr('r',75)

newGroup
	.append('text')
	.text('(300,200)')

plot
	.append('g')
	.attr('class')

/*TODO: Part 2 */
var data = [
    {x:100,y:300,r:20},
    {x:150,y:400,r:10},
    {x:400,y:100,r:20},
    {x:600,y:90,r:5}
];

var plot2 = d3.select('#canvas-3')
	.append('svg')
	.attr('width', canvasWidth)
	.attr('height', canvasHeight)
	.append('g')
	.attr('transform','translate('+margin.l+','+margin.r+')');

data.forEach(function(element){
	
	var newGroup3 = plot2
		.append('g')
		.attr('transform','translate('+element.x+','+element.y+')');

	newGroup3
		.append('circle')
		.attr('r', element.r)
		.style('fill','red');

	newGroup3
		.append('text')
		.text(element.x + ',' + element.y);

});
