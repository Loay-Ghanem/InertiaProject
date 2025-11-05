<?php

namespace App\Filament\Admin\Resources\Users\Customers\Schemas;

use App\Models\User;
use Filament\Schemas\Schema;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\FileUpload;

class CustomerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components(self::formSchema());
    }

    private static function formSchema()
    {
        $attr = [
            Hidden::make('user_type')
                ->default('customer'),
        ];

        return User::getUserFormSchema($attr);
    }
}
