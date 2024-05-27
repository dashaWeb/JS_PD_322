

// let rectangle = {
//     width:200,
//     height:100,
//     backgroundColor:"aqua",
//     border:"1px solid brown"
// }

// let rectangle_1 = {
//     width:200,
//     height:100,
//     backgroundColor:"orange",
//     border:"1px solid brown"
// }

// let ellipse = {
//     width:200,
//     height:100,
//     backgroundColor:"red",
//     borderRadius:"50%"
// }
// let circle = {
//     width:200,
//     height:200,
//     backgroundColor:"green",
//     borderRadius:"50%"
// }

// let triangle = {
//     width:0,
//     height:0,
//     backgroundColor:"none",
//     borderRadius:"0%",
//     borderLeft:"50px solid transparent",
//     borderRight:"50px solid transparent",
//     borderBottom:"50px solid #24375B;",
// }

class RootFigure
{
    #name;
    constructor(width,height, bg_color = "red", color = "black")
    {
        this.width = width
        this.height = height
        this.bg_color = bg_color
        this.color = color
        this.display = "flex"
        this.figure_style = `width:${this.width}px; height:${this.height}px; background-color:${this.bg_color}; color:${this.color}; display:${this.display}; justify-content:center; align-items:center;`
    }

    create()
    {
        document.write(`<div style = "${this.figure_style}"> ${this.#name} </div>`)
    }
    set(value)
    {
        this.#name = (value.trim()).length < 1 ? "Rectangle" : value.trim();
    }
}

class Rectangle extends RootFigure {
    constructor(width,height, bg_color = "red", color = "black")
    {
        super(width,height,bg_color,color);
    }
}


class Circle extends RootFigure {

    constructor(width, bg_color = "red", color = "black")
    {
       super(width,width,bg_color,color);
       this.border_radius = "50%";
       this.figure_style += `border-radius:${this.border_radius}; border:1px solid black;`
    }
}

class Triangle extends RootFigure
{
    constructor(width, height,bg_color)
    {
        super(width,height,bg_color);
    }
    create()
    {
        document.write(`<div style = "width:0;height:0; border-left: ${this.width/2}px solid transparent;border-right: ${this.width/2}px solid transparent;border-bottom: ${this.height}px solid #24375B;"></div>`)
    }
}
let rg_1 = new Rectangle(200,300,"blue","white")
rg_1.set("Blue Rectangle");
rg_1.create();
let rg_2 = new Rectangle(200,300,"yellow")
rg_2.set("Yellow Rectangle");
rg_2.create();

let circle_1 = new Circle(200,"green","white");
circle_1.set("Green Circle");
circle_1.create();

let triangle_1 = new Triangle(100,100,"purple")
triangle_1.create();