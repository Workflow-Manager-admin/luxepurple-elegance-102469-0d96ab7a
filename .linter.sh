#!/bin/bash
cd /home/kavia/workspace/code-generation/luxepurple-elegance-102469-0d96ab7a/luxe_purple_elegance
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

