while getopts t: flag
do
    case "${flag}" in
        t) twplatform=${OPTARG};;
    esac
done

if [ -n "${twplatform}" ]; then
    echo "Installing tailwindcss for ${twplatform}..."
    curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/${twplatform}
    chmod +x ${twplatform}
    rm -rf tailwindcss
    mv ${twplatform} tailwindcss
    echo "Installed tailwindcss sucessfully! :)"
fi


# compile stuff
./tailwindcss -i public/assets/pcss/app.pcss -o public/assets/css/app.css --minify
elm make src/Main.elm --optimize --output=public/main.js
elm make src/NotFound.elm --optimize --output=public/not-found.js

# move stuff to out
rm -rf out
mkdir out
cp -R public out/public
rm -rf out/public/pcss
cp *.html out/
cp -R static/* out/