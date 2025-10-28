<?php

namespace App\Filament\Admin\Resources\Users\Admins\Pages;

use App\Filament\Admin\Resources\Users\Admins\AdminResource;
use Filament\Resources\Pages\CreateRecord;

class CreateAdmin extends CreateRecord
{
    protected static string $resource = AdminResource::class;
}
