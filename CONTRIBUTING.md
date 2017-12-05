

# Introduction

Before we launch into the details, thank you for considering contributing to the Local Food Mobile App project. Without the help of people like you this project would not be possible!

Following these guidelines will ensure the time and resources of the developers and other contributors developing and managing this open source project are respected and utilized efficiently. When everyone adheres to the same set of principles and procedures then communications will be more effective, conflicts will be avoided, and quality work will be completed in a timely manner.

# How to Contribute

There are a series of steps to contributing to the Local Food Mobile App project. All steps are fairly standard to open source projects hosted on GitHub. For completeness and ease of reference the steps are  are outlined below.

1. Read through the [README.md](README.md) to understand the basic purpose of the project.
2. Read through the [LICENSE.md](LICENSE.md) to understand the license terms of the project.
3. Read through the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to understand the behavioral expectations of contributors to the project.
4. Read through the developer job descriptions on the [NeighborWorks Southern Colorado web site](http://nwsoco.org/who-we-are/join-our-team.html) and submit a resume to admin@nwsoco.org.
5. Read through, sign, and submit a signed Contributor License Agreement (CLA) document to NeighborWorks Southern Colorado.
   * Our preference is to have the CLA signed digitally via Docusign or cryptographically via GPG/PGP rather than physically (print, sign, and return via email/fax).
   * Signing and returning the CLA document does not automatically guarantee your proposed contributions will be accepted into the project. Accepting contributions is subject to some vetting of the contributors themselves.
   * As of December 4, 2017, the CLA documents have not been released but they will be ready by December 15.

# Coding Conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

  * We indent using two spaces (soft tabs)
  * We use [HAML](http://haml.info/) for all views
  * We avoid logic in views, putting HTML generators into helpers
  * We ALWAYS put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around hash arrows.
  * This is open source software. Consider the people who will read your code, and make it look nice for them. It's sort of like driving a car: Perhaps you love doing donuts when you're alone, but with passengers the goal is to make the ride as smooth as possible.
  * So that we can consistently serve images from the CDN, always use image_path or image_tag when referring to images. Never prepend "/images/" when using image_path or image_tag.
  * Also for the CDN, always use cwd-relative paths rather than root-relative paths in image URLs in any CSS. So instead of url('/images/blah.gif'), use url('../images/blah.gif').

These contributing guidlines are a work in progess the information above is subject to change significantly until this note is removed from this document. Please check back soon for updates and soon enough a completed document. Thank you!

Thanks,

Frank Cordova, Director of LocalFood Pueblo and "Product Owner" ([per Scrum framework](http://www.scrumguides.org/scrum-guide.html#team-po "Official Scrum Guide"))<br>
<br>
<hr><em>Parts of this CONTRIBUTING.md have been adapted from parts of the following projects' CONTRIBUTING files:</em><br>
<ul><li><a href="https://github.com/openfoodfoundation/openfoodnetwork/blob/master/CONTRIBUTING.md" target="_blank">Open Food Network</a></li>
<li><a href="https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md" target="_blank">Open Government</a></li>
<li><a href="https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md" target="_blank">nayafia's contributing-template</a></li>
<li><a href="https://github.com/activeadmin/activeadmin/blob/master/CONTRIBUTING.md" target="_blank">activeadmin</a></li></ul>
