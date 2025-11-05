<?php

namespace App\Filament\Admin\Resources\Items\Schemas;

use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;

class ItemForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components(self::formSchema());
    }

    public static function formSchema(): array
    {
        return [
            TextInput::make('name')
                ->required()
                ->maxLength(255),
            Select::make('category_id')
                ->relationship('category', 'name')
                ->required()
                ->preload()
                ->searchable(),
            Select::make('factory_id')
                ->relationship('factory', 'name')
                ->required()
                ->preload()
                ->searchable(),
            TextInput::make('price')
                ->prefixIcon(Heroicon::CurrencyDollar)
                ->required()
                ->numeric()
                ->minValue(0),
            Textarea::make('description')
                ->rows(5)
                ->required()
                ->columnSpanFull(),
            FileUpload::make('images')
                ->image()
                ->multiple()
                ->directory(uploadStorage('item/image'))
                ->required()
                ->columnSpanFull()
        ];
    }
}
