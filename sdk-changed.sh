#!/bin/bash

# Check if the folder /packages/sdk has changed against main
changes=$(git diff --name-only main ./packages/sdk)
if [ -z "$changes" ]; then
  echo false
else
  echo true
fi