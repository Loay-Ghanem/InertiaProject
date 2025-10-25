<?php

namespace App\Enums;

enum UserType : string
{
    case ADMIN = 'admin';
    case CUSTOMER = 'customer';
    case FACTORY = 'factory';

    public static function toArray(): array
    {
        return array_map(fn($case) => $case->value, self::cases());
    }
}
