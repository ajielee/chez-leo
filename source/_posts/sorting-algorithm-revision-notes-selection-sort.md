---
title: 选择排序 (Selection sort)
date: 2016-11-28 12:00:00
categories:
- Coding
keywords:
- 排序算法
- 选择排序
- Sorting algorithms
- Selection sort
tags: 
- 基础知识
- 排序算法
- sorting algorithms
---

<img src="http://res.cloudinary.com/dvlfojetn/image/upload/v1481068456/xiaojieli.com/posts/SelectionSortGif.gif" alt="Selection sort gif" style="max-hight:300px;max-width:300px;">

根据[之前的经验](/coding/冒泡排序/)，这次先看 VisualGO 的伪代码：

```
repeat (numOfElements - 1) times
  set the first unsorted element as the minimum
  for each of the unsorted elements
    if element < currentMinimum
      set element as new minimum
  swap minimum with first unsorted position
```

选择排序的逻辑也是两层循环：

1. 外层循环只负责设定内层循环的起始元素，从整个数组中的第一个元素开始，直到倒数第二个元素；
2. 内层循环拿到起始元素后，先将起始元素记作“最小元素”，然后开始遍历从起始元素到整个数组的最后一个元素。当某个元素比“最小元素”更小的时候，将该元素标记为“最小元素”。遍历结束后，将起始元素和“最小元素”交换位置。

选择排序相比起冒泡排序，交换元素的次数大大减少，实际上每次内层循环完了之后只会交换一次。而加上条件判断后，交换次数可以更少，例如起始元素有可能就是该轮遍历的“最小元素”，这种情况下无需交换。所以选择排序的效率也会比冒泡排序高得多，下面测试结果可以证明这点。

<!-- more -->

### PHP 实现：

```php
$length = count($source);
for ($first = 0; $first <= $length - 2; $first ++) {
    $minValueIndex = $first;
    $minValue = $source[$minValueIndex];
    for ($index = $first; $index <= $length - 1; $index ++) {
        if ($source[$index] < $minValue) {
            $minValueIndex = $index;
            $minValue = $source[$index];
        }
        
    }
    if ($minValueIndex !== $first) {
        $temp = $source[$first];
        $source[$first] = $source[$minValueIndex];
        $source[$minValueIndex] = $temp;
    }
}
```

完整代码：[PHP Sandbox](http://sandbox.onlinephpfunctions.com/code/5ec199a94af65988c49748d2c1e5d9e17e24cc86)
耗时：13-24ms (PHP v7.0.5) **结果明显优于冒泡排序**

### JS 实现:

```js
var length = source.length;
var minValueIndex = 0;
var minValue = 0;
var temp = 0;
  
for (var first = 0; first <= length -2; first ++) {
  minValueIndex = first;
  minValue = source[minValueIndex];
  for (var index = first; index <= length -1; index ++) {
    if (source[index] < minValue) {
      minValueIndex = index;
      minValue = source[index];
    }
  }
  
  if (minValueIndex !== first) {
    temp = source[first];
    source[first] = source[minValueIndex];
    source[minValueIndex] = temp;
  }
}
```

完整代码：

<p data-height="265" data-theme-id="light" data-slug-hash="aBVOQo" data-default-tab="result" data-user="leo_li" data-embed-version="2" data-pen-title="Select Sort" class="codepen">See the Pen <a href="http://codepen.io/leo_li/pen/aBVOQo/">Select Sort</a> by Leo LI (<a href="http://codepen.io/leo_li">@leo_li</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

--- 

### 笔记列表

这是我在复习排序算法时写的其中一篇笔记，完整列表如下：

1. [前言](/coding/%E5%A4%8D%E4%B9%A0%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E7%AC%94%E8%AE%B0/)
2. [冒泡排序 (Bubble sort)](/coding/冒泡排序/)
3. [选择排序 (Selection sort)](/coding/选择排序/)

持续更新中...


