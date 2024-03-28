# 00-Misc

Not really a chapter but this is where the utilities for the rest of the chapters are kept.

For ease of use all of the utilities is exported form the 'utilities.js' but can also be called directly via named export.

### Example usage:

```js
import { foo } from 'utilities.js';
```

## Canvas

This is a class for generating canvases in the other pages to reduce bloat. 

If no dimensions are provided the canvas will default to 300 x 300.

### Example usage:

```js
import CanvasCreator from 'canvas.js';
const canvas = new CanvasCreator(800, 600).createCanvas();
```