#!/bin/bash
USERNAME="localhost"
HOSTNAME="95.85.60.59"
SCRIPT="mkdir test.txt"
ssh -l ${USERNAME} ${HOSTNAME} "${SCRIPT}"