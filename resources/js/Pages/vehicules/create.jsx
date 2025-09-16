import React from 'react';
import { useForm } from '@inertiajs/react';
import FrontLayout from '@/Layouts/Front'; // ton layout avec la nav

export default function CreateVehicule({ brands,auth }){
    const { data, setData, post, processing, errors } = useForm({
        model: '',
        etat: 'neuf',
        brand_id: '',
        annee: '',
        kilometrage: '',
        fuel_id: '',
        cylindree: '',
        type: '',
        jantes: '',
        sellerie: '',
        couleur: '#000000',
        abs: false,
        prix: '',
        image1: null,
        image2: null,
        image3: null,
        image4: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('vehicules.store'), {
            onSuccess: () => {
                window.location.href = '/';
            }
        });
    };

    return (
    <FrontLayout auth={auth}>
        <div className="container py-5">
            <h1 className="mb-4">Mettre en vente votre voiture</h1>

            <form onSubmit={submit} className="row g-3">
                {/* Modèle */}
                <div className="col-md-6">
                    <label className="form-label">Modèle</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.model}
                        onChange={e => setData('model', e.target.value)}
                    />
                    {errors.model && <div className="text-danger">{errors.model}</div>}
                </div>

                {/* État */}
                <div className="col-md-6">
                    <label className="form-label">État</label>
                    <select
                        className="form-select"
                        value={data.etat}
                        onChange={e => setData('etat', e.target.value)}
                    >
                        <option value="neuf">Neuf</option>
                        <option value="occasion">Occasion</option>
                    </select>
                    {errors.etat && <div className="text-danger">{errors.etat}</div>}
                </div>
                {/* Marque */}
                <div className="col-md-6">
                    <label className="form-label">Marque</label>
                    <select
                        className="form-select"
                        value={data.brand_id}
                        onChange={e => setData('brand_id', e.target.value)}
                    >
                        <option value="">Sélectionnez</option>
                        {brands.map(brand => (
                        <option key={brand.id} value={brand.id}>
                            {brand.name}
                        </option>
                        ))}
                    </select>
                    {errors.brand_id && <div className="text-danger">{errors.brand_id}</div>}
                </div>
                {/* Année */}
                <div className="col-md-6">
                    <label className="form-label">Année</label>
                    <input
                        type="number"
                        className="form-control"
                        value={data.annee}
                        onChange={e => setData('annee', e.target.value)}
                        min="1975"
                        max={new Date().getFullYear()}
                    />
                    {errors.annee && <div className="text-danger">{errors.annee}</div>}
                </div>

                {/* Kilométrage */}
                <div className="col-md-6">
                    <label className="form-label">Kilométrage</label>
                    <input
                        type="number"
                        className="form-control"
                        value={data.kilometrage}
                        onChange={e => setData('kilometrage', e.target.value)}
                        min="0"
                    />
                    {errors.kilometrage && <div className="text-danger">{errors.kilometrage}</div>}
                </div>

                {/* Carburant */}
                <div className="col-md-6">
                    <label className="form-label">Carburant</label>
                    <select
                        className="form-select"
                        value={data.fuel_id}
                        onChange={e => setData('fuel_id', e.target.value)}
                    >
                        <option value="">Sélectionnez</option>
                        <option value="1">Essence</option>
                        <option value="2">Diesel</option>
                        <option value="3">Électrique</option>
                    </select>
                    {errors.fuel_id && <div className="text-danger">{errors.fuel_id}</div>}
                </div>

                {/* Cylindrée */}
                <div className="col-md-6">
                    <label className="form-label">Cylindrée</label>
                    <select
                        className="form-select"
                        value={data.cylindree}
                        onChange={e => setData('cylindree', e.target.value)}
                    >
                        <option value="">Sélectionnez</option>
                        <option value="1l">1l</option>
                        <option value="1.2l">1.2l</option>
                        <option value="1.5l">1.5l</option>
                        <option value="1.8l">1.8l</option>
                        <option value="2l">2l</option>
                        <option value="3l">3l</option>
                        <option value="NONE">NONE</option>
                    </select>
                    {errors.cylindree && <div className="text-danger">{errors.cylindree}</div>}
                </div>

                {/* Type */}
                <div className="col-md-6">
                    <label className="form-label">Type</label>
                    <select
                        className="form-select"
                        value={data.type}
                        onChange={e => setData('type', e.target.value)}
                    >
                        <option value="">Sélectionnez</option>
                        <option value="4X4">4X4</option>
                        <option value="SUV">SUV</option>
                        <option value="BREAK">BREAK</option>
                        <option value="LUDOSPACE">LUDOSPACE</option>
                        <option value="VAN">VAN</option>
                        <option value="BERLINE">BERLINE</option>
                    </select>
                    {errors.type && <div className="text-danger">{errors.type}</div>}
                </div>

                {/* Jantes */}
                <div className="col-md-6">
                    <label className="form-label">Jantes</label>
                    <select
                        className="form-select"
                        value={data.jantes}
                        onChange={e => setData('jantes', e.target.value)}
                    >
                        <option value="">Sélectionnez</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="NONE">NONE</option>
                    </select>
                    {errors.jantes && <div className="text-danger">{errors.jantes}</div>}
                </div>

                {/* Sellerie */}
                <div className="col-md-6">
                    <label className="form-label">Sellerie</label>
                    <select
                        className="form-select"
                        value={data.sellerie}
                        onChange={e => setData('sellerie', e.target.value)}
                    >
                        <option value="">Sélectionnez</option>
                        <option value="Cuir">Cuir</option>
                        <option value="Tissus">Tissus</option>
                    </select>
                    {errors.sellerie && <div className="text-danger">{errors.sellerie}</div>}
                </div>

                {/* Couleur */}
                <div className="col-md-6">
                    <label className="form-label">Couleur</label>
                    <input
                        type="color"
                        className="form-control form-control-color"
                        value={data.couleur}
                        onChange={e => setData('couleur', e.target.value)}
                    />
                    {errors.couleur && <div className="text-danger">{errors.couleur}</div>}
                </div>

                {/* ABS */}
                <div className="col-md-6 d-flex align-items-center">
                    <input
                        type="checkbox"
                        className="form-check-input me-2"
                        checked={data.abs}
                        onChange={e => setData('abs', e.target.checked)}
                    />
                    <label className="form-check-label">ABS</label>
                </div>

                {/* Prix */}
                <div className="col-md-6">
                    <label className="form-label">Prix (€)</label>
                    <input
                        type="number"
                        className="form-control"
                        value={data.prix}
                        onChange={e => setData('prix', e.target.value)}
                        min="0"
                    />
                    {errors.prix && <div className="text-danger">{errors.prix}</div>}
                </div>

                {/* Images */}
                <div className="col-12">
                    <label className="form-label">Images</label>
                    <input
                        type="file"
                        className="form-control mb-2"
                        onChange={e => setData('image1', e.target.files[0])}
                    />
                    <input
                        type="file"
                        className="form-control mb-2"
                        onChange={e => setData('image2', e.target.files[0])}
                    />
                    <input
                        type="file"
                        className="form-control mb-2"
                        onChange={e => setData('image3', e.target.files[0])}
                    />
                    <input
                        type="file"
                        className="form-control mb-2"
                        onChange={e => setData('image4', e.target.files[0])}
                    />
                </div>

                {/* Boutons */}
                <div className="col-12 d-flex justify-content-between mt-4">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => window.history.back()}
                    >
                        Annuler
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={processing}
                    >
                        Publier l'annonce
                    </button>
                </div>
            </form>
        </div>
    </FrontLayout>
    );
}
