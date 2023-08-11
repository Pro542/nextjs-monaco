# nextjs-monaco

`yarn install` to install required packages first,
then `yarn dev` to run the app locally. `localhost:3000` should load the monaco editor

`@monaco-editor/react` uses jsdelivr by default to use `monaco-editor` which is the base npm package. jsdelivr is blocked by egyptian ISPs so it doesn't work there.

You can test this by opening the network tab in chrome devtools and filtering with "jsdelivr"
<img width="897" alt="image" src="https://github.com/Pro542/nextjs-monaco/assets/6449851/5858aebd-d294-4630-b802-b448f697cd4c">


The initial commit gives a reproducible example.
