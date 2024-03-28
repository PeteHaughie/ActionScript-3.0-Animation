# ActionScript 3.0 Animation: Making Things Move!

Back in 2007 Keith Peters released a book about how to do animations for the almost end-of-life Flash environment.

As a resource for animation techniques it is excellent but as with many resources we tend to reinvent the wheel when new a technology rolls around instead of trying to recontextualise what has already been learned and taught.

I picked this book up for next to nothing from Abe Books and decided to reimplement the algorithms and examples in new paradigms.

Contained in this repository is the result of that process.

##  TODO:
Find a way of easily building and deploying the demo site via Github pages. By default Vite, my preferred localhost development environment, doesn't easily transfer. Will look into build actions and so forth. Nobody needs to get into Jekyll for something so dumb as this.

## Technologies

- Canvas (2D)
- P5.js (2D/3D)
- Pixi.js (2D)
- Three.js (3D)
- A-Frame.js (3D/XR)

## A Note on Co-ordinate Systems

In mathematics a co-ordinate system usually goes from negative to positive values:

```
    -1   

 -1  0  1

     1   
 ```

 This differs from other co-ordinate systems such as in P5.js/Processing and Pixi.js which start at 0:

 ```
 0  1  2

 1

 2
 ````

 We need to correct for this in most instances so you will often see objects offset by the half the width or height of the canvas to set the axes at correct point.

 If we ever get into shaders then it gets even weirder because the cordinate system goes from 0 to 1 across from left to right but 0 to 1 is from the bottom left upwards like this:

 ```
 1

 0  1
```

Literally every point between is a float.