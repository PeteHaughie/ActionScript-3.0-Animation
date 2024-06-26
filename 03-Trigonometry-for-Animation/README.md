# Chapter 03: Trigonometry for Animation

## 01: Rotation

### Original code:

#### Arrow

```as3
package {
  import flash.display.Sprite;

  public class Arrow extends Sprite {
    public function Arrow() {
      init();
    }
    public function init():void {
      graphics.lineStyle(1, 0, 1);
      graphics.beginFill(0xffff00);
      graphics.moveTo(-50, -25);
      graphics.lineTo(0, -25);
      graphics.lineTo(0, -50);
      graphics.lineTo(50, 0);
      graphics.lineTo(0, 50);
      graphics.lineTo(0, 25);
      graphics.lineTo(-50, 25);
      graphics.lineTo(-50, -25);
      graphics.endFill();
    }
  }
}
```

#### Renderer

```as3
var dx:Number = mouseX - arrow-x;
var dy:Number = mouseY - arrow.y;
var radians:Number = Math.atan2(dy, dx);
arrow.rotation = radians * 180 / Math.PI;

package {
  import flash.display.Sprite;
  import flash.events.Event;

  public class RotateToMouse extends Sprite {
    private var arrow:Arrow;

    public function RotateToMouse() {
      init();
    }
    private function init():void {
      arrow = new Arrow;
      addChild(arrow);
      arrow.x = stage.stageWidth / 2;
      arrow.y = stage.stageHeight / 2;
      addEventListener(Event.ENTER_FRAME, onEnterFrame);
    }
    public function onEnterFrame(event:Event):void {
      var dx:Number = mouseX - arrow.x;
      var dy:Number = mouseY - arrow.y;
      var radians:Number = Math.atan2(dy, dx);
      arrow.rotation= radians * 180 / Math.PI;
    }
  }
}
```

## Notes:

### Vanilla

I was genuinely surprised how close to the flash and canvas path versions of the arrow were. Almost copy and paste.

The book offers two solutions to determining the angle between the arrow and the user cursor position but only one, atan2, worked correctly for me. The other caused the arrow to flip horizontally and vertically if the calculated mouse position was negative. This is mentioned in the book and I would have saved myself hours of headache if I had bothered to read the next page.

```as3
var radians = Math.atan(dy / dx);
var radians = Math.atan2(dy, dx);
```

### P5

The way graphics are created in P5 is a bit unique to the library which is echoed in the class. Generating the actual arrow is very similar to the Vanilla and AS3 method but uses points or vertexes instead of lines between points. I quite like the TURTLE style of drawing shapes because it reminds me of drawing on the BBC.

## 02: Waves

### Original code:

```as3
for(var angle:Number = 0; angle < Math.PI * 2; angle += 0.1>) {
  trace(Math.sin(angle));
}
```

## Notes:

There was a fair bit of extra code just to get the scaling correct on both canvases.

### Vanilla

Nothing of much to note initially.

### P5

It took me by surprise that the coordinate system was reversed on the y axis which I wouldn't have noticed until I saw the sine was inverted.
