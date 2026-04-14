# Hound Media Server Docs Site

Documentation and API Reference site for Hound Media Server. Built on top of [vitepress-openapi](https://github.com/enzonotario/vitepress-openapi).

# IMPORTANT

To convert Hound's swagger docs to the OpenAPI format, use the swagger2openapi tool, then run:

```bash
node scripts/fix_openapi.js
```

This fixes json bodies not rendering properly.
