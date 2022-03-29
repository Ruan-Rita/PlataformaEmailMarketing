<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailLog extends Model
{
    use HasFactory;

    protected $table = "email_log";

    protected $fillable = [
        'description',
        'template', // aqui tem ser enum ou tabela de templates customizados pelo usuário
        'client_id',
        'user_id'
    ];

}
