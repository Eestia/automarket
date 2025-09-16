<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    // ✅ Autoriser le mass assignment pour 'name'
    protected $fillable = ['name'];
}
