<?php

namespace App\Filament\Admin\Resources\Users\Factories\Schemas;

use App\Models\User;
use Filament\Schemas\Schema;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\FileUpload;

class FactoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components(self::formSchema());
    }

    private static function formSchema()
    {
        $attr = [
            FileUpload::make('image')
                ->image()
                ->directory(fileDirectoryStructure('user/factory/image'))
                ->columnSpanFull(),
            Hidden::make('user_type')
                ->default('customer'),
        ];

        return User::getUserFormSchema($attr);
    }
}
