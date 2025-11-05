<?php

namespace App\Filament\Admin\Resources\Items\Tables;

use Filament\Tables\Table;
use Filament\Actions\EditAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Tables\Columns\TextColumn;

class ItemsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns(self::tableSchema())
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function tableSchema()
    {
        return [
            TextColumn::make('name'),
            TextColumn::make('factory.name'),
            TextColumn::make('category.name'),
            TextColumn::make('price')
                ->formatStateUsing(fn ($state) => '$' . number_format($state, 2)),
            TextColumn::make('description')
                ->limit(30)
        ];
    }
}
