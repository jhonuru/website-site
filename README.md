# **Enlace GitHubPages & React**

[https://jhonuru.github.io/website-site/](https://jhonuru.github.io/website-site/)

# **Dependencias**

## Bootstrap 

```bash
npm install bootstrap@5.3.2

#App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
```
## Sass

```bash
npm install sass
```

## FontAwesome

```bash
npm i --save @fortawesome/fontawesome-svg-core
# Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/react-fontawesome@latest

#app.jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faFontAwesome)