#!/usr/bin/env bash

ssh localuser@95.85.60.59 << LimitString
cd bfs-calendar-mocks/scripts/
nohup ./stop.sh
LimitString