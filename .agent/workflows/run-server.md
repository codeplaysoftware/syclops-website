---
description: Run the Jekyll server with the correct Ruby environment
---

1. Ensure the Ruby environment is loaded and start the Jekyll server.
// turbo
2. Run the server
```powershell
$env:PATH += ";C:\Ruby34-x64\bin"; bundle exec jekyll serve --config _configs/_config.yml
```
