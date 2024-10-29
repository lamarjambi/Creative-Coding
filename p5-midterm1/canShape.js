// js file for main subject -- can!

class CanShape {
    constructor(xCoor, yCoor) {
        this.xCoor = xCoor;
        this.yCoor = yCoor;
        this.width = 200;
        this.height = 240;
        this.color = color(192, 192, 192);
    }

    display() {
        // add shading later
        push();
        translate(this.xCoor, this.yCoor);
        
        // can color 
        noStroke();
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);

        stroke(0);
        strokeWeight(2);
        fill(this.color);
        
        // top lid
        ellipse(0, -this.height/2, this.width, this.width/5);
        ellipse(0, -this.height/2 + 2, this.width - 5, this.width/5 - 2);
        
        ellipse(0, -this.height/2, this.width - 40, this.width/5 - 20); // smaller ellipse
        
        // side container lines
        line(-this.width/2, -this.height/2, -this.width/2, this.height/2);
        line(this.width/2, -this.height/2, this.width/2, this.height/2);

        // bottom lid - get rid of inner curve
        ellipse(0, this.height/2, this.width, this.width/5);
        ellipse(0, this.height/2 - 2, this.width - 5, this.width/5 - 2);
        

        pop();
    }

    lidAnimate() {
        /* 
        :desc: should animate the lid opening, no need to 
        pass coords, as the naimation should remain clear
        */


    }

    // updateState(state) {
    //     switch(state) {
    //         case 'happy':
    //             this.color = color(192, 192, 192);
    //             break;
    //         case 'nostalgic':
    //             this.color = color(150, 150, 150);
    //             break;
    //     }
    // }
}