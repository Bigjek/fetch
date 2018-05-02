console.log('start');
function createNode(el){
    return document.createElement(el);
}

function append(parent, el){
    return parent.appendChild(el);
}

const ul = document.getElementById('friends');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((res) => res.json())
.then(function(data){
    let friends = data.results;
    return friends.map(function(friend){
        let li = createNode('li'),
            span = createNode('span'),
            img = createNode('img');
        img.src = friend.picture.medium;
        span.innerHTML = `${friend.name.first} ${friend.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);
    })
})
.catch(function(err){
    console.log(JSON.stringify(err));
})