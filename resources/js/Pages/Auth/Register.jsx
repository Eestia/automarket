import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Inscription" />

            <div className="container min-vh-100 d-flex align-items-center justify-content-center py-5">
                <div
                    className="card shadow-lg p-4 p-md-5"
                    style={{ maxWidth: '500px', width: '100%', borderRadius: '15px' }}
                >
                    {/* Logo + titre */}
                    <div className="text-center mb-4">
                        <img
                            src="/storage/logo.png"
                            alt="Automarket"
                            className="img-fluid"
                            style={{ height: '60px' }}
                        />
                        <h2 className="mt-3 fw-bold">Créez votre compte</h2>
                        <p className="text-muted">
                            Rejoignez Automarket et commencez à vendre ou acheter des véhicules
                        </p>
                    </div>

                    {/* Formulaire */}
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <InputLabel htmlFor="name" value="Nom complet" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="form-control"
                                autoComplete="name"
                                isFocused
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="text-danger mt-1" />
                        </div>

                        <div className="mb-3">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="form-control"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="text-danger mt-1" />
                        </div>

                        <div className="mb-3">
                            <InputLabel htmlFor="password" value="Mot de passe" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="form-control"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="text-danger mt-1" />
                        </div>

                        <div className="mb-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirmez le mot de passe"
                            />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="form-control"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="text-danger mt-1"
                            />
                        </div>

                        <PrimaryButton
                            className="btn btn-primary w-100 py-2"
                            disabled={processing}
                        >
                            S’inscrire
                        </PrimaryButton>
                    </form>

                    {/* Liens bas de carte */}
                    <div className="text-center mt-4">
                        <span>Déjà inscrit ? </span>
                        <Link
                            href={route('login')}
                            className="text-decoration-none fw-bold text-primary"
                        >
                            Connectez-vous
                        </Link>
                    </div>

                    <div className="text-center mt-3">
                        <Link href="/" className="btn-retour">
                            Retour à l’accueil
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
