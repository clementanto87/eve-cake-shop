#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'yourdomain.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy to GitHub Pages'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/clementanto87/eve-cake-shop.git main:gh-pages

cd -