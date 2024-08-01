---
# BAD: you should not include a `title` field here, instead you should carefully consider the actual header in the document. Notice in this example it is different than the filename.

# title: "Quick Start"

# GOOD: if I want a different label in the menu rather than my title (e.g. because it's too long)
# sidebar_label: 'My Title'

# GOOD: if I want to propose an order to the menu
# sidebar_position: 5

# GOOD: shall we hide this page in the menu?
# hidden: true

# BAD: if you add a description you'll need to maintain it. Better to not use it.
# description: 'Shows this on mouseover'
---

# Editing Documents

## Conventions

### Filenames
filenames are in "snakecase", lowercase, with underscore for spaces. The file extension should always be `.md`.

Like this:
 `this_is_a_file.md`

### Metadata
At the top of an `.md` file you may include some metadata which Docusaurus will be able to read and use for parts of the UX (e.g. titles, is it hidden, menu position).

```
---
title: "Menu Title"
sidebar_label: 'My Title'
sidebar_position: 5
hidden: true
description: 'Shows this on mouseover'
---
```
### Titles
There are two ways to set the title in docusaurus. Either set it in the metadata, or put a top level section header `# This Title`.
You should always have a document that begins with a section title.

##### Don't use metadata
You should not include a `title` field in metadata, instead you should carefully consider the actual header in the document.

### Menu Labels
The fallback behavior for menu link names will be the filename, e.g.: `this_is_a_file`.
However if your Doc begins with a header title, e.g.: `# My Article`, then the menu label will be exactly that.
To override both cases you can include this item to the metadata: `sidebar_label: Actual Label`.

#### Images
Do not link externally to images. Place copies of images in the `./docs/assets` folder.

Then you can link with:
```
![](../../assets/the-image.png) `
```
Note: image names need to follow the same convention.

## Submit edits

### A Casual Edit

Make the change using GitHub directly. You'll need a GitHub account for this. A pull request will be created.

### Heavy Users
You'll need to fork this `documentation` repo into your own GitHub account.

#### Get your own repo set up
Create a fork of this repository on your own account,  it will look like this: `my-account/documentation`.

#### Branch
Make a new branch for each major change you are going to make. You'll always branch from your `main`.

Important: don't make your edits on the  `main` branch of your fork. You'll want to keep that one clean, so you can sync from this canonical repo (there's a helpful button on the GitHub interface to do this for you).

At the end of this you'll have a branch named for example: `some-new-edits`, that lives on `my-account/documentation`.

##### Submit
Then send that branch as a pull request back to the community's repo. I.e.: the `some-edits` branch of `my-account/documentation`, will then be proposed as a change to `main` of `0LNetworkCommunity/documentation`.
