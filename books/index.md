---
layout: default
title: "Welcome to WRAJ Books"
---

{: .navbar .navbar-expand-lg .navbar-dark .bg-dark}
{: .container}

[My Library](/){: .navbar-brand}
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

  <div class="container my-5">
    <h1>Hello, world!</h1>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/moment-timezone@0.6.0/builds/moment-timezone-with-data.min.js"></script>
  <script src="/assets/scripts/bootstrap.bundle.min.js"></script>
  <script src="/assets/scripts/main.js"></script>
  <script>
    const booklist = $("#booklist");

    $(async () => {
      const docList = await loadYmlAsJSON('assets/data/docs.yaml');
      console.log(docList);
      docList.books.forEach((i) => {
        console.log(i);
        booklist.append($(`<a class="dropdown-item" href="doc.html?doc=${i.id}">${i.title}</a>`));
      })
    });
  </script>
