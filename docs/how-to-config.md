## How To Config

> You ONLY need to modify `/data/configs/site.json` on root for your blog configuration.

```
ㄴ site.json
ㄴ _post.json (auto-generated)
```

- After running your first crayon blog on local, there will be two json files.

### site.json

- You can set following variables as your site configuration.
  - `name` : Your blog name
  - `domain` (Optional) : Your custom domain for your blog. If no custom domain, just leave it empty.
  - `apiDomain` (Optional) : Your custom api domain for your blog. If no custom api domain, just leave it empty.
  - `commentRepo` (Optional) : Repository for managing posts` comments. If you don't need comments system, just leave it empty.
- Even though some variables are optional, don't remove the keys!

### \_post.json

- You don't need to modify this file.
- It will be generated automatically when your blog is built or started.
