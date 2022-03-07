
call npm run build

cd dist

git init
git add -A
git commit -m "New Deployment"
git push -f git@github.com:kieperb/pw-generator-demo.git master:main
cd ..