// js file for main subject -- can!
// fill the can with diff shapes and colors to represent memories!!

class CanShape {
    constructor(xCoor, yCoor) {
        this.xCoor = xCoor;
        this.yCoor = yCoor;
        this.width = 200;
        this.height = 240;
        this.color = color(192, 192, 192);

        // lid animation
        this.lidCenterX = 0;
        this.lidCenterY = -this.height/2;

        this.lidAngle = 0;
        this.dragAmount = 0; 
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
        this.displayTopLid();
        
        // side container lines
        line(-this.width/2, -this.height/2, -this.width/2, this.height/2);
        line(this.width/2, -this.height/2, this.width/2, this.height/2);

        // bottom lid - get rid of inner curve
        ellipse(0, this.height/2, this.width, this.width/5);
        ellipse(0, this.height/2 - 2, this.width - 5, this.width/5 - 2);
        

        pop();
    }

    displayTopLid() {
        fill(this.color);
    
        // top lid
        ellipse(0, -this.height / 2, this.width, this.width / 5);
        ellipse(0, -this.height / 2 + 2, this.width - 5, this.width / 5 - 2);
    
        // edges of can and ellipse
        let smallerEllipseWidth = this.width - 30;    
        let rightEdgeX = smallerEllipseWidth / 2;  
        let rightEdgeY = -this.height / 2;       
    
        push();
        
        // make the "new center" the edges so we can control the rotation from there
        translate(rightEdgeX, rightEdgeY); 
        
        let angle = atan2(mouseY - (this.yCoor + rightEdgeY),  mouseX - (this.xCoor + rightEdgeX));
        rotate(angle);

        ellipse(-((this.width - 30) / 2), 0, this.width - 30, this.width / 5 - 12);
        
        pop();
    }

    lidAnimate() {
        /* 
        :desc: should animate the lid opening, no need to 
        pass coords, as the naimation should remain clear
        the top lid could be its own entitiy, since it'll be 
        interactive
        rotate lid from the right 
        */
        let distToLid = map(mouseX, mouseY, this.xCoor, this.yCoor - this.height / 2);
        
        if (distToLid < 100) { 
            this.dragAmount = min(this.dragAmount + 0.05, 1); // opening lid
        } else {
            this.dragAmount = max(this.dragAmount - 0.05, 0); // closing lid
        }

        this.lidAngle = map(this.dragAmount, 0, 1, -PI / 2, 0);

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