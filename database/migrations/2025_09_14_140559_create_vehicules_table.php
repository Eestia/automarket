<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('brand_id')->constrained('brands')->cascadeOnDelete();
            $table->foreignId('fuel_id')->constrained('fuels')->cascadeOnDelete();

            $table->string('model');
            $table->enum('etat', ['neuf', 'occasion']);
            $table->year('annee'); // entre 1975 et current_year (valider côté modèle/Request)
            $table->unsignedInteger('kilometrage');

            $table->boolean('abs')->default(false);

            $table->string('image1_path');
            $table->string('image2_path')->nullable();
            $table->string('image3_path')->nullable();
            $table->string('image4_path')->nullable();

            $table->enum('jantes', ['16','17','18','19','NONE'])->default('NONE');
            $table->enum('sellerie', ['Cuir','Tissus'])->nullable();

            $table->string('couleur', 7); // hex (#F54927)
            $table->enum('type', ['4X4','SUV','BREAK','LUDOSPACE','VAN','BERLINE']);
            $table->enum('cylindree', ['1l','1.2l','1.5l','1.8l','2l','3l','NONE'])->default('NONE');

            $table->decimal('prix', 12, 2);
            $table->longText('description')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicules');
    }
};
