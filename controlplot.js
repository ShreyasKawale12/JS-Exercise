const new_svg= document.getElementById("svg-new");

let graph_width= 840
let graph_height= 360
let x_offset=40
let y_offset= 30
let x_interval= graph_width/60
let y_interval= graph_height/12

function scale(y){
    return graph_height - (y - 34) * y_interval+y_offset;
}
//draw x-axis:
drawLine(new_svg,{
    x1:x_offset, y1: graph_height+y_offset, x2: x_offset+ graph_width, y2: graph_height+y_offset
})
// draw y-axis:
drawLine(new_svg,{
    x1:x_offset, y1: y_offset, x2: x_offset, y2: graph_height+y_offset
})

//draw x axis ticks:
let x_ticks= graph_width/x_interval -1
for(let i=1; i<=x_ticks+1; i++){
    drawLine(new_svg,{
        x1: x_offset+ i*x_interval,
        y1: y_offset+graph_height+5,
        x2: x_offset+ i*x_interval,
        y2: y_offset+graph_height -5
    })// xaxis ticks
    drawText(new_svg,{
        x: x_offset+ i*x_interval -4,
        y: y_offset+graph_height+20,
        text: i.toString()

    })
}

//draw y axis ticks:
let y_ticks= graph_height/y_interval -1
console.log(y_ticks)
for(let i=0; i<=y_ticks+1; i++){
    drawLine(new_svg,{
        x1: x_offset-5,
        y1: y_offset+graph_height-i* y_interval,
        x2: x_offset,
        y2: y_offset+graph_height- i * y_interval
    })
    drawText(new_svg, {
        x: x_offset-17,
        y: y_offset+graph_height- i*y_interval +3   ,
        text: (34+i).toString()
    })
}



const averages_average = calculateAverage(averages)

drawLine(new_svg, {
    x1:x_offset,
    y1: scale(averages_average),
    x2: x_offset+ graph_width,
    y2: scale(averages_average),
    stroke: "green",
    strokeWidth:1.5
})


for(let i=-3; i<=3; i++){
    if(i===0){
        continue;
    }
    let stroke_iter= ["yellow","orange","red"]
    for(let j=0; j<= x_ticks+1; j++){
        drawLine(new_svg,{
            x1: x_offset + j*x_interval,
            y1: scale(averages_average + i),
            x2: x_offset + (j+1)*x_interval - 2,
            y2: scale(averages_average + i),
            stroke: stroke_iter[Math.abs(i)-1],
            strokeWidth: 1
        });
    }
}
function draw_green_circles(i){
    drawCircle(new_svg,{
        cx: x_offset + i*x_interval,
        cy: scale(averages[i-1]),
        r:1.5,
        fill: "green"
    })
}

function draw_red_circles(i){
    drawCircle(new_svg,{
        cx: x_offset + i*x_interval,
        cy: scale(averages[i-1]),
        r:1.5,
        fill: "red"
    })
}

showplot()

function showplot(){
    for(let i=1; i<=x_ticks+1; i++){
        draw_green_circles(i)
    }
}


function rule1(){
        showplot()

    for(let i=1; i<=x_ticks+1;i++){
        if(averages[i-1]>averages_average+3 || averages[i-1]<averages_average-3){
            draw_red_circles(i)

        } else{
            draw_green_circles(i)
        }
    }
}

function rule2(){
    showplot()
    let sequence_length= 5
    let indices = findAllSequences(averages,sequence_length)
    for(const item of indices){
        for(let i= item+1; i<=item+sequence_length; i++){
            draw_red_circles(i)
        }
    }

}

function rule_3(){
    showplot()
    let sequence_length= 5
    let indices_rule3 = rule3(averages, averages_average, sequence_length)
    for(const item of indices_rule3){
        for(let i= item+1; i<=item+sequence_length; i++){
            draw_red_circles(i)
        }
    }
}

function rule_4(){
    showplot()
    let indices_rule4= rule4(averages)
    for(const  item of indices_rule4){
        for(let i= item+1; i<=item+14; i++){
            draw_red_circles(i)
        }
    }

}

function rule_5(){
    showplot()
    let indices_rule5= rule5(averages, averages_average, 3)
    for(const item of indices_rule5){
        draw_red_circles(item+1)
    }
}
function rule_6(){
    showplot()
    let indices_rule6= rule6(averages, averages_average, 5)
    for(const item of indices_rule6){
        draw_red_circles(item+1)
    }
}

function rule_7(){
    showplot()
    let sequence_length=12
    let indices_rule7 = rule7(averages, averages_average, sequence_length)
    for(const item of indices_rule7){
        for(let i= item+1; i<=item+sequence_length; i++){
            draw_red_circles(i)
        }
    }
}

function text(text){
    drawText(new_svg,{

        x: x_offset,
        y: scale(45),
        text: text
    })

}

















