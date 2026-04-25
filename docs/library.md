# Managing your Library

There are two ways to add content to Hound, by downloading it directly through the web portal, or by connecting an **External Library**. An **External Library** is just a folder of content that isn't directly managed by Hound, similar to Plex/Jellyfin libraries.

## Downloading Content through Hound

This is the main way to add content to Hound.

1. In the web portal, open a movie/show page.
2. **(FOR MOVIES)** Next to the **Play Button** select the Dropdown and choose **Select Stream**. Find a stream, and select **Download to Hound**
3. **(FOR SHOWS)** In the **Seasons** section, select a Season. Here you can download a whole season **(EXPERIMENTAL)** or download individual episodes through the **Select Stream** menu item. Downloading each episode manually is still recommended since providers may return incorrect results, such as the wrong episode.
4. In the **Admin Panel** a list of downloads will be visible. Once the download is complete, navigate to **Library** on the navbar. Your content should appear here.

## Connecting an External Library

If you have an existing library, or would like to upload your own content, you can connect an external library to Hound. Hound uses **TMDB** as its sole metadata provider, so your content will have to correspond to movies and episodes orderings in TMDB.

Hound follows a strict naming convention for files and folders. **You HAVE to follow this structure or matching may fail.**

```
Movies
 |-- Movie Name (Year)
 |   |-- Movie Name (Year).ext

TV Shows
 |-- Show Name (Year)
 |   |-- Season 01
 |   |   |-- Show Name - S01E01 - Episode Name.ext
 |   |   |-- Show Name - S01E02 - Episode Name.ext
 |   |-- Season 02
 |   |   |-- Show Name - S02E01 - Episode Name.ext
 |   |   |-- Show Name - S02E02 - Episode Name.ext
```

If a movie/show is matching incorrectly, you can add `[tmdbid-1234]` with the desired show's ID to the folder name to force a match.

Once you have prepared the library, open your `docker-compose.yml` and add or uncomment the following lines:

```
hound-server:
  ...
  volumes:
    - /path/to/movies:/app/External Library/Movies
    - /path/to/shows:/app/External Library/TV Shows
```

Note that Hound does not currently support adding a movie/show that is not in TMDB. Consider contributing to TMDB to add missing content first. Adding custom content planned feature.
