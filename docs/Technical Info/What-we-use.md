---
sidebar_position: 1
---

# General Technical Info

Many Mastodon servers use centralized hosting services like [masto.host](https://masto.host/). These make life simple – you pay a flat fee and they take care of maintenance and scaling. There's nothing wrong with this approach, but it can get a little pricey if your community gets large. 

We decided to roll our own, which gives a bit more flexibility at the expense of having to get a little bit more in the weeds technically.

Here's what we've got set up at the moment...

## Hosting

### Web Servers & Database

Our core infrastructure runs on [Hetzner](https://www.hetzner.com/) cloud at their East Coast facility located in Ashburn, VA. We're currently using a 4 core VM with 8GB of RAM and 160GB of local storage that costs €13.10/month.

This part of the stack serves the website and APIs, runs backend processes, and stores user account & posting data. We create a backup of everything on the server once a day and have the ability to rollback to any previous backup made within the last seven days if something goes wrong.

### Media Storage

Profile pictures and other uploaded and cached media files are hosted at `static.nc.social`. This is an S3-compatible bucket at [Wasabi](https://wasabi.com) located in the US on the east coast. We're currently paying for 1TB of storage for $5.99/month.

### Other Sites

We maintain two other sites that aren't Mastodon services: [status.nc.social](https://status.nc.social) and the site you're on right now, [about.nc.social](https://about.nc.social). The status site is hosted on Github pages and runs a free, open-source uptime checker called [Upptime](https://upptime.js.org/). This site is hosted for free on [Vercel](https://vercel.com) and built with an open source docs tool called [Docusaurus](https://docusaurus.io/). The code for both of these sites is available on our [Github](https://github.com/ncsocial).

## Other Services

### DNS

We use [Cloudflare](https://cloudflare.com)'s free tier to manage DNS and provide an internet-scale cache in front of our core services. This significantly reduces bandwidth costs. Cloudflare also handles incoming email to the nc.social domain.

### Email

We use [Sendgrid](https://sendgrid.com) to handle outgoing emails sent from the nc.social domain. Using a 3rd-party email provider means we don't have to worry as much about our emails getting caught up in people's spam folders (theoretically). We use their free tier, which allows 100 emails/days. This will likely be the next thing we'll have to start paying for if this community gets bigger. In the meantime, consider whether you really need email notifications turned on. 😎

### Domain Registrar

This one is handled by [Google Domains](https://domains.google.com) and costs $110/year.