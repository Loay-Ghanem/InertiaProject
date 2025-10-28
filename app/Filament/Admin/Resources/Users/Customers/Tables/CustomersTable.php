<?php

namespace App\Filament\Admin\Resources\Users\Customers\Tables;

use App\Models\User;
use Filament\Tables\Table;
use Filament\Actions\EditAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;

class CustomersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns(User::tableSchema())
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
