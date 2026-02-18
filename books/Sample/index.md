---
layout: authadmin
title: "Sample Document"
---
{% assign btnWidth = "150" %}

This is a sample document that can demonstrate the capabilities of this document repository and capabilities.

This service uses the capabilities of:

- [Markdown]{: #markdownlink .btn .btn-sm .btn-primary target="_blank" style="width: {{btnWidth}}px;"}
- [Handlebars]{: #handlebarsjslink .btn .btn-sm .btn-secondary target="_blank" style="width: {{btnWidth}}px;"}

Extensions to enhance:

- [Bootstrap]{: #bootstraplink .btn .btn-sm .btn-secondary target="_blank" style="width: {{btnWidth}}px;"}
- [markdown-it]{: #bootstraplink .btn .btn-sm .btn-warning target="_blank" style="width: {{btnWidth}}px;"}
  - [markdown-it example]{: #bootstraplink .btn .btn-sm .btn-danger target="_blank" style="width: {{btnWidth}}px;"}
- [Mermaid]{: #mermaiddiagramjslink .btn .btn-sm .btn-info target="_blank" style="width: {{btnWidth}}px;"}

and is best developed using free tools such as:

- [VS Code]{: .btn .btn-sm .btn-primary target="_blank" style="width: {{btnWidth}}px;"}

Here is an example of how to use multiple columns and custom containers.

<div class="row row-cols-2 mx-2">
<div class="col note-box" markdown="1">

This is a Note in
- row 1
- column 1
</div>
<div class="col important-box" markdown="1">

This is an Important note in
- row 1
- column 2
</div>

<div class="col caution-box" markdown="1">

This is an Caution note in
- row 2
- column 1
</div>
<div class="col tip-box" markdown="1">

This is an Tip note in
- row 2
- column 2
</div>

<div class="col warning-box" markdown="1">

This is a Warning note in
- row 3
- column 2
</div>
</div>

<div class="col intense-box" markdown="1">

This is an Intense note
</div>


[Markdown]: https://daringfireball.net/projects/markdown/
[Handlebars]: https://handlebarsjs.com/
[VS Code]: https://code.visualstudio.com/
[Bootstrap]: https://getbootstrap.com
[Mermaid]: https://mermaid.live/
[markdown-it]: https://github.com/markdown-it/markdown-it
[markdown-it example]: https://markdown-it.github.io/