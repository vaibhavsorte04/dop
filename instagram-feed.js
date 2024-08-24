document.addEventListener('DOMContentLoaded', function () {
    const accessToken = 'EAARtC8rn31EBO2OI9tYntArJUpMg5bmfN9ccm5w1SSUEw1CbxvPbfGtuseChYr3082zaDTN583siByXBj4oAGiZBoLJgNLDfk6hmfq7wRxkyJU5G6mpgHgXzuGwSasm2ZBqMb6081GZACOrBCNp6QzXFbf3TszUWw1BY4w39WZC9JlI2FHACVVmpV30Xh3SF1yzIV4u8K4bga7Xcvjr3QhcSxSwy0oKLGIjSOaZBmg62xOEy31zcXsZBhGbD0ZD'; // Replace with your access token
    const userId = 'sortedagain'; // Replace with your Instagram User ID
    const instagramFeed = document.getElementById('instagram-feed');

    fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => {
            data.data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('instagram-post');

                if (post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM') {
                    postElement.innerHTML = `
                        <a href="${post.permalink}" target="_blank">
                            <img src="${post.media_url}" alt="${post.caption}" />
                        </a>
                    `;
                } else if (post.media_type === 'VIDEO') {
                    postElement.innerHTML = `
                        <a href="${post.permalink}" target="_blank">
                            <video controls>
                                <source src="${post.media_url}" type="video/mp4">
                            </video>
                        </a>
                    `;
                }

                instagramFeed.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching Instagram posts:', error));
});
