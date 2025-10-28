<?php

namespace App\Filament\Admin\Resources\Users\Admins\Schemas;

use App\Models\User;
use Filament\Schemas\Schema;
use Filament\Forms\Components\Hidden;

class AdminForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components(self::formSchema());
    }

    private static function formSchema()
    {
        $attr = [
            Hidden::make('user_type')
                ->default('admin'),
        ];

        return User::getUserFormSchema($attr);
    }
}
