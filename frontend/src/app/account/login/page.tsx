import RootLayout from '../../layout';
import CustomHeader from "../../../../components/layout/CustomHeader";
import LoginForm from '../../../../components/Auth/LoginForm';

const LoginPage = () => {
    return (
        <RootLayout header={<CustomHeader />}>
            <div>
                {/* <h1>ログイン</h1> */}
                <LoginForm />
            </div>
        </RootLayout>
    );
};

export default LoginPage;