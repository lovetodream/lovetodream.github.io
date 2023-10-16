# compile stuff
./tailwindcss -i public/assets/pcss/app.pcss -o public/assets/css/app.css --minify
elm make src/Main.elm --optimize --output=public/main.js
elm make src/NotFound.elm --optimize --output=public/not-found.js

# move stuff to out
rm -rf out
mkdir out
cp -R public out/public
rm -rf out/public/pcss
cp main.js out/main.js
cp *.html out/