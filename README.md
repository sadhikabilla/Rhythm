# Rhythm

## Usage
Head over to http://128.199.141.170:8888/ and play the piano!

The (key -> note) mappings are currently (WARNING: THIS CHANGES FAST AT THE MOMENT)
  * A -> C
  * W -> C# / Db
  * S -> D
  * E -> D# / Eb
  * D -> E
  * F -> F
  * T -> F# / Gb
  * J -> G
  * U -> G# / Ab
  * K -> A
  * I -> A# / Bb
  * L -> B

Octaves may be selected using the number keys. The octave may be temporarily raised by holding down `SHIFT` and reduced by holding down `CTRL`.

## Building Instructions
After cloning the repository, run npm install (you need Node.js installed).

Then `cd` into `midi/` and run `./compile` before `cd`-ing back and serving up the page with either `npm start` or `node server.js`.
