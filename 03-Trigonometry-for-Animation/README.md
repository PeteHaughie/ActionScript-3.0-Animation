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

I was genuinely surprised how close to the flash and canvas path versions of the arrow were. Almost copy and paste.

The book offers two solutions to determining the angle between the arrow and the user cursor position but only one, atan2, worked correctly for me. The other caused the arrow to flip horizontally and vertically if the calculated mouse position was negative. This is mentioned in the book and I would have saved myself hours of headache if I had bothered to read the next page.

```as3
var radians = Math.atan(dy / dx);
var radians = Math.atan2(dy, dx);
```