#!/bin/bash
npm install -g n
/etc/init.d/mysql start
mysql -u root -e "CREATE DATABASE job_board"
mysql -u root job_board < /tmp/job_board.sql