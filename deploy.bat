
call npm run build

cd dist

git init
git add -addgit commit -m 'New Deplyment'
git push -f git@github.com:kieperb/pw-generator-demo.git main:gh-pages