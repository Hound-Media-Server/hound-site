# Hound Media Server Docs Site

Documentation and API Reference site for [Hound Media Server.](https://github.com/Hound-Media-Server/hound) Built on top of [vitepress-openapi](https://github.com/enzonotario/vitepress-openapi).

The site is deployed in Github Pages [here.](https://hound-media-server.github.io/hound-site/)

# IMPORTANT

To convert Hound's swagger docs to the OpenAPI format, use the swagger2openapi tool, then run:

```bash
node scripts/fix_openapi.js
```

This fixes json bodies not rendering properly.
