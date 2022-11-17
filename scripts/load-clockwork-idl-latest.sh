#!/bin/bash

git clone git@github.com:clockwork-xyz/clockwork.git

cd clockwork

cargo install

cargo build

anchor build

cd ../

cp ./clockwork/target/types/* ./src/anchor/types

rm -rf ./clockwork

end = timestamp

echo END;