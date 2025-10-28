<?php

namespace App\Filament\Admin\Resources\Categories\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class CategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components(self::categorySchema());
    }

    public static function categorySchema(): array
    {
        return [
            TextInput::make('name')
                ->columnSpanFull()
                ->required(),
            FileUpload::make('image')
                ->required()
                ->image()
                ->directory(fileDirectoryStructure('main-category/image'))
                ->columnSpanFull(),
        ];
    }
}
