<?php 

use Propaganistas\LaravelPhone\PhoneNumber;

if (!function_exists('nationalFormat')) {
    function nationalFormat($data)
    {
        try {
            $phone = new PhoneNumber($data, 'JO');
            $phone = (string) $phone->formatForMobileDialingInCountry('BE');
        }
        catch (\Exception $e) {
            $phone = $data;
        }

        return $phone;
    }
}

if (!function_exists('fileDirectoryStructure')) {
    function fileDirectoryStructure($path): string
    {
        $format = now()->format('y/m/d');

        return "$format/$path";
    }
}

if (!function_exists('uploadStorage')) {
    function uploadStorage($path): string
    {
        return asset('storage/' . $path);
    }
}

