

# Introduction

Before we launch into the details, thank you for considering contributing to the Local Food Mobile App project. Without the help of people like you this project would not be possible!

Following these guidelines will ensure the time and resources of the developers and other contributors developing and managing this open source project are respected and utilized efficiently. When everyone adheres to the same set of principles and procedures then communications will be more effective, conflicts will be avoided, and quality work will be completed in a timely manner.

# How to Contribute

There are a series of steps to contributing to the Local Food Mobile App project. Most steps are fairly standard to open source projects hosted on GitHub. The steps are outlined below.

1. Read through the [README.md](README.md) to understand the basic purpose of the project.
2. Read through the [LICENSE.md](LICENSE.md) to understand the license terms of the project.
3. Read through the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to understand the behavioral expectations of contributors to the project.
4. Read through the developer job descriptions on the [NeighborWorks Southern Colorado web site](http://nwsoco.org/who-we-are/join-our-team.html) and submit a resume to admin@nwsoco.org.
5. Read, sign, and submit a signed [Contributor License Agreement](http://nwsoco.org/licenses/) (CLA) document to NeighborWorks Southern Colorado.
   * The CLA document ensures contributors have read and agree to the license terms of the Local Food Mobile App project and helps protect the rights of both contributors and NeighborWorks Southern Colorado.
   * Our preference is to have the CLA signed cryptographically via GPG/PGP or digitally via Docusign rather than physically (printed and signed with ink).
   * Signing and returning the CLA document does not guarantee all proposed contributions will be accepted. Accepting contributions is subject to review and approval of the contributed works which must meet coding conventions and other standards of content and quality.

# Why is there a formal CLA?

The custodial organization for the Local Food Mobile App--LocalFood Pueblo--is part of a 501(c)(3) nonprofit with the trade name (dba) of NeighborWorks Southern Colorado (NWSoCo) funded in part by the federal government, foundations, and other contributors. As such the organization is impelled to institute concise policies and keep thorough records to satisfy the requirements of various stakeholders. To put it simply, NWSoCo must cover its bases to ensure its own security and the security of its stakeholders. A formal agreement between NWSoCo and contributors to the Local Food Mobile App project satisfies this need. Additionally, accepted volunteer contributions to the Local Food Mobile App can be considered donations to a nonprofit organization. If you need or desire documentation of your generous contribution to NWSoCo for tax or any other purposes please completely and accurately track all of the time you spend on specific contributions and contact the "Product Owner" (named at the bottom of this document) with that information to receive documentated evidence of your contributions.

# Coding Conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

  * We indent using two spaces (soft tabs)
  * We use [HAML](http://haml.info/) for all views
  * We avoid logic in views, putting HTML generators into helpers
  * We ALWAYS put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around hash arrows.
  * This is open source software. Consider the people who will read your code, and make it look nice for them. It's sort of like driving a car: Perhaps you love doing donuts when you're alone, but with passengers the goal is to make the ride as smooth as possible.
  * So that we can consistently serve images from the CDN, always use image_path or image_tag when referring to images. Never prepend "/images/" when using image_path or image_tag.
  * Also for the CDN, always use cwd-relative paths rather than root-relative paths in image URLs in any CSS. So instead of url('/images/blah.gif'), use url('../images/blah.gif').

These contributing guidlines are a work in progess. The information above is subject to change significantly until this note is removed from this document. Please check back soon for updates. Thank you!

Thanks,

Frank Cordova, Director of LocalFood Pueblo and "Product Owner" ([per Scrum framework](http://www.scrumguides.org/scrum-guide.html#team-po "Official Scrum Guide"))<br>
<br>
<hr><em>Parts of this CONTRIBUTING.md have been adapted from parts of the following projects' CONTRIBUTING files:</em><br>
<ul><li><a href="https://github.com/openfoodfoundation/openfoodnetwork/blob/master/CONTRIBUTING.md" target="_blank">Open Food Network</a></li>
<li><a href="https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md" target="_blank">Open Government</a></li>
<li><a href="https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md" target="_blank">nayafia's contributing-template</a></li>
<li><a href="https://github.com/activeadmin/activeadmin/blob/master/CONTRIBUTING.md" target="_blank">activeadmin</a></li></ul>
