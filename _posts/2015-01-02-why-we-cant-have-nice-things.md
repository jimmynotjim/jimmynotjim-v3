---
layout: post
title:  "Why We Can’t Have Nice Things"
date:   2015-01-02 00:00:01 -0500
categories: writing
subtitle: "There's always one asshole ready to punch holes in your walls right when leave your door unlocked"
---

Yesterday I made some much needed updates to this site so I could have some place of my own to post my thoughts. My setup is pretty custom, using [Genesis Skeleton – WordPress](https://github.com/genesis/wordpress) (not the same thing as Genesis Framework, they just happened to overlap on naming) to control my local, staging and production servers. It’s entirely overkill for my little site, but I was working on some tutorials for it and figured my own site would be the easiest to use as a living example.

Before I made the switch my site had been static php with everything manually ftp’d back and forth. Pretty simple and easy enough to leave open to the public on Github. Genesis Skeleton uses SSH keys stored in the repo to move things from server to server and WordPress’s wp-config.php contains your database credentials, so obviously I needed a private repo to lock things down.

Still wanting to work in the open, I came up with a plan to have two remote repos, with work happening on branches within the private repo and then doing limited merges to the public one whenever I finished an update. That worked well for a while, till I made the mistake you’re never supposed to make, forgetting to squash the merge commit thus leaving the history containing those credentials. I was extremely lucky to even notice, it’s not something that’s easily seen, but when I went to my site to see if my git activity module updated I thought “why the hell is there a commit for sensitive production files from 2 minutes ago?” Oh shit!

![Git Activity]({{ site.github.com }}/dist/images/Git-Activity.png){:class="aligncenter"}

Within another two minutes my site was showing something else entirely, the homepage for some SEO service called Semalt (http://semalt.com/). I had heard of bots trolling Github for leaked credentials but this seemed insane. Four minutes? Four minutes from the leak to someone taking control of my site? How is that even possible?

I jumped right into panic mode, telling my fiancé I had to take care of this and I’d be locking myself in our bedroom. First I logged in to Digital Ocean and shut down both my production and staging servers. Next I followed [Github’s post on cleaning the sensitive files](https://help.github.com/articles/remove-sensitive-data/) out my git history. Pretty easy considering this is a side of git I’d never used before. Generating new keys was pretty simple with Genesis Skeleton and once I was sure everything was fixed, I turned the server back on and reset my root password. That done I was able to re-provision the server and deploy my changes with Capistrano. Phew!

I thought I was out of the clear but when I took a look at my site the Github activity was still showing those commits. What the hell, I thought, I had checked Github, they’re gone. Turns out, just because they’re gone from the repo, doesn’t mean they’re gone from your public activity timeline. Just by clicking the commit linked in my profile I was able to see those removed (and luckily changed) credentials. Well Fuck…

Not sure what to do at this point, Eric (the creator of Genesis Framework and my boss) mentioned maybe I should just kill the repo and start a new one with the clean history. It’s a good thing no one really cares about my portfolio, because that’s exactly what I did, though I’ve yet to create a new one. Problem instantly solved. Now if you go to my activity timeline it still shows the commits but they all 404.

Just when I thought I was done, I noticed Semalt’s favicon in the Chrome tab. Great, there’s still something else in there. I ssh’d into the server and searched every nook and cranny, I couldn’t find that favicon, or any new code for that matter, anywhere. Figuring I’d already blown everything else up, why stop, I quickly spun up a new VPS with Digital Ocean, deleted the exploited one, updated my DNS and deployed the private repo to the new server. Within another 10 minutes my problem was finally solved.

So, what did I learn today? Don’t rush when moving anything critical and it’s good to have friends that you can bounce ideas off of. If Eric had never mentioned deleting the repo I’m not sure I would have been able to think clearly enough about whether my site’s source code really needed to be in the public eye. I mean it had zero watchers and it’s not like it’s being used by anyone else (unlike my scrollNav project for example). I’ve also learned that I need to find a way to make it easier to share projects built with Genesis Skeleton. Squashing commits and manually removing files you shouldn’t be sharing during a merge is a pain in the ass, and might not even be feasible to someone new to git. There has to be a better way, hopefully I can figure it out.
