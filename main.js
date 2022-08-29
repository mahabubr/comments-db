const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = comments => {
    const displayContainer = document.getElementById('display-container');

    for (let comment of comments.slice(0, 20)) {
        // console.log(comment)
        const displayDiv = document.createElement('div')
        displayDiv.classList.add('col-12')
        displayDiv.classList.add('col-md-6')
        displayDiv.classList.add('col-lg-3')
        displayDiv.innerHTML = `
        <div onclick="diplayDetails(${comment.id})" style="min-height: 120px;">
            <div class="collapse collapse-horizontal" id="collapseWidthExample">
                <div class="card card-body bg-light" style="width: 300px;">
                    <p class="text-danger">${comment.name.slice(0, 30)}</p>
                    <small>${comment.body.slice(0, 100)}</small>
                    <a href="${comment.email}" class="text-info mt-3">${comment.email}</a>
                </div>
            </div>
        </div>
        `
        displayContainer.appendChild(displayDiv)
    }
}

const diplayDetails = (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDisplayData(data))
}

const showDisplayData = (show) => {
    const displayDetails = document.getElementById('display-details')
    displayDetails.innerHTML = ``
    const div = document.createElement('div')
    div.innerHTML = `
                <div class="card-header bg-info">
                    Show Your Comment
                </div>
                <div class="card-body">
                    <h5 class="card-title">${show.title}</h5>
                    <p class="card-text">${show.body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer bg-info">
                    this content only append when you click anywhere
                </div>
    `
    displayDetails.appendChild(div)
}

loadData()