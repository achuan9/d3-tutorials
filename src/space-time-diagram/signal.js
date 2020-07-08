export default class Light {
    constructor(face, timings, flash, safety) {
      console.assert(["solid", "left", "right", "cycle"].indexOf(face) != -1, `invalid face ${face}`)
      this.face = face // solid, left, right, bike
      console.assert(timings.length == 3, `unexpected timings ${timings}`)
      this.timings = timings
      if (flash == null) {flash = [false, false, false]}
      console.assert(flash.length == 3, `unexpected flash ${flash}`)
      this.flash = flash; // [false, false, true]
      this.safety = safety;
    }
    position(x, y, w, h) {
      this.x = x
      this.y = y
      this.w = w
      this.h = h
    }
    current_phase(t) {
      let cycle = d3.sum(this.timings)
      t = t % cycle
      let o = 0
      for (let i=0; i < 3; i++) {
        o += this.timings[i]
        if (t < o) {
          return 2-i
        }
      }
      return 2
    }
    is_safe(t) {
      if (this.safety === undefined) {return undefined}
      return this.safety[2-this.current_phase(t)];
    }
    is_flashing(i, t) {
      return this.flash[i] && (t % 2 == 0)
    }
    color(idx, phase, flashing) {
      if (idx != phase) {
         return "#000"
      }
      if (idx == 3) {
         // invalid
         return "#a0a"
      }
      // green
      if (idx == 2 && flashing) {
         return "#060"
      }
      if (idx == 2) {
         return "#0f0"
      }
      // yellow
      if (idx == 1 && flashing) {
        return "#660"
      }
      if (idx == 1) {
        return "#FF0"
      }
      // red
      if (idx == 0 && flashing) {
        return "#600"
      }
      if (idx == 0) {
        return "#f00"
      }
      // invalid
      return "#aa0"
    }
    draw(c, t) {
        let phase = this.current_phase(t)
        let x = this.x
        let y = this.y
        let w = this.w
        let h = this.h
        c.moveTo(x, y)
        c.fillStyle = "#999";
        c.fillRect(x, y, w, h);
        c.strokeStyle = "";
        h -= 8; // 2 padding
        let block = h / 3.0;
      
        for (let i=0; i < 3; i++) {
          c.beginPath();

          let cx = x+(w/2);
          let cy = y + (i * block) + (i * 2) + (block/2) + 2;
          
          if (this.face == "cycle") {
            // https://upload.wikimedia.org/wikipedia/commons/d/db/USDOT_highway_sign_bicycle_symbol_-_black.svg
            // c.moveTo(cx, cy)
            c.fillStyle = "#000"
            c.arc(cx, cy, block / 2, 0, 2 * Math.PI);
            c.fill();
            let bikePath = "M"+cx+" "+cy+" m 1.75 1 l 1.54 -0.25 l -0.97 -1.26 c -0.50 0.44 -0.56 0.96 -0.57 1.51 z m -0.42 0.09 c -0.00 -0.05 -0.01 -0.14 -0.01 -0.20 c 0.00 -0.62 0.20 -1.23 0.75 -1.73 l -0.57 -0.68 l -0.88 2.69 l 0.71 -0.07 z m -3.38 -2.68 l 0.05 -0.15 l 3.14 -0.00 l -0.84 2.53 l -0.04 -0.26 h 0.10 l -0.01 -0.17 h -0.42 l 0.01 0.16 h 0.11 l 0.02 0.29 c 0.00 0.00 -2.11 -2.38 -2.13 -2.39 z m -1.39 2.43 c 0.42 -0.33 0.75 -0.65 0.99 -1.29 c 0.37 0.34 0.59 0.83 0.59 1.33 c 0.00 1.00 -0.82 1.82 -1.82 1.82 s -1.82 -0.82 -1.82 -1.82 s 0.82 -1.82 1.82 -1.82 c 0.32 0.00 0.65 0.09 0.91 0.25 c -0.18 0.56 -0.35 0.85 -0.90 1.30 c -0.13 0.01 -0.23 0.11 -0.23 0.24 c 0.00 0.13 0.11 0.24 0.24 0.24 c 0.13 -0.00 0.23 -0.11 0.23 -0.25 z m 5.26 0.54 c 0.21 0.77 0.94 1.32 1.75 1.32 c 1.00 0.00 1.82 -0.82 1.82 -1.82 s -0.82 -1.82 -1.82 -1.82 c -0.32 0.00 -0.69 0.08 -0.96 0.23 l 0.99 1.31 c 0.12 0.00 0.23 0.11 0.23 0.24 c 0.00 0.13 -0.11 0.24 -0.24 0.24 c -0.04 0.00 -0.08 -0.01 -0.11 -0.02 l -1.65 0.32 z m -4.47 -2.49 l 0.64 -1.78 l -0.20 -0.35 l 0.41 -0.44 h 0.88 l 0.01 0.25 h -0.77 l -0.16 0.17 l 0.18 0.32 l -0.23 0.80 h 3.15 l 0.05 -0.15 c -0.25 -0.03 -0.69 -0.19 -0.79 -0.28 s -0.01 -0.17 0.11 -0.18 c 0.62 -0.03 1.54 -0.08 1.72 -0.08 c 0.18 -0.00 0.19 0.09 0.08 0.22 c -0.12 0.13 -0.22 0.24 -0.66 0.31 l -0.12 0.32 l 0.74 0.92 c 0.35 -0.21 0.78 -0.32 1.19 -0.32 c 1.24 0.00 2.25 1.01 2.25 2.25 s -1.01 2.25 -2.25 2.25 c -1.02 0.00 -1.91 -0.70 -2.18 -1.67 l -0.68 0.12 c -0.03 0.08 -0.10 0.14 -0.18 0.19 l 0.12 0.58 h 0.16 l 0.01 0.16 l -0.49 0.02 v -0.17 h 0.12 l -0.15 -0.58 c -0.22 -0.04 -0.34 -0.23 -0.27 -0.41 l -2.23 -2.53 l -0.10 0.27 c 0.54 0.43 0.87 1.09 0.87 1.77 c 0.00 1.24 -1.01 2.25 -2.25 2.25 s -2.25 -1.01 -2.25 -2.25 s 1.01 -2.25 2.25 -2.25 c 0.36 0.00 0.73 0.09 1.04 0.25 z"
            let bikePath2d = new Path2D(bikePath)
            c.strokeStyle = this.color(i, phase, this.is_flashing(i, t));
            c.lineWidth = 0.6;
            c.stroke(bikePath2d);
          }
           
          if (this.face == "left" || this.face == "right") {
            // Arrow
            c.fillStyle = "#000"
            c.arc(cx, cy, block / 2, 0, 2 * Math.PI);
            c.fill();
            c.beginPath();
            c.moveTo(cx, cy - (block/3))
            if (this.face == "left") {
              c.lineTo(cx - (block/3), cy);
            } else {
              c.lineTo(cx + (block/3), cy);
            }
            c.lineTo(cx, cy + (block/3));
            c.strokeStyle = this.color(i, phase, this.is_flashing(i, t));
            c.lineWidth = 2;
            c.stroke();
            if (this.face == "left") {
              c.moveTo(cx - (block/3), cy)
              c.lineTo(cx + (block/3), cy)
            } else {
              c.moveTo(cx + (block/3), cy)
              c.lineTo(cx - (block/3), cy)
            }
            c.stroke();
          }
          
          if (this.face == "solid") {
            // round
            c.fillStyle = this.color(i, phase, this.is_flashing(i, t));
            c.arc(cx, cy, block / 2, 0, 2 * Math.PI);
            c.fill();
          }
        }
    }
}