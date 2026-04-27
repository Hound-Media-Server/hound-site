# What is Hound?

Hound is a fully-featured media server, like Jellyfin or Plex, but with the additional ability to stream content through P2P (torrent) or HTTP/Debrid sources.
With Hound, you get the benefits of fully controlling your media like Jellyfin, but can also stream instantly like Stremio. It's the best of both worlds.

**Hound is fully open source (AGPLv3) and self-hosted.**

## Features

These features come **out of the box**, without having to deploy additional services:

- Stream and download your own content from your drives, or stream content directly from P2P (torrent) and HTTP/Debrid sources through Stremio addons
- Create custom collections/lists
- Trakt-like features, all your watches are automatically tracked and easily browsable
- Add reviews and comments to your media
- Android and Android TV clients (iOS and tvOS coming soon)
- Really fast to setup (<10 mins), few dependencies

## Hound vs. Alternatives

<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Hound</th>
      <th>Plex</th>
      <th>Jellyfin</th>
      <th>Stremio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Host and stream your own media</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Stream content instantly from P2P/Debrid sources</td>
      <td>Yes<br>(Debrid recommended)</td>
      <td>No</td>
      <td>No</td>
      <td>Yes<br>(Debrid recommended)</td>
    </tr>
    <tr>
      <td>Downloading Content</td>
      <td>Yes, through Hound itself and Stremio addons</td>
      <td>Not handled by Plex (3rd party)</td>
      <td>Not handled by Jellyfin (3rd party)</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Detailed watch activity and statistics</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Initial setup and deployment</td>
      <td>Fast, most things out-of-the-box<br>No need to set up multiple services</td>
      <td>A bit more complicated<br>Likely deploying a full stack of apps/services</td>
      <td>A bit more complicated<br>Likely deploying a full stack of apps/services</td>
      <td>Fast, most things out-of-the-box</td>
    </tr>
    <tr>
      <td>Transcoding</td>
      <td>WIP</td>
      <td>Yes<br>(paid license for hardware transcoding)</td>
      <td>Yes</td>
      <td>On Web Client (?)</td>
    </tr>
    <tr>
      <td>Pricing</td>
      <td>
        All features free for one user,<br>
        One lifetime license to unlock extra users<br>
      </td>
      <td>Freemium<br>Subscription for extra features</td>
      <td>Completely Free</td>
      <td>Completely Free</td>
    </tr>
    <tr>
      <td>Client Support</td>
      <td>Limited<br>Android & Android TV<br>iOS & tvOS in progress</td>
      <td>Extensive</td>
      <td>Limited official clients<br>Strong third-party support</td>
      <td>Decent</td>
    </tr>
    <tr>
      <td>Ecosystem</td>
      <td>Fledgling</td>
      <td>Mature</td>
      <td>Mature</td>
      <td>Mature</td>
    </tr>
    <tr>
      <td>License</td>
      <td>AGPLv3</td>
      <td>Proprietary</td>
      <td>GNU GPL v2</td>
      <td>Open Core</td>
    </tr>
    <tr>
      <td>Selfhosted / Privacy Notes</td>
      <td>Fully open-source<br>Self-hostable<br>Fully private</td>
      <td>Self-hostable but closed-source, remote auth required, questionable privacy</td>
      <td>Fully open-source<br>Self-hostable<br>Fully private</td>
      <td>Technically self-hostable, rare in practice</td>
    </tr>
  </tbody>
</table>

## Why was Hound Made?

I originally built Hound as a movie/show tracker a few years ago. I wanted a self-hosted version of Trakt with good UI/UX.

Some time ago, I set up a Jellyfin server for my family, but after a lot of effort deploying the whole suite, I came to the dreadful realization that they still preferred Netflix anyway.

Here are the observations that led me to build Hound:

**Instant Streaming is important for a lot of people**

- While hosting your own media is the correct self-hosted approach, from a user perspective, many prefer streaming.
- Although in the Plex/Jellyfin ecosystem, requesting media is now user-friendly and efficient, it still can't beat finding something, pressing play, and watching immediately, in seconds.
- Sometimes, someone requests a full show, watches the first episode, and loses interest in 10 minutes. I find this wasteful.
- **'Storage is cheap,' is increasingly not true.** The upfront cost of a few drives can be non-trivial for many, before extra electricity costs. Add redundancy, and we're looking at thousands.

**But I like having control over my media**

- Movies and shows that I really like, and are particular about, I want to store
- I like the feeling of knowing that what's stored on my server, they can never be taken away from me

**I wanted a solution where I could decide, when to download and when to stream.**

To achieve both, I needed Jellyfin + the stack and Stremio, but this creates a fragmented experience, and Stremio isn't self-hosted. So I repurposed Hound from a media tracker to a media server. This had the added benefit of a well-integrated media server + tracker in one app.
