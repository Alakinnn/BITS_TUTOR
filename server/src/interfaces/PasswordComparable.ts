interface PasswordComparable {
    passwordValid: (password: string) => Promise<boolean>;
}

export default PasswordComparable;
