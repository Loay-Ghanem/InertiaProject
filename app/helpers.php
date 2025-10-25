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