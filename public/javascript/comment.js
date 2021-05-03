async function commentFormHandler(event) {
    event.preventDefault();

<<<<<<< HEAD
    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
=======
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
>>>>>>> c4897ca319d62277b87b18507153b9428828e0b4

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
<<<<<<< HEAD

        } else {
            alert(response.statusText);
            document.querySelector('#comment-form').style.display = "block";
=======
        } else {
            alert(response.statusText);
>>>>>>> c4897ca319d62277b87b18507153b9428828e0b4
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);