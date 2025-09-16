import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Connexion" />

            <div className="container min-vh-100 d-flex align-items-center justify-content-center py-5">
                <div className="card shadow-lg p-4 p-md-5" style={{ maxWidth: '450px', width: '100%', borderRadius: '15px' }}>
                    
                    {/* Logo et titre */}
                    <div className="text-center mb-4">
                        <img src="/storage/logo.png" alt="Automarket" className="img-fluid" style={{ height: '60px' }} />
                        <h2 className="mt-3 fw-bold">Connectez-vous à votre compte</h2>
                        <p className="text-muted">Accédez à toutes vos fonctionnalités Automarket</p>
                    </div>

                    {/* Status message */}
                    {status && (
                        <div className="alert alert-success" role="alert">
                            {status}
                        </div>
                    )}

                    {/* Formulaire */}
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="form-control"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
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
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="text-danger mt-1" />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <label className="form-check-label ms-2">
                                    Se souvenir de moi
                                </label>
                            </div>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-decoration-none text-primary"
                                >
                                    Mot de passe oublié ?
                                </Link>
                            )}
                        </div>

                        <PrimaryButton
                            className="btn btn-primary w-100 py-2"
                            disabled={processing}
                        >
                            Se connecter
                        </PrimaryButton>
                    </form>

                    <div className="text-center mt-4">
                        <span>Pas de compte ? </span>
                        <Link href="/register" className="text-decoration-none fw-bold text-primary">
                            Inscrivez-vous
                        </Link>
                    </div>
                     <div className="text-center mb-3">
                        <Link href="/" className="btn-retour">
                            Retour à l’accueil
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
