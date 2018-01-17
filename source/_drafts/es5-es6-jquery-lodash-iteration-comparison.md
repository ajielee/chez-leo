---
title: ES5/ES6/jquery/Lodash Iterration Comparison
date: 2018-01-15 17:22:00
categories:
- Coding
keywords:
- js
- es6
- jquery
- lodash
tags: 
- js
---

- Test machine: 
  - MacBook Pro (Retina, 15-inch, Late 2013)
  - System: macOS Sierra (v10.12.6)
  - CPU: Intel Core i7 (2.3 GHz)
  - Memory: 16 GB 1600 MHz DDR3

## DOM manipulation

URL: [https://codepen.io/leo_li/full/rpvObo](https://codepen.io/leo_li/full/rpvObo)
URL with code: [https://codepen.io/leo_li/pen/rpvObo](https://codepen.io/leo_li/pen/rpvObo)

All the tests run 1000 times with 10000 items.

### Result

| | Chrome | Safari | Firefox |
| --- | ---- | --- | --- |    
| ES5 | 56.74 | 29.7 | 24.23 |
| ES6 | 57.68 | 30.9 | 16.07 |
| jquery | 53.75 | 24.26 | 15.16 |
| Lodash | 54.58 | 24.2 | 14.45 |

*(Unit: ms)*


