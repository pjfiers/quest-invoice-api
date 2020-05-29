#!/bin/sh
cp `ls -t ./export/invoice*.csv | head -1` ./export/latest.csv
cp `ls -t ./export/transaction*.csv | head -1` ./export/latest-transactions.csv