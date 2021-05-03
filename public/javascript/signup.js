async function signupFormHandler(event) {
    event.preventDefault();

<<<<<<< HEAD

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
=======
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const twitter = document.querySelector('#twitter-signup').value.trim();
    const github = document.querySelector('#github-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                twitter,
                github,
>>>>>>> c4897ca319d62277b87b18507153b9428828e0b4
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
<<<<<<< HEAD
        if (response.ok) {
            console.log('success');


            document.location.replace('/dashboard');

=======

        // check the response status
        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard');
>>>>>>> c4897ca319d62277b87b18507153b9428828e0b4
        } else {
            alert(response.statusText);
        }
    }
}

<<<<<<< HEAD
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
=======
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
>>>>>>> c4897ca319d62277b87b18507153b9428828e0b4
