<?php

$token = '1338453801.e79f18f.fa1a7673fec1497e9bffd3298be78de1';
$url = 'https://api.instagram.com/v1/tags/hoaxray/media/recent?access_token=' . $token;
$handle = fopen($url, 'r');

fpassthru($handle);
fclose($handle);
