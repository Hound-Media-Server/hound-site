# Setting Up Your First Provider

If you've successfully deployed Hound, the next step is to set up a provider to fetch streams. The officially supported provider for Hound is [AIOStreams](https://github.com/Viren070/AIOStreams).

AIOStreams acts like a provider aggregator, it connects to different public addons/providers, fetches streams, and handles sorting, filtering and other advanced behavior.

There are two ways to use AIOStreams, either with a [community instance](https://docs.aiostreams.viren070.me/getting-started/public-instances/) or [self-hosting](https://docs.aiostreams.viren070.me/getting-started/deployment/).

[Official Docs by the Devs](https://docs.aiostreams.viren070.me/getting-started/)

## Debrid vs P2P Streaming

**A Debrid service is highly recommended** for streaming content from online sources in Hound. Debrid services are paid services that caches torrents in CDNs, which you can access at high speeds over HTTPS. It allows you to stream high bitrate content (Bluray, etc.) without buffering. The more popular a service, the more instantly-available content it maintains.

You can read more about debrid services [here](https://github.com/fynks/debrid-services-comparison/blob/main/README.md).

**Hound also supports P2P streaming**, but it is much slower and less reliable. Startup takes longer, and high bitrate content or content with low-seeders will often buffer. P2P streaming is not recommended **except** for popular content with many seeders.

If you're downloading content then streaming from your Hound Library later, a debrid service isn't vital.

::: tip Note
As you no longer seed when accessing content through HTTPS, it is recommended to select a debrid service that has a seedbox feature, or rent a seedbox yourself to give back to the community.
:::

## Adding a Provider Profile

Once you have set up AIOStreams (or have decided to use a community instance), we will add a **provider profile** in Hound. A profile corresponds to a single AIOStreams configuration. You can set up multiple configurations in your AIOStreams instance and add them as separate profiles in Hound.

For example, you might want to have a streaming profile (lower bitrate, debrid) and a downloading profile (Higher resolution, bitrate, quality, etc.).

Below are the minimal setup steps, but you might want to tinker with settings yourself to get the best results. In general, the best configuration is one that returns the stream you want as the top result. The official AIOStreams documentation is [here](https://docs.aiostreams.viren070.me/getting-started/).

### Setup Steps:

1. Choose a community instance [here](https://docs.aiostreams.viren070.me/getting-started/public-instances/), or self-host AIOStreams.
2. Open your AIOStreams web portal. If a setup popup appears, select any option (Simple or Advanced).
3. **(DEBRID ONLY)** On the left sidebar, select **Services**. Turn on the debrid services you have, and add your API key. On the left sidebar, select **Filters** -> **Cache** -> Turn **Exclude Uncached** On
4. Navigate to **Addons** on the sidebar, and select **Marketplace** at the top. Find **Torrentio** or **Comet** and press **Configure** -> **Install**.
5. On the sidebar, navigate to **Save & Install**.
6. Enter a password, make sure you remember this. Press **Create**. A UUID string will be shown, this is your username. Save this, as you'll need it to modify your configuration later.
7. Under **Installation Options**, copy the **Manifest URL**. It should look something like: `https://aiostreams-instance-host.com/stremio/your-uuid/encoded-string/manifest.json`
8. Open your Hound web Portal, and login to the Admin account. On the top right, click **admin** -> **Admin Panel** -> **Provider Profiles** -> **Add Provider**
9. Add a **Name** to identify your profile, and paste the AIOStreams **Manifest URL**. If Hound was able to access the host, the profile will have been added successfully.
10. Navigate to a movie or show. On the **Play** button, select the dropdown icon and press **Select Stream**. If you see a list of streams, your provider has been set up successfully! Here, you can choose to download the content or stream it directly.

::: warning Warning
The user is responsible for the content they access. You should only stream and download content that you have access to legally.
:::

## Congratulations!

**If you've made it this far, you're basically done!** You can now stream and download content through Hound. Read the next section to learn how to add content to your library, or connect an existing library.

## Resources

- [Official AIOStreams documentation](https://docs.aiostreams.viren070.me/getting-started/)
- [/r/StremioAddons](https://www.reddit.com/r/StremioAddons/)
