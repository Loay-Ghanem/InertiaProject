<?php

namespace App\Filament\Admin\Resources\Users\Factories\RelationManagers;

use Filament\Tables\Table;
use Filament\Schemas\Schema;
use Filament\Actions\EditAction;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use App\Filament\Admin\Resources\Items\Schemas\ItemForm;
use Filament\Resources\RelationManagers\RelationManager;
use App\Filament\Admin\Resources\Items\Tables\ItemsTable;

class ItemsRelationManager extends RelationManager
{
    protected static string $relationship = 'items';

    public function form(Schema $schema): Schema
    {
        return $schema->components(ItemForm::formSchema());
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('Items')
            ->columns(ItemsTable::tableSchema())
            ->headerActions([
                CreateAction::make(),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
