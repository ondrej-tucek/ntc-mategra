## Mategra

* source codes of project Mategra
* made by SvelteKit


### Install & Update
```bash
npm i             # install packages or
npm run reinstall # include also remove node_modules
npm run pkg:info  # info about packages
npm run pkg:up    # update packages
```

### Dev
<pre>
 <code>
  npm run dev
  <a href="http://localhost:3000">localhost:3000</a>
 </code>
</pre>

Note:
In case of error:
> node: /lib/x86_64-linux-gnu/libm.so.6: version `GLIBC_2.27' not found (required by node)

run
```
nvm install --lts
```


### Pre-Deploy
```bash
npm run build
npm run preview
```

### Deploy to gh-pages
```bash
npm run build:gh
npm run deploy:gh
```
