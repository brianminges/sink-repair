import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
// const convertRequestsToListElement = (request) => {
//     return `<li>${request.description}</li>`
// }

const convertRequestsToListElement = (request) => {
    return `
    <li>
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
`
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map(request => convertRequestsToListElement(request)).join(" ")}
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

