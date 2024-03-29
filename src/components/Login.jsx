import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import React from 'react';
import { supabase } from '../supabaseClient';


const Login = ({supa}) => (
    <>
    <h2>Welcome to AdVitals</h2>
    <p>Log in to to your account or sign in with Google</p>
    <Auth
    supabaseClient={supabase}
    theme="default" // can also be "dark"
    providers={['google']}
    appearance={{ 
        theme: ThemeSupa,
        extend: true, // This will override the default theme
        classNames: {
            button: 'login-form-button',
            input: 'login-form-input'
        },
    
    }}
  />
    </>
)

export default Login;