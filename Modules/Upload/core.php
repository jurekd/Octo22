<?php
    function reArrayFiles(&$file_post) {
        $file_ary = array();
        $file_count = count($file_post['name']);
        $file_keys = array_keys($file_post);
        for ($i=0; $i<$file_count; $i++) {
            foreach ($file_keys as $key) {
                $file_ary[$i][$key] = $file_post[$key][$i];
            }
        }
        return $file_ary;
    }
    
    function UploadImages($array, $size, $path, $name){
        if(is_array($array) !== FALSE){
            $i = 0; $result = FALSE; $format = '';
            foreach ($array as $file){
                $filename = $file['name'];
		        $filetype = $file['type'];
		        $tmpfilename = $file['tmp_name'];
		        $dir = $_SERVER['DOCUMENT_ROOT']."/".$path;
                $time = new DateTimeC();
                switch($filetype){
                    case 'image/jpeg':
                        $format = '.jpg';
                        break;
                    case 'image/png':
                        $format = '.png';
                        break;
                }
		        $newname = $name.$time->ToString('smhDMY').$i.$format;
		        $uploadfile = $dir.$newname;
                if(move_uploaded_file($tmpfilename, $uploadfile)){
                    if($filetype == 'image/jpeg'){
                        $src = imagecreatefromjpeg($uploadfile);
                    } else if($filetype == 'image/png'){
                        $src = imagecreatefrompng($uploadfile);
                    }
                    $width = imagesx($src);
                    $height = imagesy($src);
                    if(($width > $size) || ($height > $size)){
                        if($width > $height){
                            $scale = $size/$width;
                        } else {
                            $scale = $size/$height;
                        }
                        $y = floor($height * $scale);
                        $x = floor($width * $scale);
                        $dst = imagecreatetruecolor($x, $y);
                        imagecopyresampled($dst, $src, 0, 0, 0, 0, $x, $y, $width, $height);
                        if($filetype == 'image/jpeg'){
                            imagejpeg($dst, $dir.$newname);
                        } else if($filetype == 'image/png'){
                            imagepng($dst, $dir.$newname);
                        }
                    }
                    $file = $path.$newname;
                    $result[$i] = $file;
                    $i = $i + 1;
                } else {
                    return FALSE;
                }
            }
            return $result;
        } else {
            return FALSE;
        }
    }

    function UploadFile($file, $path, $name){
        // return $path
    }
?>