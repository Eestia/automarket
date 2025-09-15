<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Carbon\Carbon;

class StoreVehiculeRequest extends FormRequest
{
    /**
     * Détermine si l'utilisateur actuel est autorisé
     * à exécuter cette requête.
     */
    public function authorize(): bool
    {
        // On doit être connecté
        $user = $this->user();
        if (! $user) {
            return false;
        }

        // Rôles autorisés : user, modo, admin
        return in_array($user->role->name, ['user','modo','admin']);
    }

    /**
     * Règles de validation à appliquer à la requête.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $currentYear = now()->year;

        return [
            'brand_id'    => ['required', 'exists:brands,id'],
            'fuel_id'     => ['required', 'exists:fuels,id'],
            'model'       => ['required', 'string', 'max:255'],
            'etat'        => ['required', Rule::in(['neuf','occasion'])],
            'annee'       => ['required','integer',"between:1975,$currentYear"],
            'kilometrage' => ['required','integer','min:0'],
            'abs'         => ['boolean'],
            'image1_path' => ['required','image','max:2048'],
            'image2_path' => ['nullable','image','max:2048'],
            'image3_path' => ['nullable','image','max:2048'],
            'image4_path' => ['nullable','image','max:2048'],
            'jantes'      => [Rule::in(['16','17','18','19','NONE'])],
            'sellerie'    => [Rule::in(['Cuir','Tissus']), 'nullable'],
            'couleur'     => ['required','regex:/^#[0-9A-Fa-f]{6}$/'],
            'type'        => ['required', Rule::in(['4X4','SUV','BREAK','LUDOSPACE','VAN','BERLINE'])],
            'cylindree'   => ['required', Rule::in(['1l','1.2l','1.5l','1.8l','2l','3l','NONE'])],
            'prix'        => ['required','numeric','min:0'],
            'description' => ['nullable','string'],
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $fuel = $this->input('fuel_id');
            $cyl  = $this->input('cylindree');

            if ($fuel && $this->isFuelElectrique($fuel) && $cyl !== 'NONE') {
                $validator->errors()->add('cylindree',
                    'Si le carburant est Électrique, la cylindrée doit être NONE.');
            }
        });
    }

    protected function isFuelElectrique($fuelId): bool
    {
        return \DB::table('fuels')
            ->where('id', $fuelId)
            ->where('fuel', 'Electrique')
            ->exists();
    }
}
