<?php

namespace App;

use Filament\Forms\Components\Radio;
use Illuminate\Support\Facades\Hash;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\ToggleColumn;

trait UserFilamentBuilder
{
    public static function getUserFormSchema($extraAttr = []): array
    {
        $extraAttr[] =
            Radio::make('is_active')
                ->label('Is This Active User?')
                ->boolean();

        $schema = [
            TextInput::make('name')
                ->label('Name')
                ->required()
                ->maxLength(255),
            TextInput::make('email')
                ->label('Email')
                ->email()
                ->required()
                ->unique(ignoreRecord: true),
            TextInput::make('password')
                ->password()
                ->dehydrateStateUsing(fn($state) => Hash::make($state))
                ->dehydrated(fn($state) => filled($state))
                ->required(fn(string $context): bool => $context === 'create'),
            TextInput::make('phone')
                ->label('Phone Number')
                ->required()
                ->maxLength(13),
            FileUpload::make('image')
                ->image()
                ->directory(fileDirectoryStructure('user/customer/image'))
                ->columnSpanFull(),
        ];

        $attrs = array_merge($schema, $extraAttr);

        return $attrs;
    }

    public static function tableSchema($extraAttr = [])
    {
        $extraAttr[] =
            ToggleColumn::make('is_active')
                ->onColor('success')
                ->offColor('danger');

        $schema = [
            TextColumn::make('name')
                ->label('Name'),
            TextColumn::make('email')
                ->label('Email')
                ->copyable()
                ->copyMessage("Email Copied")
                ->copyMessageDuration(1000),
            TextColumn::make('phone')
                ->label('Phone Number')
                ->copyable()
                ->copyMessage("Phone number Copied")
                ->copyMessageDuration(1000),
        ];

        $attrs = array_merge($schema, $extraAttr);
        return $attrs;
    }
}
