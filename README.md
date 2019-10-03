# NgHashRouterProblem

I'm experiencing some unexpected behavior with the angular router. To reproduce:

1. `npm install`
2. `npm build`
3. `npm server`
4. navigate to localhost:3000/Home

I would expect the url to remain as `localhost:3000/Home` after loading the application, but instead, the url is changed to the base href I specified in  `some-other-path/index.html`, which is `/dist/ng-hash-router-problem/`. (This is not default browser behavior). This is a problem, becuase if I refresh the browser, I would want to refresh the original url `localhost:3000/Home`.

Why is angular doing this and how would I turn it off? I spent a lot of time searching the anuglar code-base, but couldn't find it. I am using hash routing instead of the default path routing, in which case I would assume angular shouldn't care about anything that comes before the /#?

(The setup to reproduce the problem is admitedly very contrived. Assume the problem is with the client side app, not the server. In my real-world scenario, my index.html page is an MVC view that's generated on the server. In the generated index.html file, I have to set the base href to the directory from which my built js and css files are being served on the server. I could use absolute urls but that is a pain because the host might be different per environment, and anyways I have lazy-loaded files that depend on being loaded from relative urls)