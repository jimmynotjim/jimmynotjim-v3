---
layout: post
title:  "The Documentation Shortage in Open Source"
date:   2015-01-05 00:00:01 -0500
categories: writing
subtitle: "There's a shortage of quality documentation in Open Source, but we can fix it"
---

Ever gone to use an Open Source project and had zero idea where to start because the README assumes you already know how it all works? Ever received cryptic error messages while including a library in your project? Ever looked at release notes for a clue why a project suddenly stopped working only to find there are none? Ever felt like an idiot for having to ask the creator or anyone else questions about these? I know I have, a lot, and I also know I’m to blame for the same issues in my own projects.

The number of Open Source projects is growing exponentially, which overall is great. Today more code is shared, tested and collaborated on in the open than ever before. We have an endless amount of amazing libraries to help us with our daily tasks, and we don’t even have to pay for them. All that’s asked is that we don’t sell them as our own, and we contribute back into the system every now and then. This is the golden age of Open Source code.

Unfortunately, it’s also the golden age of poor documentation and a lack of empathy for those newer than us. I can’t go a week without finding a project that I have to dig into the source code to figure out how it works. I spend entirely too much time debugging cryptic error messages, slowly tweaking and logging my own errors till I find that one weird thing. Too often I have to check commit logs to figure out what changed in a release because there’s no or little details in the CHANGELOG.

The solutions to these problems aren’t hard. It’s easy to write proper docs, or allow for detailed error messages, or list what you changed in the latest release. It might not be fun or you might not have the time, but it’s certainly not difficult. So what can we do to try and curb this issue and end all this wasted time?

Well first we can hold each other accountable. When you find a project lacking any of these, open an issue. Don’t be be demanding or condescending, two traits we developers tend to portray, just point it out and ask that the author address it. They might not have the time or even desire to, but at least you’ve opened it up for someone else to take notice.

Which brings me to my second suggestion. If you’re already using a library, understand it well (or even decently), yet see it’s lacking, take some time to send a PR with an update for the issue. The author will appreciate it, the users will definitely appreciate it, and you’ll have given back a bit to the community you gain so much from. If you spend some time studying the code you might even learn more about the project or the technologies it uses in the process.

If you own or manage a project, make proper documentation a higher priority if it’s not already. If you don’t have the time or desire, ask for help. If someone jumps in and fills these information gaps, thank them profusely. If someone comes to you asking for better docs or why something isn’t working for them, don’t get defensive. I know I’ve been guilty of the last one.

Together we can improve documentation in Open Source and reduce the number of wasted hours. It’s just a matter of putting in the effort.

For a few resources on improving documentation see:

- [http://blog.nodejitsu.com/how-to-write-a-readme/](http://blog.nodejitsu.com/how-to-write-a-readme/)
- [http://robots.thoughtbot.com/how-to-write-a-great-readme](http://robots.thoughtbot.com/how-to-write-a-great-readme)
- [https://medium.com/@garychambers108/better-logging-in-node-js-b3cc6fd0dafd](https://medium.com/@garychambers108/better-logging-in-node-js-b3cc6fd0dafd)
- [http://www.nczonline.net/blog/2009/03/03/the-art-of-throwing-javascript-errors/](http://www.nczonline.net/blog/2009/03/03/the-art-of-throwing-javascript-errors/)
- [http://keepachangelog.com/](http://keepachangelog.com/)

And because not everyone is born knowing how to contribute to Open Source:

- [https://guides.github.com/activities/contributing-to-open-source/](https://guides.github.com/activities/contributing-to-open-source/)
