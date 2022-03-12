export const checkValidation = (name: string, text: string) => {
    console.log(text);
    if(!text) {
        return
    }
    if (name === 'email' && !text.match(/.+@.+\..+/i)) {
        alert('Please enter a valid email!');
        return true;
    }
    if (name === 'name' &&  !text.match(/[^\d]/g)) {
        alert('Please enter a valid name!');
        return true;
    }
}
