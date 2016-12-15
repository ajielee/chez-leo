---
title: Debugging when hexo generate gets killed
date: 2016-11-09 22:43:00
categories:
- Coding
keywords:
- hexo
- npm
tags: 
- hexo
- npm
- linux
- debug
---

## Problem

This problem occured when I started to deploy this Hexo blog on my droplet of DigitalOcean. Everything works fine untill I ran `hexo generate` and got stuck, and a few minutes later, it turns out the process has been killed, like this:

![hexo generate gets killed](https://camo.githubusercontent.com/8f9fb8268f2b6027ce5f8cd45830331522a41b1a/687474703a2f2f692e696d6775722e636f6d2f38727637754d512e706e67)

<!-- more -->

Then I searched a lot on Google, but there were no answer for this. So I desided  to solve it myself. Firstly, I guessed it's a problem of memory, so I tried to run   again `hexo generate` with `top`, and here it was what `top` shows:

![top command screenshot](https://camo.githubusercontent.com/cd8daa781863bc707aa40ee29dcbcbf22f1d6cda/687474703a2f2f692e696d6775722e636f6d2f436852533245792e706e67)

The process of Hexo took about 70% of CPU while generating just 1 post and 4 pages and lasted several minutes, it seems so weird.

I thought maybe it's a problem of node cause the version of node wasn't the latest one, then I've tried update to v7.0.0, but the problem was just still there.

## Reason

Finally, I found this article: [NPM gets killed no matter what](https://www.digitalocean.com/community/questions/npm-gets-killed-no-matter-what?answer=18115).

The reason why `hexo generate`, or precisely `npm`, doesn't work is because there is no Swap space in Linux (as the screenshot shows above). Therefore, node doesn't work. 


## Solution

Creating a 1GB swap-file, and the problem will go away:

```bash
sudo dd if=/dev/zero of=/swapfile bs=1024 count=1024k
sudo mkswap /swapfile
sudo swapon /swapfile
```

Ref.: [How To Add Swap on Ubuntu 12.04](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-12-04?comment=551)

By the way, I created an issue on Github for this: [https://github.com/hexojs/hexo/issues/2243](https://github.com/hexojs/hexo/issues/2243) (in Chinese)


