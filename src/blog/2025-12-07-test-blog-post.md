---
title: Test Blog Post
image: /static/images/uploads/isulogo5.jpg
imageCaption: Interesting image
author: Isu Dadzie
tags:
  - post
date-time: 2025-12-07T14:18:00.000+00:00
shortDesc: If you’re creating a new folder for uploaded media, you’ll need to
  know where your static
---
If you’re creating a new folder for uploaded media, you’ll need to know where your static site generator expects static files. You can refer to the paths outlined above in [App File Structure](https://decapcms.org/docs/configure-decap-cms/#app-file-structure), and put your media folder in the same location where you put the `admin` folder.

Note that the `media_folder` file path is relative to the project root, so the example above would work for Jekyll, GitBook, or any other generator that stores static files at the project root. However, it would not work for Hugo, Hexo, Middleman, or others that store static files in a subfolder. Here’s an example that could work for a Hugo site:
