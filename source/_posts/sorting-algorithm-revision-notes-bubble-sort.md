---
title: 冒泡排序 (Bubble sort)
date: 2016-11-18 12:00:00
categories:
- Coding
keywords:
- 排序算法
- 冒泡排序
- Sorting algorithms
- Bubble sort
tags: 
- 基础知识
- 排序算法
- sorting algorithms
---

![Bubble sort gif](http://res.cloudinary.com/dvlfojetn/image/upload/v1481068600/xiaojieli.com/posts/Sorting_bubblesort_anim.gif)

冒泡排序的逻辑包含两层循环：

1. 里面一层循环用来比较第 N 个元素和第 N+1 个元素，假如 N+1 比 N 小，那么两者交换位置，然后一直比较至该循环可达到的最后一个元素。其目的是在一次循环中将所有参与比较元素中最重（最大）的元素先沉（放）到最底（最右边），然后让其他较轻（较小）的元素逐渐浮（挪）到上面（左边）；
2. 外面一层循环用来设定里面一层循环的范围，使其每次循环的范围都减一。因为前一次循环已经将其中最重(最大)的元素沉（放）到最底（最右边）了，所以下一次循环就可以接着比较剩下的元素。

<!-- more -->

### PHP 实现：

```php
for ($i = 0; $i < count($source) - 1; $i ++) {
    for ($j = 0; $j < count($source) - (1 + $i); $j ++) {
       if ($source[$j] > $source[$j + 1]) {
          $temp = $source[$j];
          $source[$j] = $source[$j + 1];
          $source[$j + 1] = $temp;
       }
    }
}
```

完整代码：[PHP Sandbox](http://sandbox.onlinephpfunctions.com/code/710d1348f838f69bc52dfa93a1595d76e401e742)
耗时：49-55ms (PHP v7.0.5)

### JS 实现

```js
var temp = null;
var sourceLength = source.length;
for (var i = 0; i < sourceLength - 1; i ++) {
    for (var j = 0; j < sourceLength - (1 + i); j ++) {
        if (source[j] > source[j+1]) {
            temp = source[j];
            source[j] = source[j+1];
            source[j+1] = temp;         
        }
    }
}
```

完整代码：

<p data-height="265" data-theme-id="light" data-slug-hash="rWjzjN" data-default-tab="result" data-user="leo_li" data-embed-version="2" data-pen-title="Bubble sort" class="codepen">See the Pen <a href="https://codepen.io/leo_li/pen/rWjzjN/">Bubble sort</a> by Leo LI (<a href="http://codepen.io/leo_li">@leo_li</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## 冒泡排序的改良版

看过 VisualGO 给出的伪代码后有所启发，感觉性能应该能更好一点。先上伪代码：

```
do
    swapped = false
    for i = 1 to indexOfLastUnsortedElement
    if leftElement > rightElement
        swap(leftElement, rightElement)
        swapped = true
while swapped
```

假设原数组是`1,2,3,4,5,7,6`，其实排序过程只是将最后两个数`7`和`6`对换了一下位置，但用之前的方法就会有很多不必要的循环和比较，用上新方法后就能有效减少这些步骤。

### PHP 实现：

```php
$swapped = false;
$indexOfLastUnsortedElement = count($source) - 1;
do {
    $swapped = false;    
    for ($i = 0; $i < $indexOfLastUnsortedElement; $i++) {
        if ($source[$i] > $source[$i + 1]) {
            $temp = $source[$i];
            $source[$i] = $source[$i + 1];
            $source[$i + 1] = $temp;
            $swapped = true;
        }
    }
    $indexOfLastUnsortedElement--;
} while ($swapped);
```

完整代码：[PHP Sandbox](http://sandbox.onlinephpfunctions.com/code/287ac9aac352e94116b420cfc0e537c500cabeb3)
耗时：34-37ms (PHP v7.0.5) **优化效果明显！**

### JS 实现:

```js
var temp = null;
var indexOfLastUnsortedElement = source.length - 1;
var swapped = null;
do {
   swapped = false;
   for (var i = 0; i < indexOfLastUnsortedElement; i++) {
       if (source[i] > source[i + 1]) {
           temp = source[i];
           source[i] = source[i + 1];
           source[i + 1] = temp;
           swapped = true;
       }	        
   }
   indexOfLastUnsortedElement--;
} while (swapped);
```

完整代码：

<p data-height="265" data-theme-id="light" data-slug-hash="xRgYNa" data-default-tab="result" data-user="leo_li" data-embed-version="2" data-pen-title="Bubble sort v2" class="codepen">See the Pen <a href="https://codepen.io/leo_li/pen/xRgYNa/">Bubble sort v2</a> by Leo LI (<a href="http://codepen.io/leo_li">@leo_li</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

（不知道为什么在 JS 中这个改进算法没任何显著优化效果，而且在不同浏览器中测试结果也不一样，在 Safari 中的测试速度要远好于 Chrome）

---

### 笔记列表

这是我在复习排序算法时写的其中一篇笔记，完整列表如下：

1. [前言](/coding/sorting-algorithm-revision-notes/)
2. [冒泡排序 (Bubble sort)](/coding/sorting-algorithm-revision-notes-bubble-sort/)
3. [选择排序 (Selection sort)](/coding/sorting-algorithm-revision-notes-selection-sort/)

持续更新中...

