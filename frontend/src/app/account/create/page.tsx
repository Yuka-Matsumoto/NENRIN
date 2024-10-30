import SignupForm from '../../../../components/Auth/SignupForm';

const SignupPage = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#ecf7f2] px-4">
            <h1 className="text-3xl font-bold mt-16 mb-8 text-teal-700">新規登録の方はこちらから</h1>
            <SignupForm />
        </div>
    );
};

export default SignupPage;