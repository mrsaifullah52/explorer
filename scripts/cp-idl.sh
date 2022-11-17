#!/bin/bash

cp clockwork/target/types/* ./src/anchor/types

for file in ./src/anchor/types/*.ts;
do mkdir -p "src/anchor/types/$(sed -n '2p' < $file  | cut -d":" -f 2 | sed 's/"//g' | sed 's/;//g' | sed 's/,//g' | sed 's/ //g')" && mv -v "${file}" "$(sed -n '2p' < $file  | cut -d":" -f 2 | sed 's/"//g' | sed 's/;//g' | sed 's/,//g' | sed 's/ //g')/${file%.*}.${file##*.}";
# echo $VERSION;
# VERSION= sed -n '2p' < $file  | cut -d":" -f 2 | sed 's/"//g' | sed 's/;//g' | sed 's/,//g' | sed 's/ //g';
# # echo $VERSION;
# mv -v "${file}" $VERSION"${file%.*}.${file##*.}";
# printf '%s\n' "${f%.ts}_$VERSION.ts";
done
