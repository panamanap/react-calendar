export const checkValidation = (email: string, name: string) => {
    if (!email || !name) {
        alert(
            `Enter your${!email ? ' email' : ''}${!name ? ' name' : ''}`
        );
        return;
    }
    if (!email.match(/.+@.+\..+/i)) {
        alert('Please enter a valid email!');
        return;
    }
    if (!name.match(/[^\d]/g)) {
        alert('Please enter a valid name!');
        return;
    }
}
