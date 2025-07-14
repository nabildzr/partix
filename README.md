# Partix

🎇 React hook for hover/click-based particle effects. Extensible, fun, and easy to use.

![1752428233375](https://tmpfiles.org/dl/5761799/g03mrah3ci.gif)

## Install

```bash
npm install partix
```

## Usage

```js
import partix from "@nabildzr/partix";

function App() {
  partix({ selector: "btn", trigger: "hover", amount: 10 });

  return <button className="btn">Hover me</button>;
}
```

## Options

| Option   | Type     | Default        | Description             |
| -------- | -------- | -------------- | ----------------------- |
| selector | string   | "partix-taget" | Class to bind           |
| trigger  | string   | "hover"        | "hover" or "click"      |
| amount   | number   | 5              | Particles per event     |
| colors   | string[] | preset         | Array of hex/rgb colors |

## ☕ Support

If you like my work, consider supporting me:

- [Saweria](https://saweria.co/namakamu)

## License

```txt
MIT License

Copyright (c) 2025 Nabildzr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
