let osc, freq, amp, amp2;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator("sine");
}

function draw() {
  background(220);
  freq = constrain(map(noise(t), 0, 1, 500, 900), 500, 900);
  amp = 0.5;

  //osc.pan(paneo);

  osc.freq(freq, 0.1);
  osc.amp(amp, 0.1);
  t += 0.01;
}
