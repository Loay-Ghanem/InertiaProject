<?php

use App\Models\User;
use App\Enums\UserType;
use Illuminate\Support\Facades\Auth;
use Propaganistas\LaravelPhone\PhoneNumber;

if (!function_exists('nationalFormat')) {
    function nationalFormat($data)
    {
        try {
            $phone = new PhoneNumber($data, 'JO');
            $phone = (string) $phone->formatForMobileDialingInCountry('BE');
        } catch (\Exception $e) {
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

if (!function_exists('userIs')) {
    function userIs(UserType $type, ?User $user = null): bool
    {
        $user ??= Auth::user();
        return $user?->user_type === $type->value;
    }
}

if (!function_exists('isAdmin')) {
    function isAdmin(?User $user = null): bool
    {
        return userIs(UserType::ADMIN, $user);
    }
}

if (!function_exists('isCustomer')) {
    function isCustomer(?User $user = null): bool
    {
        return userIs(UserType::CUSTOMER, $user);
    }
}

if (!function_exists('isFactory')) {
    function isFactory(?User $user = null): bool
    {
        return userIs(UserType::FACTORY, $user);
    }
}

