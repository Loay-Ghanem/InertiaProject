<?php

namespace App\Filament\Admin\Resources\SubCategories\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use App\Filament\Admin\Resources\Categories\Schemas\CategoryForm;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;

class SubCategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('parent_id')
                    ->label("Main Category")
                    ->relationship('parent', 'name')
                    ->required()
                    ->preload()
                    ->searchable()
                    ->createOptionForm(fn() => CategoryForm::categorySchema()),
                TextInput::make('name')
                    ->label('Sub Category Name')
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true),
                FileUpload::make('image')
                    ->required()
                    ->image()
                    ->directory(fileDirectoryStructure('sub-category/image'))
                    ->columnSpanFull(),
            ]);
    }
}
