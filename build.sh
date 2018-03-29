#!/bin/bash

gitbook -v 3.2.3 build
rm -rf dist.zip
(cd _book; zip -r ../dist.zip *)
