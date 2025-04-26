<?php

$directory = new DirectoryIterator(__DIR__ . '/web');

foreach($directory as $file){
    if($file->isFile()){
        require_once $file->getPathname();
    }
}